import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  ListGroup, ListGroupItem, Badge, Button, TabContent, TabPane, Nav, NavItem, NavLink 
} from 'reactstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PollingBoothDetails = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [selectedBooth, setSelectedBooth] = useState(null);

  const booths = [
    { 
      id: 'PB-001', 
      location: 'Central School', 
      address: '123 Main St, City',
      voters: 1200, 
      officers: 5,
      status: 'Active',
      coords: [51.505, -0.09]
    },
    { 
      id: 'PB-002', 
      location: 'Community Hall', 
      address: '456 Oak Ave, Town',
      voters: 850, 
      officers: 3,
      status: 'Active',
      coords: [51.51, -0.1]
    }
  ];

  return (
        <Fragment>
      <Breadcrumbs parent="Pages" title="Polling Booths Details" mainTitle="Polling Booths Details" />
    <Container fluid>
      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              <h5>Polling Booths</h5>
            </CardHeader>
            <CardBody>
              <ListGroup>
                {booths.map(booth => (
                  <ListGroupItem 
                  style={{padding: "15px"}}
                    key={booth.id}
                    action
                    active={selectedBooth?.id === booth.id}
                    onClick={() => setSelectedBooth(booth)}
                  >
                    <div className="d-flex justify-content-between">
                      <strong>{booth.id}</strong>
                      <Badge color={booth.status === 'Active' ? 'success' : 'danger'}>
                        {booth.status}
                      </Badge>
                    </div>
                    <div>{booth.location}</div>
                    <small className="text-muted">{booth.voters} voters</small>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        
        <Col md="8">
          <Card>
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    active={activeTab === '1'}
                    onClick={() => setActiveTab('1')}
                  >
                    Map View
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activeTab === '2'}
                    onClick={() => setActiveTab('2')}
                  >
                    Details
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div style={{ height: '400px' }}>
                    <MapContainer 
                      center={[51.505, -0.09]} 
                      zoom={13} 
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {booths.map(booth => (
                        <Marker key={booth.id} position={booth.coords}>
                          <Popup>
                            <strong>{booth.id}</strong><br />
                            {booth.location}<br />
                            {booth.voters} voters
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  {selectedBooth ? (
                    <div>
                      <h5>{selectedBooth.id} - {selectedBooth.location}</h5>
                      <p>{selectedBooth.address}</p>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <p><strong>Total Voters:</strong> {selectedBooth.voters}</p>
                          <p><strong>Assigned Officers:</strong> {selectedBooth.officers}</p>
                        </div>
                        <div style={{gap: "15px",display: "flex"}}>
                          <Button color="primary" className="mr-2">Edit Details</Button>
                          <Button color="info">View Voters</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Select a booth to view details</p>
                  )}
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default PollingBoothDetails;