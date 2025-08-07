import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../AbstractElements";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import HeaderCard from "../../Common/Component/HeaderCard";
import DataTable from "react-data-table-component";
import { surveyAgentColumns, surveyAgentData } from "./SurveyAgentList";

const SurveyAgentListTitle = "Survey Agents";
const SurveyAgentListDesc =
  "View all survey agents and manage their details.";

const AllSurveyAgentsTable = () => {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Admin"
        title="Survey Agent List"
        mainTitle="Survey Agent List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={SurveyAgentListTitle} span1={SurveyAgentListDesc} />
              <CardBody>
                <div className="table-responsive">
                  <DataTable
                    noHeader
                    pagination
                    columns={surveyAgentColumns}
                    data={surveyAgentData}
                    highlightOnHover
                    striped
                    responsive
                    fixedHeader
                    fixedHeaderScrollHeight="400px"
                    persistTableHead
                    dense
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AllSurveyAgentsTable;
