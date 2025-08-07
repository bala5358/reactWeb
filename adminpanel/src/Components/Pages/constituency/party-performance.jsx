import React, { useState } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PartyPerformanceChart from "./PartyPerformanceChart";

// Sample constituency list (replace with real data if available)
const constituencies = [
  "Mettupalayam",
  "Sulur",
  "Kavundampalayam",
  "Coimbatore (North)",
  "Thondamuthur",
  "Coimbatore (South)",
  "Singanallur",
  "Kinathukadavu",
  "Pollachi",
  "Valparai",
];

const PartyPerformancePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedConstituency, setSelectedConstituency] = useState(
    constituencies[6]
  );

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Header Row with Title and Dropdown */}
      <Row className="align-items-center justify-content-between mb-4">
        <Col xs="12" md="6">
          <h5 className="fw-bold text-dark">Party Performance</h5>
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
                textAlign: "left",
              }}
            >
              {selectedConstituency}
            </DropdownToggle>
            <DropdownMenu end style={{ backgroundColor: "white" }}>
              {constituencies.map((c, idx) => (
                <DropdownItem
                  key={idx}
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

      {/* Chart Component */}
      <PartyPerformanceChart selectedConstituency={selectedConstituency} />
      
    </div>
  );
};

export default PartyPerformancePage;
