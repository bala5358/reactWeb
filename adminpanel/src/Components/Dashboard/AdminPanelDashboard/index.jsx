import React, { Fragment, useState } from "react";
import { Col, Container, Row, FormGroup, Label, Input } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { SmallWidgetsData, SocialWidgetData } from "../../../Data/Social";

import AllCampaigns from "./AllCampaigns";
import FacebookCampaign from "./FacebookCampaign";
import FollowerGender from "./FollowerGender";
import InstagramSubscription from "./InstagramSubscription";
import MobileAppCard from "./MobileAppCard";
import SmallWidgets from "./SmallWidgets";
import SocialProfileCard from "./SocialProfileCard";
import SocialWidget from "../../Common/CommonWidgets/SocialWidget";
import Views from "./Views";

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
                <SocialProfileCard selectedState={selectedState} />
              </Col>
              <Col xl="12" md="6">
                <MobileAppCard selectedState={selectedState} />
              </Col>
            </Row>
          </Col>

          <Col xxl="6" xl="8" className="col-ed-8 box-col-8e">
            <Row>
              {SocialWidgetData.map((item, i) => (
                <Col md="4" sm="6" key={i}>
                  <SocialWidget selectedState={selectedState} />
                </Col>
              ))}
              <Col md="8">
                <InstagramSubscription />
              </Col>
              <Col md="4">
                <Row>
                  {SmallWidgetsData.map((item, i) => (
                    <Col md="12" sm="6" key={i}>
                      <SmallWidgets data={item} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>

          <Col
            xl="3"
            className="col-ed-none d-xxl-block d-lg-none box-col-none"
          >
            <Row>
              <Col lg="12" sm="6">
                <FollowerGender />
              </Col>
              <Col lg="12" sm="6">
                <FacebookCampaign />
              </Col>
            </Row>
          </Col>

          <Col xl="7">
            <AllCampaigns />
          </Col>
          <Col xl="5">
            <Views />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AdminPanelDashboard;
