import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, 
  Form, FormGroup, Label, Input, Alert, 
  ButtonGroup
} from 'reactstrap';

const CandidateNominations = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    constituency: '',
    documents: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'John Smith', party: 'National Party', constituency: 'North', status: 'Approved' },
    { id: 2, name: 'Sarah Johnson', party: 'People\'s Alliance', constituency: 'South', status: 'Pending' }
  ]);

  const toggleModal = () => setModal(!modal);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCandidate = {
      id: candidates.length + 1,
      name: formData.name,
      party: formData.party,
      constituency: formData.constituency,
      status: 'Pending'
    };
    setCandidates([...candidates, newCandidate]);
    setSubmitted(true);
    toggleModal();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
          <Fragment>
          <Breadcrumbs parent="Pages" title="Candidate Nominations" mainTitle="Candidate Nominations" />
    <Container fluid>
      {submitted && (
        <Alert color="success" className="mt-3">
          Candidate nomination submitted successfully!
        </Alert>
      )}
      
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h4>Candidate Nominations</h4>
              <Button color="primary" onClick={toggleModal}>
                New Nomination
              </Button>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Party</th>
                    <th>Constituency</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map(candidate => (
                    <tr key={candidate.id}>
                      <td>{candidate.id}</td>
                      <td>{candidate.name}</td>
                      <td>{candidate.party}</td>
                      <td>{candidate.constituency}</td>
                      <td>
                        <badge 
                          color={
                            candidate.status === 'Approved' ? 'success' : 
                            candidate.status === 'Rejected' ? 'danger' : 'warning'
                          }
                        >
                          {candidate.status}
                        </badge>
                      </td>
                      <td>
                        <ButtonGroup size="sm" style={{gap: "10px"}}>
                          <Button color="info">View</Button>
                          <Button color="secondary">Edit</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>New Candidate Nomination</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Full Name</Label>
                  <Input type="text" name="name" required onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Political Party</Label>
                  <Input type="text" name="party" required onChange={handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Constituency</Label>
                  <Input type="select" name="constituency" required onChange={handleChange}>
                    <option value="">Select Constituency</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Nomination Documents</Label>
                  <Input type="file" multiple onChange={handleFileChange} />
                  <small className="text-muted">Upload supporting documents (PDF, JPG)</small>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
            <Button color="primary" type="submit">Submit Nomination</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
   </Fragment>
  );
};

export default CandidateNominations;