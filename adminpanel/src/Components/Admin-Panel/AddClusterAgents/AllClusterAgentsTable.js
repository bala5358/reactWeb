import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../AbstractElements";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import HeaderCard from "../../Common/Component/HeaderCard";
import DataTable from "react-data-table-component";
import { clusterAgentColumns, clusterAgentData } from "./ClusterAgentList";

const ClusterAgentListTitle = "Cluster Agents";
const ClusterAgentListDesc =
  "View all cluster agents and manage their assigned booths.";

const AllClusterAgentsTable = () => {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Admin"
        title="Cluster Agent List"
        mainTitle="Cluster Agent List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={ClusterAgentListTitle} span1={ClusterAgentListDesc} />
              <CardBody>
                <div className="table-responsive">
                  <DataTable
                    noHeader
                    pagination
                    columns={clusterAgentColumns}
                    data={clusterAgentData}
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

export default AllClusterAgentsTable;
