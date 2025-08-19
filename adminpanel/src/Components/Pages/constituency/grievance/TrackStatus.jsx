import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Form, FormGroup, Label, Input, Button, Alert, 
  ListGroup, ListGroupItem, Badge 
} from 'reactstrap';

const TrackStatus = () => {
  const [trackingId, setTrackingId] = useState('');
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mockComplaints = [
    {
      id: 'COMP-2023-001',
      date: '2023-05-15',
      type: 'Voter Registration Issue',
      status: 'In Progress',
      updates: [
        { date: '2023-05-15', text: 'Complaint registered', status: 'Received' },
        { date: '2023-05-16', text: 'Assigned to officer', status: 'In Progress' },
        { date: '2023-05-18', text: 'Under investigation', status: 'In Progress' }
      ]
    },
    {
      id: 'COMP-2023-002',
      date: '2023-05-10',
      type: 'Polling Booth Problem',
      status: 'Resolved',
      updates: [
        { date: '2023-05-10', text: 'Complaint registered', status: 'Received' },
        { date: '2023-05-11', text: 'Verified issue', status: 'In Progress' },
        { date: '2023-05-12', text: 'Problem resolved', status: 'Resolved' }
      ]
    }
  ];

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingId) {
      setError('Please enter a tracking ID');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      const foundComplaint = mockComplaints.find(c => c.id === trackingId);
      if (foundComplaint) {
        setComplaint(foundComplaint);
      } else {
        setError('No complaint found with that tracking ID');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
          <Fragment>
                  <Breadcrumbs parent="Pages" title="Track Complaint Status" mainTitle="Track Complaint Status" />
    <Container>
      <Row className="justify-content-center">
        <Col lg="8">
          <Card>
            <CardHeader>
              <h4 className="mb-0">Track Complaint Status</h4>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleTrack}>
                <Row>
                  <Col md="9">
                    <FormGroup>
                      <Label>Enter Complaint Tracking ID</Label>
                      <Input
                        type="text"
                        placeholder="e.g. COMP-2023-001"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" className="d-flex align-items-end">
                    <Button 
                      color="primary" 
                      type="submit"
                      disabled={isLoading}
                      block
                    >
                      {isLoading ? 'Searching...' : 'Track'}
                    </Button>
                  </Col>
                </Row>
              </Form>
              
              {error && <Alert color="danger" className="mt-3">{error}</Alert>}
              
              {complaint && (
                <div className="mt-4">
                  <h5>Complaint Details</h5>
                  <Row className="mb-3">
                    <Col md="6">
                      <p><strong>ID:</strong> {complaint.id}</p>
                      <p><strong>Date:</strong> {complaint.date}</p>
                    </Col>
                    <Col md="6">
                      <p><strong>Type:</strong> {complaint.type}</p>
                      <p>
                        <strong>Status:</strong> 
                        <Badge 
                          color={
                            complaint.status === 'Resolved' ? 'success' : 
                            complaint.status === 'Rejected' ? 'danger' : 'warning'
                          } 
                          className="ml-2"
                        >
                          {complaint.status}
                        </Badge>
                      </p>
                    </Col>
                  </Row>
                  
                  <h6>Updates</h6>
                  <ListGroup>
                    {complaint.updates.map((update, index) => (
                      <ListGroupItem key={index}>
                        <div className="d-flex justify-content-between">
                          <strong>{update.date}</strong>
                          <Badge 
                            color={
                              update.status === 'Resolved' ? 'success' : 
                              update.status === 'Received' ? 'info' : 'warning'
                            }
                          >
                            {update.status}
                          </Badge>
                        </div>
                        <p className="mb-0">{update.text}</p>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                  
                  <Button color="secondary" className="mt-3" onClick={() => {
                    setComplaint(null);
                    setTrackingId('');
                  }}>
                    Track Another Complaint
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default TrackStatus;