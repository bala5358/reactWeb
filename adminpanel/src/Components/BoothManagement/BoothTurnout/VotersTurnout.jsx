import React, { Fragment, useState } from 'react';
import { 
  Col, Card, CardBody, CardHeader, Form, Row, Button, 
  Progress, Table, FormGroup, Label, Input ,
} from 'reactstrap';
import { FaChartLine, FaHistory, FaInfoCircle, FaSync } from 'react-icons/fa';

const VotersTurnout = () => {
  const [history, setHistory] = useState([
    { id: 1, time: "9:00 AM", voters: 154, totalElectors: 500, percent: 31, submittedBy: "Agent1", status: "Verified" },
    { id: 2, time: "11:00 AM", voters: 315, totalElectors: 500, percent: 63, submittedBy: "Agent1", status: "Verified" },
  ]);
  
  const [voters, setVoters] = useState("");
  const [totalElectors, setTotalElectors] = useState(500);
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState("Booth 1");
  const [timePeriod, setTimePeriod] = useState("current");

  const boothOptions = [
    "Booth 1", "Booth 2", "Booth 3", "Booth 4", "Booth 5"
  ];

  const timePeriodOptions = [
    { value: "current", label: "Current" },
    { value: "today", label: "Today" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const percent = Math.round((Number(voters) / Number(totalElectors)) * 100);

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      
      setHistory([
        ...history,
        {
          id: history.length + 1,
          time: timeStr,
          voters: Number(voters),
          totalElectors: Number(totalElectors),
          percent,
          submittedBy: "You",
          status: "Pending"
        }
      ]);
      
      setMsg(`Successfully submitted turnout: ${percent}%`);
      setVoters("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleReset = () => {
    setVoters("");
    setMsg("");
  };

  const getCurrentTurnout = () => {
    if (history.length === 0) return 0;
    return history[history.length - 1].percent;
  };

  const getProgressColor = (percent) => {
    if (percent < 30) return "danger";
    if (percent < 60) return "warning";
    return "success";
  };

  const filteredHistory = timePeriod === "current" 
    ? history.slice(-3) 
    : history;

  return (
    <Fragment style={{ fontFamily: 'Inter, sans-serif' }}>
      <Col lg="12">
        <Card>
          <CardHeader className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0" style={{fontSize:'25px',fontWeight:'500'}}>
              Voter Turnout Submission
            </h1>
            <div className="d-flex gap-2">
              <FormGroup className="mb-0">
                <Input
                  type="select"
                  value={selectedBooth}
                  onChange={(e) => setSelectedBooth(e.target.value)}
                  className="form-control-sm"
                >
                  {boothOptions.map((booth) => (
                    <option key={booth} value={booth}>{booth}</option>
                  ))}
                </Input>
              </FormGroup>
              {/* <Button color="light" size="sm">
                <FaSync />
              </Button> */}
            </div>
          </CardHeader>
          
          <CardBody>
            <Row>
              <Col md="6">
                <Card className="mb-4" style={{ borderLeft: "4px solid #0d6efd" }}>
                  <CardBody>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Current Turnout</span>
                      <span className="fw-bold">{getCurrentTurnout()}%</span>
                    </div>
                    <Progress 
                      color={getProgressColor(getCurrentTurnout())}
                      value={getCurrentTurnout()} 
                      className="mb-3"
                    />
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">Last Update: {history.length ? history[history.length - 1].time : "N/A"}</small>
                      <small className="text-muted">By: {history.length ? history[history.length - 1].submittedBy : "N/A"}</small>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="mb-4">
                  <CardBody>
                    <h5 className="mb-3">Submit New Turnout</h5>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <Label>Number of Voters</Label>
                        <Input
                          type="number"
                          min={0}
                          max={totalElectors}
                          required
                          value={voters}
                          onChange={(e) => setVoters(e.target.value)}
                          placeholder="Enter number of voters"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label>Total Electors</Label>
                        <Input
                          type="number"
                          required
                          value={totalElectors}
                          onChange={(e) => setTotalElectors(e.target.value)}
                          placeholder="Enter total electors"
                        />
                      </FormGroup>
                      
                      <div className="d-flex gap-2 mt-4">
                        <Button 
                          color="primary" 
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Turnout"}
                        </Button>
                        <Button 
                          color="light" 
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                      </div>
                    </Form>
                    
                    {msg && (
                      <div className="alert alert-success mt-3 mb-0">
                        {msg}
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>
              
              <Col md="6">
                <Card>
                  <CardBody>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">
                        <FaHistory className="me-2" />
                        Turnout History
                      </h5>
                      <FormGroup className="mb-0" style={{ width: 120 }}>
                        <Input
                          type="select"
                          value={timePeriod}
                          onChange={(e) => setTimePeriod(e.target.value)}
                          className="form-control-sm"
                        >
                          {timePeriodOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </div>
                    
                    <div className="table-responsive">
                      <Table hover className="mb-0">
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Voters</th>
                            <th>Electors</th>
                            <th>Turnout</th>
                            <th>By</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredHistory.map((entry) => (
                            <tr key={entry.id}>
                              <td>{entry.time}</td>
                              <td>{entry.voters}</td>
                              <td>{entry.totalElectors}</td>
                              <td>
                                <span className={`fw-bold text-${getProgressColor(entry.percent)}`}>
                                  {entry.percent}%
                                </span>
                              </td>
                              <td>{entry.submittedBy}</td>
                              <td>
                                <span className={`badge bg-${entry.status === "Verified" ? "success" : "warning"}-light text-dark`}>
                                  {entry.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    
                    {filteredHistory.length === 0 && (
                      <div className="text-center py-4 text-muted">
                        No turnout data available
                      </div>
                    )}
                  </CardBody>
                </Card>
                
                <Card className="mt-4 bg-light-info border-0">
                  <CardBody>
                    <div className="d-flex align-items-start">
                      <FaInfoCircle className="text-info mt-1 me-2" size={18} />
                      <div>
                        <h6 className="text-info">Reporting Guidelines</h6>
                        <p className="mb-0 small text-dark">
                          Submit turnout figures at each scheduled reporting time (e.g., 9 AM, 11 AM, 1 PM, etc.). 
                          Final turnout is detailed after poll closure following verification. Ensure numbers are 
                          accurate and consistent across all reports.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default VotersTurnout;