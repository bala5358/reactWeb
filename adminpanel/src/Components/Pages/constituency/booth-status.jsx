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
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle
} from "react-icons/fa";

// 🗳️ Booth data per constituency
const constituencyBooths = {
  "Mettupalayam": [
    { boothName: "Booth 1", status: "Open", voters: 180 },
    { boothName: "Booth 2", status: "Closed", voters: 220 },
    { boothName: "Booth 3", status: "Issue", voters: 300 },
    { boothName: "Booth 4", status: "Open", voters: 210 }
  ],
  "Sulur": [
    { boothName: "Booth A", status: "Open", voters: 210 },
    { boothName: "Booth B", status: "Issue", voters: 190 },
    { boothName: "Booth C", status: "Closed", voters: 150 },
    { boothName: "Booth D", status: "Open", voters: 260 }
  ],
  "Kavundampalayam": [
    { boothName: "K Booth 1", status: "Closed", voters: 250 },
    { boothName: "K Booth 2", status: "Open", voters: 180 }
  ],
  "Coimbatore (North)": [
    { boothName: "North Booth 1", status: "Open", voters: 320 },
    { boothName: "North Booth 2", status: "Closed", voters: 250 },
    { boothName: "North Booth 3", status: "Issue", voters: 180 },
    { boothName: "North Booth 4", status: "Open", voters: 270 },
    { boothName: "North Booth 5", status: "Closed", voters: 310 }
  ],
  "Thondamuthur": [
    { boothName: "Thondamuthur Booth 1", status: "Open", voters: 300 },
    { boothName: "Thondamuthur Booth 2", status: "Issue", voters: 220 },
    { boothName: "Thondamuthur Booth 3", status: "Closed", voters: 200 },
    { boothName: "Thondamuthur Booth 4", status: "Open", voters: 290 },
    { boothName: "Thondamuthur Booth 5", status: "Closed", voters: 210 }
  ],
  "Coimbatore (South)": [
    { boothName: "South Booth 1", status: "Open", voters: 310 },
    { boothName: "South Booth 2", status: "Closed", voters: 195 },
    { boothName: "South Booth 3", status: "Issue", voters: 240 },
    { boothName: "South Booth 4", status: "Open", voters: 305 },
    { boothName: "South Booth 5", status: "Closed", voters: 260 }
  ],
  "Singanallur": [
    { boothName: "Singanallur Booth 1", status: "Open", voters: 280 },
    { boothName: "Singanallur Booth 2", status: "Issue", voters: 210 },
    { boothName: "Singanallur Booth 3", status: "Closed", voters: 230 },
    { boothName: "Singanallur Booth 4", status: "Open", voters: 275 },
    { boothName: "Singanallur Booth 5", status: "Closed", voters: 255 }
  ],
  "Kinathukadavu": [],
  "Pollachi": [],
  "Valparai": []
};

const BoothStatusCard = ({ boothName, status, voters }) => {
  const statusStyles = {
    Open: {
      bg: "#d1fae5",
      text: "#047857",
      icon: <FaCheckCircle className="text-success" size={24} />
    },
    Issue: {
      bg: "#fef3c7",
      text: "#92400e",
      icon: <FaExclamationTriangle className="text-warning" size={24} />
    },
    Closed: {
      bg: "#fee2e2",
      text: "#b91c1c",
      icon: <FaTimesCircle className="text-danger" size={24} />
    }
  };

  const style = statusStyles[status] || statusStyles.Closed;

  return (
    <Card
      className="shadow-sm h-100"
      style={{
        backgroundColor: style.bg,
        cursor: "pointer",
        transition: "transform 0.2s"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <CardBody className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0 fw-bold" style={{ color: style.text }}>
            {boothName}
          </h5>
          {style.icon}
        </div>
        <p className="mb-1 text-muted">
          <strong>{voters}</strong> voters registered
        </p>
        <span
          className="badge mt-2"
          style={{
            backgroundColor: "transparent",
            color: style.text,
            border: `1px solid ${style.text}`
          }}
        >
          {status}
        </span>
      </CardBody>
    </Card>
  );
};

const BoothStatusPage = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedConstituency, setSelectedConstituency] = useState("Mettupalayam");

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const booths = constituencyBooths[selectedConstituency] || [];

  const handleLoadMore = () => setVisibleCount((prev) => prev + 10);

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Header */}
      <Row className="align-items-center justify-content-between mb-4">
        <Col xs="12" md="6">
          <h5 className="fw-bold text-dark">{selectedConstituency} Booth Status</h5>
        </Col>
        <Col xs="12" md="6" className="text-md-end mt-3 mt-md-0">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              caret
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #ccc",
                width: "240px",
                textAlign: "left"
              }}
            >
              {selectedConstituency}
            </DropdownToggle>
            <DropdownMenu end style={{ backgroundColor: "white" }}>
              {Object.keys(constituencyBooths).map((constituency, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    setSelectedConstituency(constituency);
                    setVisibleCount(10); // reset
                  }}
                  style={{ color: "black" }}
                >
                  {constituency}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>

      {/* Booth Cards */}
      <Row className="g-3">
        {booths.length === 0 ? (
          <Col>
            <div className="text-muted">No booth data available.</div>
          </Col>
        ) : (
          booths.slice(0, visibleCount).map((booth, index) => (
            <Col key={index} md="6" xl="3">
              <BoothStatusCard {...booth} />
            </Col>
          ))
        )}
      </Row>

      {/* Load More */}
      {visibleCount < booths.length && (
        <div className="mt-4 text-center">
          <button onClick={handleLoadMore} className="btn btn-primary px-4">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BoothStatusPage;
