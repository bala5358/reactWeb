import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import AgentManagementPageTable from './AgentManagementPageTable';

const AgentManagementPage = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="Agent" title="Agent" mainTitle="Agent Management" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
             
              <CardBody>
               
                <AgentManagementPageTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};

export default AgentManagementPage;