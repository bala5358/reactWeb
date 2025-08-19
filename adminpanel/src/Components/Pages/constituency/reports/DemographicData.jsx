import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Input, ButtonGroup, Button ,FormGroup,Label
} from 'reactstrap';
import { Pie, Doughnut } from 'react-chartjs-2';

const DemographicData = () => {
  const [activeTab, setActiveTab] = useState('age');
  
  const ageData = {
    labels: ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'],
    datasets: [{
      data: [15, 25, 20, 18, 12, 10],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
      ]
    }]
  };

  const genderData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [{
      data: [48, 51, 1],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }]
  };

  const educationData = {
    labels: ['No Formal', 'Primary', 'Secondary', 'Graduate', 'Post Graduate'],
    datasets: [{
      data: [5, 15, 40, 30, 10],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
      ]
    }]
  };

  return (
          <Fragment>
                          <Breadcrumbs parent="Pages" title="Voter Demographic Data" mainTitle="Voter Demographic Data" />
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h4>Voter Demographic Data</h4>
              <ButtonGroup>
                <Button 
                  color={activeTab === 'age' ? 'primary' : 'secondary'}
                  onClick={() => setActiveTab('age')}
                >
                  Age
                </Button>
                <Button 
                  color={activeTab === 'gender' ? 'primary' : 'secondary'}
                  onClick={() => setActiveTab('gender')}
                >
                  Gender
                </Button>
                <Button 
                  color={activeTab === 'education' ? 'primary' : 'secondary'}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </Button>
              </ButtonGroup>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <Card className="h-100">
                    <CardHeader>
                      <h5>
                        {activeTab === 'age' && 'Age Distribution'}
                        {activeTab === 'gender' && 'Gender Distribution'}
                        {activeTab === 'education' && 'Education Level'}
                      </h5>
                    </CardHeader>
                    <CardBody>
                      <div style={{ height: '300px' }}>
                        <Pie
                          data={
                            activeTab === 'age' ? ageData :
                            activeTab === 'gender' ? genderData : educationData
                          }
                          options={{
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: 'right'
                              }
                            }
                          }}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="h-100">
                    <CardHeader>
                      <h5>By Constituency</h5>
                    </CardHeader>
                    <CardBody>
                      <div style={{ height: '300px' }}>
                        <Doughnut
                          data={{
                            labels: ['North', 'South', 'East', 'West'],
                            datasets: [{
                              label: 'Voters',
                              data: [12000, 15000, 9000, 11000],
                              backgroundColor: [
                                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
                              ]
                            }]
                          }}
                          options={{
                            maintainAspectRatio: false
                          }}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Card>
                    <CardHeader>
                      <h5>Data Filters</h5>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Constituency</Label>
                            <Input type="select">
                              <option>All Constituencies</option>
                              <option>North</option>
                              <option>South</option>
                              <option>East</option>
                              <option>West</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Age Group</Label>
                            <Input type="select">
                              <option>All Ages</option>
                              <option>18-25</option>
                              <option>26-35</option>
                              <option>36-45</option>
                              <option>46-55</option>
                              <option>56+</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Gender</Label>
                            <Input type="select">
                              <option>All Genders</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="text-center mt-2">
                        <Button color="primary" className="mr-2">Apply Filters</Button>
                        <Button color="secondary">Export Data</Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default DemographicData;