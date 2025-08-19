import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  Table, Button, Input, Badge, Alert, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const BoothLevelOfficers = () => {
  const [officers, setOfficers] = useState([
    { id: 1, name: 'Officer Smith', badgeNumber: 'BL-001', assignedBooth: 'PB-001', contact: '555-0101', status: 'Active' },
    { id: 2, name: 'Officer Johnson', badgeNumber: 'BL-002', assignedBooth: 'PB-002', contact: '555-0102', status: 'Active' },
    { id: 3, name: 'Officer Williams', badgeNumber: 'BL-003', assignedBooth: 'PB-003', contact: '555-0103', status: 'Inactive' }
  ]);
  
  const [newOfficer, setNewOfficer] = useState({
    name: '',
    badgeNumber: '',
    assignedBooth: '',
    contact: '',
    status: 'Active'
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setNewOfficer({ ...newOfficer, [e.target.name]: e.target.value });
  };

  const handleAddOfficer = () => {
    if (!newOfficer.name || !newOfficer.badgeNumber) {
      alert('Name and Badge Number are required');
      return;
    }
    setOfficers([...officers, { ...newOfficer, id: officers.length + 1 }]);
    setNewOfficer({
      name: '',
      badgeNumber: '',
      assignedBooth: '',
      contact: '',
      status: 'Active'
    });
    setModalOpen(false);
  };

  const toggleStatus = (id) => {
    setOfficers(officers.map(officer =>
      officer.id === id ? { ...officer, status: officer.status === 'Active' ? 'Inactive' : 'Active' } : officer
    ));
  };

  const filteredOfficers = officers.filter(officer =>
    officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    officer.badgeNumber.includes(searchTerm) ||
    officer.assignedBooth.includes(searchTerm)
  );

  return (
    <Fragment>
      <Breadcrumbs parent="Pages" title="Booth Level Officers" mainTitle="Booth Level Officers" />
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <h4 className="mb-3 mb-md-0">Booth Level Officers</h4>
                <div className="d-flex flex-column flex-md-row" style={{gap:"10px"}}>
                  <Input
                    type="search"
                    placeholder="Search officers..."
                    className="mb-2 mb-md-0 mr-md-2"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button color="success" onClick={() => setModalOpen(true)}>
                    Add Officer
                  </Button>
                </div>
              </CardHeader>

              <CardBody>
                {filteredOfficers.length === 0 ? (
                  <Alert color="info">No officers found matching your search criteria</Alert>
                ) : (
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Badge Number</th>
                        <th>Name</th>
                        <th>Assigned Booth</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOfficers.map(officer => (
                        <tr key={officer.id}>
                          <td>{officer.badgeNumber}</td>
                          <td>{officer.name}</td>
                          <td>{officer.assignedBooth || '-'}</td>
                          <td>{officer.contact || '-'}</td>
                          <td>
                            <Badge
                              color={officer.status === 'Active' ? 'success' : 'secondary'}
                              style={{ cursor: 'pointer' }}
                              onClick={() => toggleStatus(officer.id)}
                            >
                              {officer.status}
                            </Badge>
                          </td>
                          <td>
                            <Button color="info" size="sm">Details</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add Officer Modal */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Add New Officer</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="name"
              value={newOfficer.name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Badge Number</Label>
            <Input
              type="text"
              name="badgeNumber"
              value={newOfficer.badgeNumber}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Assigned Booth</Label>
            <Input
              type="text"
              name="assignedBooth"
              value={newOfficer.assignedBooth}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Contact Number</Label>
            <Input
              type="text"
              name="contact"
              value={newOfficer.contact}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Status</Label>
            <Input
              type="select"
              name="status"
              value={newOfficer.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddOfficer}>Save</Button>
          <Button color="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default BoothLevelOfficers;
