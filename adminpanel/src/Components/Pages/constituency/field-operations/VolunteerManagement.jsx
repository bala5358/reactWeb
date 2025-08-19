import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Table, Button, Input, Badge, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label 
} from 'reactstrap';

const VolunteerManagement = () => {
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'Alex Johnson', phone: '555-0101', email: 'alex@example.com', assignedBooth: 'PB-001', status: 'Active' },
    { id: 2, name: 'Sam Wilson', phone: '555-0102', email: 'sam@example.com', assignedBooth: 'PB-002', status: 'Inactive' },
    { id: 3, name: 'Taylor Smith', phone: '555-0103', email: 'taylor@example.com', assignedBooth: 'PB-003', status: 'Active' }
  ]);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentVolunteer, setCurrentVolunteer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const toggleModal = () => setModal(!modal);

  const handleAddNew = () => {
    setCurrentVolunteer({
      id: volunteers.length + 1,
      name: '',
      phone: '',
      email: '',
      assignedBooth: '',
      status: 'Active'
    });
    setEditMode(false);
    toggleModal();
  };

  const handleEdit = (volunteer) => {
    setCurrentVolunteer({ ...volunteer });
    setEditMode(true);
    toggleModal();
  };

  const handleChange = (e) => {
    setCurrentVolunteer({ ...currentVolunteer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setVolunteers(volunteers.map(v => v.id === currentVolunteer.id ? currentVolunteer : v));
    } else {
      setVolunteers([...volunteers, currentVolunteer]);
    }
    toggleModal();
  };

  const handleStatusChange = (id) => {
    setVolunteers(volunteers.map(v => 
      v.id === id ? { ...v, status: v.status === 'Active' ? 'Inactive' : 'Active' } : v
    ));
  };

  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = 
      volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.phone.includes(searchTerm) ||
      volunteer.assignedBooth.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || volunteer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Fragment>
                          <Breadcrumbs parent="Pages" title="Volunteer Management" mainTitle="Volunteer Management" />
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h4 className="mb-3 mb-md-0">Volunteer Management</h4>
              <div className="d-flex flex-column flex-md-row" style={{gap:"10px"}}>
                <Input
                  type="search"
                  placeholder="Search volunteers..."
                  className="mb-2 mb-md-0 mr-md-2"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Input
                  type="select"
                  className="mb-2 mb-md-0 mr-md-2"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Input>
                <Button color="success" onClick={handleAddNew}>
               Add Volunteer
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Assigned Booth</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVolunteers.map(volunteer => (
                    <tr key={volunteer.id}>
                      <td>{volunteer.id}</td>
                      <td>{volunteer.name}</td>
                      <td>
                        <div>{volunteer.phone}</div>
                        <small className="text-muted">{volunteer.email}</small>
                      </td>
                      <td>{volunteer.assignedBooth}</td>
                      <td>
                        <Badge 
                          color={volunteer.status === 'Active' ? 'success' : 'secondary'}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleStatusChange(volunteer.id)}
                        >
                          {volunteer.status}
                        </Badge>
                      </td>
                      <td>
                        <ButtonGroup size="sm" style={{gap:"10px"}}> 
                          <Button color="info" onClick={() => handleEdit(volunteer)}>
                           Edit
                          </Button>
                          <Button color="danger">
                           Delete
                          </Button>
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

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {editMode ? 'Edit Volunteer' : 'Add New Volunteer'}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label>Full Name</Label>
              <Input 
                type="text" 
                name="name" 
                value={currentVolunteer?.name || ''}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input 
                    type="tel" 
                    name="phone" 
                    value={currentVolunteer?.phone || ''}
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
                    value={currentVolunteer?.email || ''}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Assigned Booth</Label>
                  <Input 
                    type="text" 
                    name="assignedBooth" 
                    value={currentVolunteer?.assignedBooth || ''}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Status</Label>
                  <Input 
                    type="select" 
                    name="status" 
                    value={currentVolunteer?.status || 'Active'}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
            <Button color="primary" type="submit">Save</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
    </Fragment>
  );
};

export default VolunteerManagement;