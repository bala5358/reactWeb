import React from "react";
import { Container, Card, CardBody, CardHeader } from "reactstrap";
import IndiaMap from "./IndiaMap"; // we'll create this component

const DashboardMaps = ({ selectedState }) => {
  return (
    <Container fluid={true} className="mt-4">
      <Card>
        <CardHeader>
          <h4 className="mb-0">State Map Viewer</h4>
        </CardHeader>
        <CardBody>
          {selectedState ? (
            <p>
              Showing map for: <strong>{selectedState}</strong>
            </p>
          ) : (
            <p>Please select a state from the dropdown.</p>
          )}

          {/* Map Area */}
          <div
            style={{
              height: "500px",
              background: "#f5f5f5",
              padding: "1rem",
              borderRadius: "8px",
              overflow: "auto"
            }}
          >
            <IndiaMap selectedState={selectedState} />
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DashboardMaps;
