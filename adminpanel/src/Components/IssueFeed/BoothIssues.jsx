import React, { useEffect, useState, Fragment } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Media,
  Input,
  Label,
  FormGroup,
  Row,
  Badge
} from 'reactstrap';
import { H5, P } from '../../AbstractElements'; // Adjust if needed

const fetchBoothIssues = async () => {
  return [
    {
      id: 1,
      booth: 'Booth 7 - East Side',
      issue: 'Device not working',
      status: 'Pending',
      date: '2025-08-06',
      constituency: 'North Zone'
    },
    {
      id: 2,
      booth: 'Booth 4 - West Town',
      issue: 'Missing survey forms',
      status: 'Resolved',
      date: '2025-08-05',
      constituency: 'South Zone'
    },
    {
      id: 3,
      booth: 'Booth 9 - Central Ward',
      issue: 'Tablet not syncing data',
      status: 'Pending',
      date: '2025-08-04',
      constituency: 'North Zone'
    }
  ];
};

const BoothIssues = () => {
  const [issues, setIssues] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('All');
  const [constituencies, setConstituencies] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchBoothIssues();
      setIssues(res);
      setFiltered(res);
      const zones = ['All', ...new Set(res.map(i => i.constituency))];
      setConstituencies(zones);
    };
    load();
  }, []);

  useEffect(() => {
    if (selectedConstituency === 'All') {
      setFiltered(issues);
    } else {
      setFiltered(issues.filter(i => i.constituency === selectedConstituency));
    }
  }, [selectedConstituency, issues]);

  return (
    <Fragment>
      <Card className="shadow-sm">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <H5 className="mb-0">📋 Booth Issues</H5>
          <FormGroup className="d-flex align-items-center mb-0">
            <Label for="constituency" className="me-2 fw-bold mb-0">Constituency:</Label>
            <Input
              type="select"
              id="constituency"
              bsSize="sm"
              value={selectedConstituency}
              onChange={(e) => setSelectedConstituency(e.target.value)}
            >
              {constituencies.map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </Input>
          </FormGroup>
        </CardHeader>

        <CardBody>
          <Row className="g-4">
            {filtered.map((item) => (
              <Col xl="4" sm="6" className="box-col-6" key={item.id}>
                <Card className="bg-primary text-white">
                  <CardBody>
                    <Media className="faq-widgets">
                      <Media body>
                        <H5 className="text-white" style={{ fontSize: "16px" }}>{item.booth}</H5>
                        <P className="text-white">{item.issue}</P>
                        <div className="d-flex justify-content-between align-items-center">
                          <small>{item.date}</small>
                          <Badge color={item.status === 'Resolved' ? 'success' : 'warning'}>
                            {item.status}
                          </Badge>
                        </div>
                      </Media>
                      <div className="ms-3 fs-4">
                        <i className={`fa ${item.status === 'Resolved' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-white`}></i>
                      </div>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default BoothIssues;
