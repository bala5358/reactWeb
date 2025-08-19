import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Form, FormGroup, Label, Input, Button, Alert 
} from 'reactstrap';

const LodgeComplaint = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaintType: '',
    description: '',
    attachments: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Complaint submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        complaintType: '',
        description: '',
        attachments: []
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
          <Fragment>
              <Breadcrumbs parent="Pages" title="Lodge a Complaint" mainTitle="Lodge a Complaint" />
    <Container>
      <Row className="justify-content-center">
        <Col lg="8">
          {submitted && (
            <Alert color="success" className="mt-3">
              Your complaint has been submitted successfully! Reference ID: {Math.floor(Math.random() * 1000000)}
            </Alert>
          )}
          
          <Card>
            <CardHeader>
              <h4 className="mb-0">Lodge a Complaint</h4>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Full Name <span className="text-danger">*</span></Label>
                      <Input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Phone Number <span className="text-danger">*</span></Label>
                      <Input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Complaint Type <span className="text-danger">*</span></Label>
                      <Input 
                        type="select" 
                        name="complaintType" 
                        value={formData.complaintType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select type</option>
                        <option value="voter_registration">Voter Registration Issue</option>
                        <option value="polling_booth">Polling Booth Problem</option>
                        <option value="campaign">Campaign Violation</option>
                        <option value="other">Other</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                
                <FormGroup>
                  <Label>Description <span className="text-danger">*</span></Label>
                  <Input 
                    type="textarea" 
                    name="description" 
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Attachments (if any)</Label>
                  <Input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange}
                  />
                  <small className="text-muted">You can upload supporting documents (max 5MB each)</small>
                  {formData.attachments.length > 0 && (
                    <div className="mt-2">
                      <small>Selected files: </small>
                      {formData.attachments.map((file, i) => (
                        <badge color="light" className="mr-2" key={i}>
                          {file.name}
                        </badge>
                      ))}
                    </div>
                  )}
                </FormGroup>
                
                <div className="mt-4">
                  <Button 
                    color="primary" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                  </Button>
                  <Button color="link" className="ml-2">Cancel</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default LodgeComplaint;