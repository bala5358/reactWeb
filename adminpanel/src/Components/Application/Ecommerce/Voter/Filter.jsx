import React, { Fragment, useState } from 'react';
import { Col, Container, Row, Label, Input, Button, CardBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { indiaData } from './Location'; // Make sure your indiaData includes constituencies

const Filter = () => {
  const navigate = useNavigate();

  // Default selections
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [selectedDistrict, setSelectedDistrict] = useState('Coimbatore');
  const [selectedConstituency, setSelectedConstituency] = useState('Singanallur');

  const states = indiaData.map(item => item.state);
  const selectedStateObj = indiaData.find(item => item.state === selectedState);
  const districts = selectedStateObj ? selectedStateObj.districts.map(d => d.name) : [];

  const selectedDistrictObj = selectedStateObj?.districts.find(d => d.name === selectedDistrict);
  const constituencies = selectedDistrictObj ? selectedDistrictObj.constituencies : [];

  const handleSubmit = () => {
    // Customize the path with dynamic values if needed
    console.log('Selected:', selectedState, selectedDistrict, selectedConstituency);
    navigate(`/singanallurPoll/${selectedConstituency}`); // Example dynamic path
  };

  return (
    <Fragment>
      <section className='cart-section section-b-space'>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs="12" md="10" lg="10">
              <CardBody>
                <Row className="gy-3 align-items-end">
                  
                  {/* State Dropdown */}
                  <Col xs="12" md="4">
                    <Label for="stateSelect">State</Label>
                    <Input
                      type="select"
                      id="stateSelect"
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setSelectedDistrict('');
                        setSelectedConstituency('');
                      }}
                    >
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                      ))}
                    </Input>
                  </Col>

                  {/* District Dropdown */}
                  <Col xs="12" md="4">
                    <Label for="districtSelect">District</Label>
                    <Input
                      type="select"
                      id="districtSelect"
                      value={selectedDistrict}
                      onChange={(e) => {
                        setSelectedDistrict(e.target.value);
                        setSelectedConstituency('');
                      }}
                      disabled={!selectedState}
                    >
                      <option value="">Select District</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>{district}</option>
                      ))}
                    </Input>
                  </Col>

                  {/* Constituency Dropdown */}
                  <Col xs="12" md="4">
                    <Label for="constituencySelect">Constituency</Label>
                    <Input
                      type="select"
                      id="constituencySelect"
                      value={selectedConstituency}
                      onChange={(e) => setSelectedConstituency(e.target.value)}
                      disabled={!selectedDistrict}
                    >
                      <option value="">Select Constituency</option>
                      {constituencies.map((c, index) => (
                        <option key={index} value={c}>{c}</option>
                      ))}
                    </Input>
                  </Col>

                  {/* Submit Button */}
                  <Col xs="12" className="text-left mt-4">
                    <Button
                      color="primary"
                      onClick={handleSubmit}
                      disabled={!selectedState || !selectedDistrict || !selectedConstituency}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Filter;
