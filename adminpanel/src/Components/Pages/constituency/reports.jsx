import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaFilePdf } from "react-icons/fa";

// Sample reports data per constituency
const reportsData = {
  "Mettupalayam": [
    { title: "Mettupalayam Daily Turnout", date: "2025-08-05", file: "mettupalayam-turnout.pdf" },
    { title: "Mettupalayam Booth Summary", date: "2025-08-04", file: "mettupalayam-booth.pdf" },
    { title: "Mettupalayam Security Report", date: "2025-08-03", file: "mettupalayam-security.pdf" },
    { title: "Mettupalayam Incident Log", date: "2025-08-02", file: "mettupalayam-incident.pdf" },
    { title: "Mettupalayam Final Vote Count", date: "2025-08-01", file: "mettupalayam-final.pdf" }
  ],
  "Sulur": [
    { title: "Sulur Security Incidents", date: "2025-08-03", file: "sulur-security.pdf" },
    { title: "Sulur Final Vote Count", date: "2025-08-02", file: "sulur-final-votes.pdf" },
    { title: "Sulur Daily Turnout", date: "2025-08-01", file: "sulur-turnout.pdf" },
    { title: "Sulur Booth Summary", date: "2025-07-31", file: "sulur-booth.pdf" },
    { title: "Sulur Incident Report", date: "2025-07-30", file: "sulur-incident.pdf" }
  ],
  "Kavundampalayam": [
    { title: "Kavundampalayam Reports Summary", date: "2025-08-05", file: "kavundampalayam-summary.pdf" }
  ],
  "Coimbatore (North)": [
    { title: "Coimbatore (North) Daily Turnout", date: "2025-08-05", file: "coimbatore-north-turnout.pdf" },
    { title: "Coimbatore (North) Security Report", date: "2025-08-04", file: "coimbatore-north-security.pdf" }
  ],
  "Thondamuthur": [],
  "Coimbatore (South)": [],
  "Singanallur": [
    { title: "Singanallur Turnout Report", date: "2025-08-05", file: "singanallur-turnout.pdf" }
  ],
  "Kinathukadavu": [],
  "Pollachi": [],
  "Valparai": []
};

const constituencies = Object.keys(reportsData);

const ReportsPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedConstituency, setSelectedConstituency] = useState("Mettupalayam");

  const toggle = () => setDropdownOpen(prev => !prev);
  const handleSelect = (name) => setSelectedConstituency(name);

  // Get reports for selected constituency (no filler reports)
  const reportsToShow = reportsData[selectedConstituency] || [];

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Header */}
      <Row className="align-items-center justify-content-between mb-4">
        <Col xs="12" md="6">
          <h1 className="fw-bold text-dark">Election Reports</h1>
        </Col>
        <Col xs="12" md="6" className="text-md-end mt-3 mt-md-0">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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
              {constituencies.map((name, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleSelect(name)}
                  style={{ color: "black" }}
                >
                  {name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>

      {/* Reports Grid or No Data Message */}
      <Row className="g-3">
        {reportsToShow.length > 0 ? (
          reportsToShow.map((report, index) => (
            <Col key={index} md="6" xl="3">
              <Card className="shadow-sm h-100 border-0" style={{ borderTop: "4px solid #2563eb" }}>
                <CardBody className="d-flex flex-column justify-content-between">
                  <div>
                    <FaFilePdf className="text-danger mb-2" size={30} />
                    <CardTitle tag="h5" className="fw-bold">{report.title}</CardTitle>
                    <small className="text-muted">Date: {report.date}</small>
                  </div>
                  <Button
                    color="primary"
                    className="mt-3"
                    href={`/downloads/${report.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs="12">
            <p className="text-center text-muted fs-5 mt-4">No reports available for this constituency.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ReportsPage;
