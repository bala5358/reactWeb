import React, { Fragment, useEffect, useState } from 'react';
import { Col, Card, CardHeader, Table, Input, Row } from 'reactstrap';
import { H3 } from '../../AbstractElements';
import { fetchClusterSummary } from '../../api/clusterApi';

const BoothListTable = () => {
  const [booths, setBooths] = useState([]);
  const [filteredBooths, setFilteredBooths] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('All');

  useEffect(() => {
    const loadBoothData = async () => {
      const res = await fetchClusterSummary();
      setBooths(res);

      // Extract unique constituencies from data
      const uniqueConstituencies = [
        ...new Set(res.map((booth) => booth.constituency || 'Unknown')),
      ];
      setConstituencies(['All', ...uniqueConstituencies]);
      setFilteredBooths(res);
    };
    loadBoothData();
  }, []);

  const getTotal = (sub) => (sub.voter || 0) + (sub.turnout || 0) + (sub.survey || 0);

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setSelectedConstituency(selected);

    if (selected === 'All') {
      setFilteredBooths(booths);
    } else {
      const filtered = booths.filter((b) => b.constituency === selected);
      setFilteredBooths(filtered);
    }
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <H3>Booth List</H3>
          </CardHeader>

          <Row className="px-4 pt-3">
            <Col md="4">
              <label htmlFor="constituencySelect" className="form-label fw-bold">
                Filter by Constituency
              </label>
              <Input
                type="select"
                id="constituencySelect"
                value={selectedConstituency}
                onChange={handleFilterChange}
              >
                {constituencies.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </Input>
            </Col>
          </Row>

          <div className="table-responsive p-4">
            <Table hover className="table-border-horizontal">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Booth Name</th>
                  <th>Constituency</th>
                  <th>Agents</th>
                  <th>Target</th>
                  <th>Voter</th>
                  <th>Turnout</th>
                  <th>Survey</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooths.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No booths found for selected constituency.
                    </td>
                  </tr>
                ) : (
                  filteredBooths.map((booth, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{booth.booth_name}</td>
                      <td>{booth.constituency || 'N/A'}</td>
                      <td>
                        <ul className="mb-0 ps-3">
                          {booth.agents.map((a, i) => (
                            <li key={i} className="small">{a.name}</li>
                          ))}
                        </ul>
                      </td>
                      <td>{booth.target}</td>
                      <td>{booth.submissions.voter || 0}</td>
                      <td>{booth.submissions.turnout || 0}</td>
                      <td>{booth.submissions.survey || 0}</td>
                      <td>{getTotal(booth.submissions)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BoothListTable;
