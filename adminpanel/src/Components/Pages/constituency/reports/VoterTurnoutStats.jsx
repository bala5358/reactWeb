import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Form, FormGroup, Label, Input, Button ,ButtonGroup
} from 'reactstrap';
import { Bar, Line } from 'react-chartjs-2';

const VoterTurnoutStats = () => {
  const [chartType, setChartType] = useState('bar');
  const [dateRange, setDateRange] = useState({
    start: '2023-05-01',
    end: '2023-05-31'
  });

  const handleDateChange = (e) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  const generateData = () => {
    const days = [];
    const currentDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);
    
    while (currentDate <= endDate) {
      days.push(new Date(currentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return {
      labels: days,
      datasets: [
        {
          label: 'Voter Turnout',
          data: days.map(() => Math.floor(Math.random() * 1000) + 500),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    };
  };

  const constituencyData = {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    datasets: [
      {
        label: 'Voter Turnout (%)',
        data: [65, 59, 80, 71, 56],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        borderWidth: 1
      }
    ]
  };

  const chartData = generateData();

  return (
      <Fragment>
                      <Breadcrumbs parent="Pages" title="Voter Turnout Statistics" mainTitle="Voter Turnout Statistics" />
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h4>Voter Turnout Statistics</h4>
              <div className="d-flex flex-column flex-md-row mt-2 mt-md-0">
                <ButtonGroup className="mr-md-3 mb-2 mb-md-0">
                  <Button 
                    color={chartType === 'bar' ? 'primary' : 'secondary'}
                    onClick={() => setChartType('bar')}
                  >
                    Bar Chart
                  </Button>
                  <Button 
                    color={chartType === 'line' ? 'primary' : 'secondary'}
                    onClick={() => setChartType('line')}
                  >
                    Line Chart
                  </Button>
                </ButtonGroup>
                <Form inline>
                  <FormGroup className="mr-2 mb-2 mb-md-0">
                    <Label for="startDate" className="mr-2">From:</Label>
                    <Input
                      type="date"
                      id="startDate"
                      name="start"
                      value={dateRange.start}
                      onChange={handleDateChange}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mb-md-0">
                    <Label for="endDate" className="mr-2">To:</Label>
                    <Input
                      type="date"
                      id="endDate"
                      name="end"
                      value={dateRange.end}
                      onChange={handleDateChange}
                      min={dateRange.start}
                    />
                  </FormGroup>
                </Form>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="8">
                  <div style={{ height: '400px' }}>
                    {chartType === 'bar' ? (
                      <Bar
                        data={chartData}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true
                            }
                          }
                        }}
                      />
                    ) : (
                      <Line
                        data={chartData}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true
                            }
                          }
                        }}
                      />
                    )}
                  </div>
                </Col>
                <Col md="4">
                  <Card className="h-100">
                    <CardHeader>
                      <h5>By Constituency</h5>
                    </CardHeader>
                    <CardBody>
                      <div style={{ height: '300px' }}>
                        <Bar
                          data={constituencyData}
                          options={{
                            maintainAspectRatio: false,
                            scales: {
                              y: {
                                beginAtZero: true,
                                max: 100
                              }
                            }
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
                      <h5>Summary Statistics</h5>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="3" className="text-center">
                          <h3 className="text-primary">12,456</h3>
                          <p className="text-muted">Total Voters</p>
                        </Col>
                        <Col md="3" className="text-center">
                          <h3 className="text-success">8,745</h3>
                          <p className="text-muted">Votes Cast</p>
                        </Col>
                        <Col md="3" className="text-center">
                          <h3 className="text-info">70.2%</h3>
                          <p className="text-muted">Turnout Rate</p>
                        </Col>
                        <Col md="3" className="text-center">
                          <h3 className="text-warning">North</h3>
                          <p className="text-muted">Highest Turnout</p>
                        </Col>
                      </Row>
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

export default VoterTurnoutStats;