import React, { Fragment, useState, useEffect } from "react";
import {
  Container, Row, Col, Card, CardHeader
} from "reactstrap";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import GuardianCommon from "../../Bonus-Ui/Guardian/GuardianCommon";

const VoterAgeFilter = () => {
  const [voterData, setVoterData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("above80");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/voters`);
        const json = await res.json();
        const data = Array.isArray(json) ? json : json.data || [];
        setVoterData(data);
      } catch (err) {
        console.error("Failed to fetch voter data:", err);
        setVoterData([]);
      }
    };

    fetchData();
  }, []);

  const getFilteredData = () => {
    switch (selectedFilter) {
      case "above80":
        return voterData.filter(voter => voter.age >= 80);
      case "new":
        return voterData.filter(voter => voter.age >= 18 && voter.age <= 20);
      case "transgender":
        return voterData.filter(voter => voter.gender && voter.gender.toLowerCase() === "other");
      default:
        return voterData;
    }
  };

  const filters = [
    { label: "80 Above", icon: "fa fa-blind", slug: "above80" },
    { label: "New Voters", icon: "fa fa-child", slug: "new" },
    { label: "Transgender", icon: "fa fa-transgender", slug: "transgender" }
  ];

  const renderCard = (item, idx) => (
    <Col key={idx} xs="12" sm="6" md="4" xl="4" className="mb-4 d-flex justify-content-center">
      <div
        className="position-relative text-center"
        style={{
          width: "100%",
          minHeight: "185px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #7366FF, #6FC1FF)",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 16px",
          transition: "transform 0.2s",
          cursor: "pointer",
        }}
        onClick={() => setSelectedFilter(item.slug)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div>
          <i className={item.icon} style={{ fontSize: "2rem" }}></i>
          <h5 style={{ marginTop: "10px", marginBottom: "16px" }}>{item.label}</h5>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <button
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: "none",
              background: "#fff",
              color: "#7366FF",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <i className="fa fa-external-link"></i>
          </button>
        </div>
      </div>
    </Col>
  );

  return (
    <Fragment>
      <Container fluid={true}>
        <Row style={{ paddingBottom: "20px" }}>
          {filters.map(renderCard)}
        </Row>

        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center gy-3">
                  <Col xs="12" md="6">
                    <H5 className="mb-0">
                      {selectedFilter === "above80" && "80 Above Voter List"}
                      {selectedFilter === "new" && "New Voters List"}
                      {selectedFilter === "transgender" && "Transgender Voters List"}
                    </H5>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>

          <Col sm="12">
            <GuardianCommon data={getFilteredData()} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default VoterAgeFilter;
