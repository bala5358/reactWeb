import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaExclamationCircle } from "react-icons/fa";

// Sample alert data by constituency
const constituencyAlerts = {
  "Mettupalayam": [
    { message: "Power outage in Booth 5", priority: "High" },
    { message: "Agent delay in Booth 2", priority: "Medium" }
  ],
  "Sulur": [
    { message: "Low turnout at Booth 3", priority: "Low" },
    { message: "Technical issue at Booth 4", priority: "Medium" }
  ],
  "Kavundampalayam": [
    { message: "Flooding near Booth 1", priority: "High" }
  ],
  "Coimbatore (North)": [
    { message: "Security alert at Booth 10", priority: "High" }
  ],
  "Thondamuthur": [],
  "Coimbatore (South)": [],
  "Singanallur": [
    { message: "Long queue at Booth 6", priority: "Low" }
  ],
  "Kinathukadavu": [],
  "Pollachi": [],
  "Valparai": []
};

// Constituency list
const constituencies = Object.keys(constituencyAlerts);

// Alert card component
const AlertCard = ({ message, priority }) => {
  const colors = {
    High: { bg: "#fee2e2", text: "#b91c1c", border: "#b91c1c" },
    Medium: { bg: "#fef9c3", text: "#92400e", border: "#92400e" },
    Low: { bg: "#dbeafe", text: "#1e40af", border: "#1e40af" }
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

// Alerts page
const AlertsPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedConstituency, setSelectedConstituency] = useState(
    constituencies[0]
  );

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const alerts = constituencyAlerts[selectedConstituency] || [];

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Header */}
      <Row className="align-items-center justify-content-between mb-4">
        <Col xs="12" md="6">
          <h5 className="fw-bold text-dark">Live Alerts</h5>
        </Col>
        <Col xs="12" md="6" className="text-md-end mt-3 mt-md-0">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              caret
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #ccc",
                width: "220px",
                textAlign: "left"
              }}
            >
              {selectedConstituency}
            </DropdownToggle>
            <DropdownMenu end style={{ backgroundColor: "white" }}>
              {constituencies.map((c, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => setSelectedConstituency(c)}
                  style={{ color: "black" }}
                >
                  {c}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>

      {/* Alerts Display */}
      <Row className="g-3">
        {alerts.length > 0 ? (
          alerts.map((alert, i) => (
            <Col key={i} md="6" xl="3">
              <AlertCard {...alert} />
            </Col>
          ))
        ) : (
          <Col>
            <div className="text-muted">No alerts for {selectedConstituency}</div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AlertsPage;
