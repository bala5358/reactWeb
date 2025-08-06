import React, { useState } from 'react';
import {
  Card, CardBody, CardHeader,
  Form, FormGroup, Label, Input,
  Button, Row, Col
} from 'reactstrap';

const FieldNotes = () => {
   const [note, setNote] = useState({
    title: '',
    booth: 'Booth 1',
    category: '',
    observation: '',
    photo: null,
    weather: '',
    security: '',
    crowd: '',
    actionTaken: '',
    urgency: 'Low',
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    date: new Date().toLocaleDateString()
  });

  const boothOptions = ["Booth 1", "Booth 2", "Booth 3"];
  const categories = [
    "Technical Glitch", "Voter Complaint", "Law & Order Concern",
    "Unauthorized Campaigning", "Infrastructure Issue", "Long Queue / Wait Time",
    "Weather Impact", "Others"
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Note:", note);
    alert("Field Note submitted successfully!");

    setNote((prev) => ({
      ...prev,
      title: '',
      category: '',
      observation: '',
      photo: null,
      weather: '',
      security: '',
      crowd: '',
      actionTaken: '',
      urgency: 'Low',
    }));
  };

  const inputStyle = {
    borderRadius: "6px",
    border: "1px solid #ccc",
    padding: "8px 12px",
    fontSize: "0.9rem",
  };

  const labelStyle = {
    fontWeight: "500",
    marginBottom: "6px"
  };

  return (
    <Card>
      <CardHeader>
        <h4>Field Notes / Observations</h4>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Title / Note Summary</Label>
                <Input
                  className="form-control"
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  placeholder="Short title for the note"
                  required
                  style={inputStyle}
                />
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Booth Location</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="booth"
                  value={note.booth}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  {boothOptions.map((booth) => (
                    <option key={booth}>{booth}</option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Category / Type</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="category"
                  value={note.category}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">-- Select Category --</option>
                  {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Weather Condition</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="weather"
                  value={note.weather}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">-- Select Weather --</option>
                  <option>Sunny</option>
                  <option>Rainy</option>
                  <option>Windy</option>
                  <option>Cloudy</option>
                </Input>
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Security Presence</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="security"
                  value={note.security}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">-- Select --</option>
                  <option>Normal</option>
                  <option>Increased</option>
                  <option>Absent</option>
                </Input>
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Crowd Level</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="crowd"
                  value={note.crowd}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">-- Select Crowd Level --</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Detailed Observation</Label>
                <Input
                  className="form-control"
                  type="textarea"
                  name="observation"
                  rows="5"
                  value={note.observation}
                  onChange={handleChange}
                  placeholder="Describe the issue or event"
                  required
                  style={inputStyle}
                />
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Action Taken / Required</Label>
                <Input
                  className="form-control"
                  type="textarea"
                  name="actionTaken"
                  rows="4"
                  value={note.actionTaken}
                  onChange={handleChange}
                  placeholder="Mention any steps taken or needed"
                  style={inputStyle}
                />
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Urgency / Severity</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="urgency"
                  value={note.urgency}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </FormGroup>

              <FormGroup className="mb-3">
                <Label className="form-label" style={labelStyle}>Upload Photo (optional)</Label>
                <Input
                  className="form-control"
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  style={inputStyle}
                />
              </FormGroup>

              <p className="text-muted small">
                <strong>Time:</strong> {note.time} | <strong>Date:</strong> {note.date}
              </p>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button color="primary" type="submit">
              Submit Observation
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default FieldNotes;