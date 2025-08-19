import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  ButtonGroup, Button, Progress, Badge 
} from 'reactstrap';
import { Bar, Pie } from 'react-chartjs-2';

const RealTimeResults = () => {
  const [activeView, setActiveView] = useState('constituency');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchResults = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockResults = {
        overall: {
          totalVoters: 125000,
          voted: 87500,
          parties: [
            { name: 'National Party', votes: 45000, color: '#3498db' },
            { name: 'People\'s Alliance', votes: 32000, color: '#e74c3c' },
            { name: 'Green Movement', votes: 10500, color: '#2ecc71' }
          ]
        },
        constituencies: [
          { name: 'North', total: 30000, voted: 21000, leading: 'National Party' },
          { name: 'South', total: 35000, voted: 24500, leading: 'People\'s Alliance' },
          { name: 'East', total: 30000, voted: 19500, leading: 'National Party' },
          { name: 'West', total: 30000, voted: 22500, leading: 'Green Movement' }
        ]
      };
      
      setResults(mockResults);
      setIsLoading(false);
    };
    
    fetchResults();
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (results) {
        const updatedResults = JSON.parse(JSON.stringify(results));
        updatedResults.overall.voted += Math.floor(Math.random() * 100);
        updatedResults.constituencies.forEach(c => {
          c.voted += Math.floor(Math.random() * 20);
        });
        setResults(updatedResults);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <Container fluid>
        <Row>
          <Col className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-2">Loading election results...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
      <Fragment>
          <Breadcrumbs parent="Pages" title="Real-Time Election Results" mainTitle="Real-Time Election Results" />
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h4>Real-Time Election Results</h4>
              <ButtonGroup>
                <Button 
                  color={activeView === 'constituency' ? 'primary' : 'secondary'}
                  onClick={() => setActiveView('constituency')}
                >
                  By Constituency
                </Button>
                <Button 
                  color={activeView === 'party' ? 'primary' : 'secondary'}
                  onClick={() => setActiveView('party')}
                >
                  By Party
                </Button>
              </ButtonGroup>
            </CardHeader>
            <CardBody>
              <Row className="mb-5">
                <Col md="6">
                  <h5>Overall Turnout</h5>
                  <Progress
                    value={(results.overall.voted / results.overall.totalVoters) * 100}
                    color="info"
                  >
                    {Math.round((results.overall.voted / results.overall.totalVoters) * 100)}%
                  </Progress>
                  <div className="d-flex justify-content-between mt-1">
                    <small>Voted: {results.overall.voted.toLocaleString()}</small>
                    <small>Total: {results.overall.totalVoters.toLocaleString()}</small>
                  </div>
                </Col>
                <Col md="6">
                  <h5>Leading Party</h5>
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: results.overall.parties[0].color,
                        marginRight: '10px'
                      }}
                    ></div>
                    <h4 className="mb-0">{results.overall.parties[0].name}</h4>
                    <Badge  className="ml-2">
                      {Math.round((results.overall.parties[0].votes / results.overall.voted) * 100)}%
                    </Badge>
                  </div>
                </Col>
              </Row>
              
              {activeView === 'constituency' ? (
                <Row>
                  {results.constituencies.map((constituency, index) => (
                    <Col md="6" lg="3" key={index} className="mb-4">
                      <Card>
                        <CardHeader>
                          <h6>{constituency.name}</h6>
                        </CardHeader>
                        <CardBody>
                          <Progress
                            value={(constituency.voted / constituency.total) * 100}
                            color="info"
                          >
                            {Math.round((constituency.voted / constituency.total) * 100)}%
                          </Progress>
                          <div className="d-flex justify-content-between mt-1">
                            <small>Voted: {constituency.voted.toLocaleString()}</small>
                            <small>Total: {constituency.total.toLocaleString()}</small>
                          </div>
                          <div className="mt-2">
                            <small className="text-muted">Current Leader:</small>
                            <div className="d-flex align-items-center">
                              <div 
                                style={{
                                  width: '12px',
                                  height: '12px',
                                  backgroundColor: results.overall.parties.find(p => p.name === constituency.leading)?.color || '#999',
                                  marginRight: '8px',
                                  borderRadius: '50%'
                                }}
                              ></div>
                              <span>{constituency.leading}</span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <Row>
                  <Col md="6">
                    <h5 className="text-center">Vote Distribution</h5>
                    <div style={{ height: '300px' }}>
                      <Pie
                        data={{
                          labels: results.overall.parties.map(p => p.name),
                          datasets: [{
                            data: results.overall.parties.map(p => p.votes),
                            backgroundColor: results.overall.parties.map(p => p.color),
                            borderWidth: 1
                          }]
                        }}
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
                  </Col>
                  <Col md="6">
                    <h5 className="text-center">Votes by Party</h5>
                    <div style={{ height: '300px' }}>
                      <Bar
                        data={{
                          labels: results.overall.parties.map(p => p.name),
                          datasets: [{
                            label: 'Votes',
                            data: results.overall.parties.map(p => p.votes),
                            backgroundColor: results.overall.parties.map(p => p.color),
                            borderWidth: 1
                          }]
                        }}
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
                </Row>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default RealTimeResults;