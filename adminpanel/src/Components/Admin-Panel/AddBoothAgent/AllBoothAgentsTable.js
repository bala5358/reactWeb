import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../AbstractElements";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import HeaderCard from "../../Common/Component/HeaderCard";
import DataTable from "react-data-table-component";
import { boothAgentColumns, boothAgentData } from "./BoothAgentList";

const BoothAgentListTitle = "Booth Agents";
const BoothAgentListDesc =
  "View all booth agents and manage their details.";

const AllBoothAgentsTable = () => {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Admin"
        title="Booth Agent List"
        mainTitle="Booth Agent List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={BoothAgentListTitle} span1={BoothAgentListDesc} />
              <CardBody>
                <div className="table-responsive">
                  <DataTable
                    noHeader
                    pagination
                    columns={boothAgentColumns}
                    data={boothAgentData}
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

export default AllBoothAgentsTable;
