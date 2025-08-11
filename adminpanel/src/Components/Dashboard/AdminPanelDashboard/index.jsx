import React, { Fragment, useState } from "react";
import { Col, Container, Row, FormGroup, Label, Input } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import MobileAppCard from "./MobileAppCard";
import PartyProfileCard from "./PartyProfileCard";
import TopPartiesCard from "./TopPartiesCard";
import AdminPanelTable from "./AdminPanelTable";
import Views from "./Views";
import BasicMap from "../../Map/GoogleMap/BasicMap";
import DashboardMaps from "./DashboardMaps";

// 🗳️ State List
const INDIAN_STATES = ["Kerala", "Tamil Nadu", "Telangana"];

const AdminPanelDashboard = () => {
  const [selectedState, setSelectedState] = useState("Tamil Nadu"); // default

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Election Dashboard"
        parent="Dashboard"
        title="Election"
      />
      <Container fluid={true}>
        {/* 🟢 State Dropdown */}
        <Row className="mb-3">
          <Col md="12">
            <FormGroup>
              <Label for="stateSelect">Select State</Label>
              <Input
                type="select"
                name="state"
                id="stateSelect"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {INDIAN_STATES.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* 🔁 Dashboard Content */}
        <Row>
          <Col xxl="3" xl="4" className="col-ed-4 box-col-4">
            <Row>
              <Col xl="12" md="6">
                <PartyProfileCard selectedState={selectedState} />
              </Col>
              <Col xl="12" md="6">
                <MobileAppCard selectedState={selectedState} />
              </Col>
            </Row>
          </Col>
          <Col xxl="6" xl="8" className="col-ed-8 box-col-8e">
            <Row>
              <Col md="12" sm="6">
                <TopPartiesCard selectedState={selectedState} />
              </Col>
              <Col md="12">
                <AdminPanelTable selectedState={selectedState} />
              </Col>
            </Row>
          </Col>
          <Row>
            <Col md="6">
              <DashboardMaps selectedState={selectedState} />
            </Col>

            <Col md="6">
              <Views />
            </Col>
          </Row>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AdminPanelDashboard;
