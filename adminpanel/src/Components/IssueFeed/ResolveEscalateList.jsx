// ResolveEscalateList.jsx
import React, { useEffect, useState } from 'react';
import { Card, CardBody, Button, Row, Col } from 'reactstrap';

const fetchIssues = async () => {
  return [
    { id: 1, booth: 'Booth 7', issue: 'Device not working', status: 'Pending' },
    { id: 2, booth: 'Booth 9', issue: 'Connectivity issue', status: 'Pending' }
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

  return (
    <Row className="g-4">
      {issues.map((item) => (
        <Col md={6} key={item.id}>
          <Card className="p-3 shadow-sm">
            <h6 className="fw-bold">{item.booth}</h6>
            <p className="text-muted mb-2">{item.issue}</p>
            <div className="d-flex gap-2">
              <Button color="success" size="sm" onClick={() => updateStatus(item.id, 'Resolved')}>Resolve</Button>
              <Button color="danger" size="sm" onClick={() => updateStatus(item.id, 'Escalated')}>Escalate</Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ResolveEscalateList;
