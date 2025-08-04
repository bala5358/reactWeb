import React, { useState } from 'react';
import { Button, Input, Table, Row, Col, Label, Card, CardBody } from 'reactstrap';

const initialLanguages = ['English', 'Tamil', 'Hindi', 'Malayalam', 'Telugu', 'Kannada', 'Marathi', 'Gujarati'];

const Language = () => {
  const [languages, setLanguages] = useState(initialLanguages);
  const [searchTerm, setSearchTerm] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const handleAddLanguage = () => {
    const trimmed = newLanguage.trim();
    if (trimmed && !languages.includes(trimmed)) {
      setLanguages([...languages, trimmed]);
      setNewLanguage('');
    }
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Card>
        <CardBody>
          <h1 className="mb-3">Language Settings</h1>
          <p className="text-muted">Manage supported languages in the app.</p>

          {/* Search Filter */}
          <Input
            type="text"
            placeholder="Search language..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />

          {/* Add Language */}
          <div className="d-flex mb-3 gap-2">
            <Input
              type="text"
              placeholder="Enter new language"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
            />
            <Button color="primary" onClick={handleAddLanguage}>
              Add
            </Button>
          </div>

          {/* Language Table */}
          <Table bordered striped responsive>
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{lang}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    No language found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Language;
