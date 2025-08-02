import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import AgentListTable from './agentListTable';
// import DataTableComponent from './DataTableComponent';
// import UserListTable from './UserListTable';

const AgentList = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="Agent" title="List" mainTitle="Agent List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              {/* <HeaderCard title="Select Multiple and Delete Single Data" /> */}
              <CardBody>
                <AgentListTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};

export default AgentList;