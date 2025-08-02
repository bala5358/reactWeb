import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import PartiesTable from './PartiesTable';

const PartiesList = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="Parties" title="List" mainTitle="Parties List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              {/* <HeaderCard title="Select Multiple and Delete Single Data" /> */}
            
              <CardBody>
                    <Button style={{ float: "inline-end"}}>Add Parties</Button>
                <PartiesTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};

export default PartiesList;