import React, { useState, Fragment } from 'react';
import { Button, Input, Table, Row, Col, Label, Container } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const initialData = {
  Christianity: ['Catholic', 'Pentecost', 'CSI', 'Marthoma', 'Jacobite', 'Protestant', 'Evangelical'],
  Hinduism: ['Brahmin', 'Kshatriya', 'Vaishya', 'Shudra'],
  Islam: ['Shia'],
};

const Caste = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCaste, setNewCaste] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('Christianity');

  const handleAddCaste = () => {
    const trimmed = newCaste.trim();
    if (trimmed && !data[selectedReligion]?.includes(trimmed)) {
      setData({
        ...data,
        [selectedReligion]: [...(data[selectedReligion] || []), trimmed],
      });
      setNewCaste('');
    }
  };

  const filteredCastes = (data[selectedReligion] || []).filter((caste) =>
    caste.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
          <Breadcrumbs parent="Caste" title="List" mainTitle="Caste List" />
          <Container fluid={true}>
    <div style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
      <h1>Caste Settings</h1>
      <p>Manage religion-wise caste list with search and add functionality.</p>

      {/* Religion Selector */}
      <Row className="mb-3">
        <Col md={4}>
          <Label>Select Religion</Label>
          <Input
            type="select"
            value={selectedReligion}
            onChange={(e) => setSelectedReligion(e.target.value)}
          >
            {Object.keys(data).map((religion, idx) => (
              <option key={idx} value={religion}>
                {religion}
              </option>
            ))}
          </Input>
        </Col>
      </Row>

      {/* Search Filter */}
      <Input
        type="text"
        placeholder="Search caste..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />

      {/* Add Caste */}
      <div className="d-flex mb-3 gap-2">
        <Input
          type="text"
          placeholder={`Add new caste to ${selectedReligion}`}
          value={newCaste}
          onChange={(e) => setNewCaste(e.target.value)}
        />
        <Button color="primary" onClick={handleAddCaste}>
          Add
        </Button>
      </div>

      {/* Caste List Table */}
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Caste Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredCastes.length > 0 ? (
            filteredCastes.map((caste, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{caste}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                No caste found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
    </Container>
</Fragment>
  );
};

export default Caste;
