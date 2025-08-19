import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Table, Button, Badge, Input, CardFooter ,ButtonGroup
} from 'reactstrap';
import { Bar } from 'react-chartjs-2';

const CampaignTracking = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([
    { id: 1, name: 'Town Hall Meeting', date: '2023-06-01', location: 'Community Center', attendees: 120, status: 'Completed' },
    { id: 2, name: 'Door-to-Door', date: '2023-06-05', location: 'North District', attendees: 85, status: 'In Progress' },
    { id: 3, name: 'Fundraiser', date: '2023-06-10', location: 'Grand Hotel', attendees: 0, status: 'Upcoming' }
  ]);

  const campaignData = {
    labels: ['Social Media', 'TV Ads', 'Print Media', 'Rallies', 'Door-to-Door'],
    datasets: [
      {
        label: 'Engagement Reach',
        data: [12000, 8000, 3000, 5000, 2500],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  const handleStatusChange = (id, newStatus) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, status: newStatus } : event
    ));
  };

  return (
       <Fragment>
              <Breadcrumbs parent="Pages" title="Campaign Tracking" mainTitle="Campaign Tracking" />
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h4>Campaign Tracking</h4>
              <ButtonGroup>
                <Button 
                  color={activeTab === 'events' ? 'primary' : 'secondary'}
                  onClick={() => setActiveTab('events')}
                >
                  Events
                </Button>
                <Button 
                  color={activeTab === 'analytics' ? 'primary' : 'secondary'}
                  onClick={() => setActiveTab('analytics')}
                >
                  Analytics
                </Button>
              </ButtonGroup>
            </CardHeader>
            
            {activeTab === 'events' ? (
              <>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Attendees</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map(event => (
                        <tr key={event.id}>
                          <td>{event.name}</td>
                          <td>{event.date}</td>
                          <td>{event.location}</td>
                          <td>
                            {event.attendees > 0 ? event.attendees : '-'}
                          </td>
                          <td>
                            <Badge 
                              color={
                                event.status === 'Completed' ? 'success' : 
                                event.status === 'In Progress' ? 'warning' : 'info'
                              }
                            >
                              {event.status}
                            </Badge>
                          </td>
                          <td>
                            <ButtonGroup size="sm" style={{gap:"10px"}}>
                              {event.status === 'Upcoming' && (
                                <Button 
                                  color="warning" 
                                  onClick={() => handleStatusChange(event.id, 'In Progress')}
                                >
                                  Start
                                </Button>
                              )}
                              {event.status === 'In Progress' && (
                                <Button 
                                  color="success" 
                                  onClick={() => handleStatusChange(event.id, 'Completed')}
                                >
                                  Complete
                                </Button>
                              )}
                              <Button color="info">Edit</Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter className="d-flex justify-content-end">
                  <Button color="primary">
                    Add Event
                  </Button>
                </CardFooter>
              </>
            ) : (
              <CardBody>
                <Row>
                  <Col md="6">
                    <h5 className="text-center">Campaign Reach by Channel</h5>
                    <div style={{ height: '300px' }}>
                      <Bar 
                        data={campaignData}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true
                            }
                          }
                        }}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <Card className="h-100">
                      <CardHeader>
                        <h5>Key Metrics</h5>
                      </CardHeader>
                      <CardBody>
                        <div className="mb-3">
                          <h6>Total Events</h6>
                          <h3 className="text-primary">{events.length}</h3>
                        </div>
                        <div className="mb-3">
                          <h6>Completed Events</h6>
                          <h3 className="text-success">
                            {events.filter(e => e.status === 'Completed').length}
                          </h3>
                        </div>
                        <div>
                          <h6>Total Reach</h6>
                          <h3 className="text-info">30,500</h3>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Card>
                      <CardHeader>
                        <h5>Event Attendance</h5>
                      </CardHeader>
                      <CardBody>
                        <div style={{ height: '250px' }}>
                          <Bar 
                            data={{
                              labels: events.map(e => e.name),
                              datasets: [{
                                label: 'Attendees',
                                data: events.map(e => e.attendees),
                                backgroundColor: 'rgba(75, 192, 192, 0.6)'
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
              </CardBody>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default CampaignTracking;