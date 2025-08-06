import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle
} from "react-icons/fa";

// Sample Booth Data
const allBooths = Array.from({ length: 30 }, (_, i) => ({
  boothName: `Booth ${i + 1}`,
  status: i % 3 === 0 ? "Open" : i % 3 === 1 ? "Issue" : "Closed",
  voters: Math.floor(Math.random() * 500) + 100
}));

const BoothStatusCard = ({ boothName, status, voters }) => {
  const statusStyles = {
    Open: {
      bg: "#d1fae5", // green-100
      text: "#047857", // green-700
      icon: <FaCheckCircle className="text-success" size={24} />
    },
    Issue: {
      bg: "#fef3c7", // yellow-100
      text: "#92400e", // yellow-700
      icon: <FaExclamationTriangle className="text-warning" size={24} />
    },
    Closed: {
      bg: "#fee2e2", // red-100
      text: "#b91c1c", // red-700
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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <h1 className="mb-4 fw-bold" style={{color:"black"}}>Election Booth Status</h1>

      <Row className="g-3">
        {allBooths.slice(0, visibleCount).map((booth, index) => (
          <Col key={index} md="6" xl="3">
            <BoothStatusCard {...booth} />
          </Col>
        ))}
      </Row>

      {visibleCount < allBooths.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleLoadMore}
            className="btn btn-primary px-4"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BoothStatusPage;
