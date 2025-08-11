// import React, { Fragment, useState } from 'react';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Label,
//   Input
// } from 'reactstrap';
// import { Breadcrumbs } from '../../../AbstractElements';
// import AgentManagementPageTable from './AgentManagementPageTable';

// const AgentManagementPage = () => {
//   const [modal, setModal] = useState(false);
//   const [form, setForm] = useState({ name: '', booth: '', contact: '', status: '' });
//   const [agentData, setAgentData] = useState([]);

//   const toggle = () => setModal(!modal);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newAgent = {
//       id: Date.now(), // Unique ID
//       name: form.name,
//       booth: form.booth,
//       contact: form.contact,
//       status: form.status
//     };
//     setAgentData(prev => [...prev, newAgent]);
//     setForm({ name: '', booth: '', contact: '', status: '' });
//     toggle();
//   };

//   return (
//     <Fragment>
//       <Breadcrumbs parent="Agent" title="Agent" mainTitle="Agent Management" />
//       <Container fluid={true}>
//         <Row>
//           <Col sm="12">
//             <Card>
//               <CardBody>
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h4 className="mb-0">Agent List</h4>
//                   <Button color="primary" onClick={toggle}>Add Agent</Button>
//                 </div>
//                 <AgentManagementPageTable externalData={agentData} />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Modal for Add Agent */}
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Add Agent</ModalHeader>
//         <Form onSubmit={handleSubmit}>
//           <ModalBody>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input id="name" name="name" value={form.name} onChange={handleChange} required />
//             </FormGroup>
//             <FormGroup>
//               <Label for="booth">Booth</Label>
//               <Input id="booth" name="booth" value={form.booth} onChange={handleChange} required />
//             </FormGroup>
//             <FormGroup>
//               <Label for="contact">Contact</Label>
//               <Input id="contact" name="contact" value={form.contact} onChange={handleChange} required />
//             </FormGroup>
//             <FormGroup>
//               <Label for="status">Status</Label>
//               <Input type="select" id="status" name="status" value={form.status} onChange={handleChange} required>
//                 <option value="">Select</option>
//                 <option>Active</option>
//                 <option>Inactive</option>
//               </Input>
//             </FormGroup>
//           </ModalBody>
//           <ModalFooter>
//             <Button type="submit" color="primary">Add</Button>
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//           </ModalFooter>
//         </Form>
//       </Modal>
//     </Fragment>
//   );
// };

// export default AgentManagementPage;
import React, { Fragment, useState } from 'react';
import {
  Container, Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import AgentManagementPageTable from './AgentManagementPageTable';

const AgentManagementPage = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    idProof: '',
    constituency: '',
    party: '',
    candidate: '',
    role: '',
    status: false
  });
  const [agentData, setAgentData] = useState([]);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'status') {
      setForm({ ...form, status: value === 'Active' });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAgent = {
      id: Date.now(),
      ...form
    };
    setAgentData(prev => [...prev, newAgent]);
    setForm({
      name: '',
      dob: '',
      phone: '',
      email: '',
      idProof: '',
      constituency: '',
      party: '',
      candidate: '',
      role: '',
      status: false
    });
    toggle();
  };

  const handleStatusToggle = (id) => {
    setAgentData(prev =>
      prev.map(agent =>
        agent.id === id ? { ...agent, status: !agent.status } : agent
      )
    );
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
                <AgentManagementPageTable
                  externalData={agentData}
                  onStatusToggle={handleStatusToggle}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal for Add Agent */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add Agent</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input id="name" name="name" value={form.name} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="dob">Date of Birth</Label>
                  <Input type="date" id="dob" name="dob" value={form.dob} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                </FormGroup>
              </Col>
             <Col md="6">
  <FormGroup>
    <Label for="idProof">Aadhaar ID / Voter ID</Label>
    <Input
      id="idProof"
      name="idProof"
      placeholder="Enter Aadhaar ID or Voter ID"
      value={form.idProof}
      onChange={handleChange}
      required
    />
  </FormGroup>
</Col>

              <Col md="6">
                <FormGroup>
                  <Label for="constituency">Constituency</Label>
                  <Input id="constituency" name="constituency" value={form.constituency} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="party">Party</Label>
                  <Input id="party" name="party" value={form.party} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="candidate">Candidate</Label>
                  <Input id="candidate" name="candidate" value={form.candidate} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Input id="role" name="role" value={form.role} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input
                    type="select"
                    id="status"
                    name="status"
                    value={form.status ? 'Active' : 'Inactive'}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
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
