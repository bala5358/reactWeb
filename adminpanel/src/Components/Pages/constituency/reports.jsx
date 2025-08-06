import React from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FaFilePdf } from "react-icons/fa";

const reports = [
  { title: "Daily Turnout Report", date: "2025-08-05", file: "turnout-report.pdf" },
  { title: "Booth Performance Summary", date: "2025-08-04", file: "booth-performance.pdf" },
  { title: "Security Incidents Summary", date: "2025-08-03", file: "security-incidents.pdf" },
  { title: "Final Vote Count", date: "2025-08-02", file: "final-vote-count.pdf" }
];

const ReportsPage = () => {
  return (
    <div className="p-4 bg-light min-vh-100">
      <h1 className="mb-4 fw-bold" style={{color:"black"}}>Election Reports</h1>

      <Row className="g-3">
        {reports.map((r, i) => (
          <Col key={i} md="6" xl="3">
            <Card className="shadow-sm h-100 border-0" style={{ borderTop: "4px solid #2563eb" }}>
              <CardBody className="d-flex flex-column justify-content-between">
                <div>
                  <FaFilePdf className="text-danger mb-2" size={30} />
                  <CardTitle tag="h5" className="fw-bold">{r.title}</CardTitle>
                  <small className="text-muted">Date: {r.date}</small>
                </div>
                <Button
                  color="primary"
                  className="mt-3"
                  href={`/downloads/${r.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReportsPage;
