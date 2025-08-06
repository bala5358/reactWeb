import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { FaExclamationCircle } from "react-icons/fa";

const alerts = [
  { message: "Low turnout at Booth 102", priority: "High" },
  { message: "Technical issue at Booth 103", priority: "Medium" },
  { message: "Heavy rain near Booth 110", priority: "Low" }
];

const AlertCard = ({ message, priority }) => {
  const colors = {
    High: { bg: "#fee2e2", text: "#b91c1c", border: "#b91c1c" }, // red
    Medium: { bg: "#fef9c3", text: "#92400e", border: "#92400e" }, // yellow
    Low: { bg: "#dbeafe", text: "#1e40af", border: "#1e40af" } // blue
  };

  const style = colors[priority] || colors.Low;

  return (
    <Card
      className="shadow-sm h-100"
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`
      }}
    >
      <CardBody className="d-flex flex-column">
        <div className="d-flex align-items-center mb-2">
          <FaExclamationCircle
            size={20}
            style={{ color: style.text, marginRight: "8px" }}
          />
          <h6 className="mb-0 fw-bold" style={{ color: style.text }}>
            {priority} Priority
          </h6>
        </div>
        <p className="mb-0" style={{ color: style.text }}>
          {message}
        </p>
      </CardBody>
    </Card>
  );
};

const AlertsPage = () => {
  return (
    <div className="p-4 bg-light min-vh-100">
      <h1 className="mb-4 fw-bold"style={{color:"black"}}>Live Alerts</h1>
      <Row className="g-3">
        {alerts.map((alert, i) => (
          <Col key={i} md="6" xl="3">
            <AlertCard {...alert} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AlertsPage;
