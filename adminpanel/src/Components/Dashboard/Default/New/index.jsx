import React, { Fragment, useState, useEffect } from "react";
import {
  Container, Row, Col, Card, CardHeader, Input, Button, Badge,
} from "reactstrap";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import NewCommon from "./NewCommon";
import { FaFilter } from "react-icons/fa";

import NewFilterModal from "./NewFilterModal";

const NewVoter = () => {
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [voterData, setVoterData] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minAgeFilter, setMinAgeFilter] = useState("");

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/voters`);
      const json = await res.json();
      setVoterData(Array.isArray(json) ? json : json.data || []);
    } catch (err) {
      console.error("Failed to fetch voter data:", err);
      setVoterData([]);
    }
  };

  fetchData();
}, []);


  const genderCounts = voterData.reduce(
    (acc, voter) => {
      if (voter.gender === 'Male') acc.male += 1;
      else if (voter.gender === 'Female') acc.female += 1;
      else acc.other += 1;
      return acc;
    },
    { male: 0, female: 0, other: 0 }
  );

  const total = voterData.length;

  const toggleModal = () => setModal(!modal);

  const handleApplyFilters = ({ gender, category, minAge }) => {
    setGenderFilter(gender);
    setCategoryFilter(category);
    setMinAgeFilter(minAge);
    setModal(false);
  };

  // ✅ DOB filter: check if dob matches today's month and date
 const filteredData = voterData.filter((item) => {
  const matchesSearch = [item.name, item.relatedPerson, item.voterId, item.houseNumber]
    .join(" ")
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesGender = genderFilter ? item.gender === genderFilter : true;
  const matchesAge = minAgeFilter ? item.age >= parseInt(minAgeFilter) : true;

  // ✅ Age range filter: between 18 and 21
  const matchesAgeRange = item.age >= 18 && item.age <= 20;

  return matchesSearch && matchesGender && matchesAge && matchesAgeRange;
});

  return (
    <Fragment>
      <Breadcrumbs parent="Pages" title="Guardian List" mainTitle="Voter List" />
      <Container fluid={true}>
        <Row style={{ paddingBottom: "20px" }}>
          <Col sm="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center gy-3">
                  <Col xs="12" md="3"><H5 className="mb-0">New Voters</H5></Col>

                  <Col xs="12" md="3">
                    <div className="d-flex justify-content-around flex-wrap gap-2 p-2"
                      style={{
                        border: "1px solid #ccc", borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", backgroundColor: "#f9f9f9"
                      }}>
                      <Badge color="success" pill>M: {genderCounts.male}</Badge>
                      <Badge color="danger" pill>F: {genderCounts.female}</Badge>
                      <Badge color="secondary" pill>O: {genderCounts.other}</Badge>
                      <Badge color="primary" pill>T: {total}</Badge>
                    </div>
                  </Col>

                  <Col xs="12" md="3">
                    <div className="d-flex justify-content-md-end gap-2">
                      <Input
                        type="text"
                        placeholder="Search name or voter ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: "200px" }}
                      />
                      <Button color="light" onClick={toggleModal}>
                        <FaFilter />
                      </Button>
                    </div>
                  </Col>

                  
                </Row>
              </CardHeader>
            </Card>
          </Col>

          <Col sm="12">
            <NewCommon data={filteredData} />
          </Col>
        </Row>

        <NewFilterModal
          show={modal}
          onClose={() => setModal(false)}
          onApply={handleApplyFilters}
          initialFilters={{
            gender: genderFilter,
            category: categoryFilter,
            minAge: minAgeFilter
          }}
        />
      </Container>
    </Fragment>
  );
};

export default NewVoter;
