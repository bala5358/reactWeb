import React, { Fragment, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import AgentManagementPageTable from './AgentManagementPageTable';

const AgentManagementPage = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ name: '', booth: '', contact: '', status: '' });
  const [agentData, setAgentData] = useState([]);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAgent = {
      id: Date.now(), // Unique ID
      name: form.name,
      booth: form.booth,
      contact: form.contact,
      status: form.status
    };
    setAgentData(prev => [...prev, newAgent]);
    setForm({ name: '', booth: '', contact: '', status: '' });
    toggle();
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Agent" title="Agent" mainTitle="Agent Management" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="mb-0">Agent List</h4>
                  <Button color="primary" onClick={toggle}>Add Agent</Button>
                </div>
                <AgentManagementPageTable externalData={agentData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal for Add Agent */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Agent</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="booth">Booth</Label>
              <Input id="booth" name="booth" value={form.booth} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="contact">Contact</Label>
              <Input id="contact" name="contact" value={form.contact} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input type="select" id="status" name="status" value={form.status} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Active</option>
                <option>Inactive</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Add</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default AgentManagementPage;
