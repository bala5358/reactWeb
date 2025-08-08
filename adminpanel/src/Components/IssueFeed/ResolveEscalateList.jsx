import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Row,
  Col,
  Badge
} from 'reactstrap';

const fetchIssues = async () => {
  return [
    { id: 1, booth: 'Booth 7 - East Side', issue: 'Device not working', status: 'Pending' },
    { id: 2, booth: 'Booth 9 - Central Ward', issue: 'Connectivity issue', status: 'Pending' }
  ];
};

const ResolveEscalateList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchIssues();
      setIssues(res);
    };
    load();
  }, []);

  const updateStatus = (id, status) => {
    setIssues((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Resolved':
        return <Badge color="success">Resolved</Badge>;
      case 'Escalated':
        return <Badge color="danger">Escalated</Badge>;
      default:
        return <Badge color="warning" className="text-dark">Pending</Badge>;
    }
  };

  return (
    <Row className="g-4">
      {issues.map((item) => (
        <Col md="6" key={item.id}>
          <Card className="shadow-sm h-100 border-0">
            <CardHeader className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0 fw-bold">{item.booth}</h6>
                <small className="text-muted">{item.issue}</small>
              </div>
              {getStatusBadge(item.status)}
            </CardHeader>
            <CardBody className="d-flex justify-content-end gap-2">
              <Button
                color="success"
                size="sm"
                onClick={() => updateStatus(item.id, 'Resolved')}
                disabled={item.status === 'Resolved'}
              >
                ✅ Resolve
              </Button>
              <Button
                color="danger"
                size="sm"
                onClick={() => updateStatus(item.id, 'Escalated')}
                disabled={item.status === 'Escalated'}
              >
                ⛔ Escalate
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ResolveEscalateList;
