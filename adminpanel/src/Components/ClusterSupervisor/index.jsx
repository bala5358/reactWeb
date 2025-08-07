import React, { useEffect, useState } from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table, Badge
} from 'reactstrap';
import { H3 } from '../../AbstractElements';
import { FaMapMarkerAlt, FaUsers, FaClipboardList } from 'react-icons/fa';

// Mock data
const fetchDashboardData = async () => {
  return {
    constituency: 'Gandhi Nagar',
    supervisor: 'Supervisor A',
    total_booths: 8,
    total_agents: 24,
    total_submissions: 320,
    recent_activity: [
      {
        booth: 'Booth 1',
        agent: 'Ravi Kumar',
        submission_type: 'Survey',
        submitted_at: '2025-08-07 09:40 AM'
      },
      {
        booth: 'Booth 3',
        agent: 'Anil',
        submission_type: 'Turnout',
        submitted_at: '2025-08-07 08:50 AM'
      }
    ]
  };
};

const ClusterSupervisorDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchDashboardData();
      setData(res);
    };
    load();
  }, []);

  if (!data) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container-fluid">
      <Row className="mb-4">
        <Col md={12}>
          <Card className="border-0">
            <CardBody className="d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <H3 className="mb-1">👤 Cluster Supervisor</H3>
                <div className="text-muted">
                  <FaMapMarkerAlt className="me-2" />
                  {data.constituency} • {data.supervisor}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-white bg-primary">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Total Booths</h6>
                  <h3>{data.total_booths}</h3>
                </div>
                <FaMapMarkerAlt size={32} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white bg-success">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Total Agents</h6>
                  <h3>{data.total_agents}</h3>
                </div>
                <FaUsers size={32} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white bg-info">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Total Submissions</h6>
                  <h3>{data.total_submissions}</h3>
                </div>
                <FaClipboardList size={32} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <CardHeader>
              <H3>🧾 Recent Booth Activity</H3>
            </CardHeader>
            <CardBody>
              <Table className="table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Booth</th>
                    <th>Agent</th>
                    <th>Submission Type</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent_activity.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{item.booth}</td>
                      <td>{item.agent}</td>
                      <td>
                        <Badge color="primary">{item.submission_type}</Badge>
                      </td>
                      <td>{item.submitted_at}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ClusterSupervisorDashboard;
