import React,{ Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';
import VoterAgeFilter from './VoterAgeFilter';

const BoothLevelVoterAgeFilter = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Filter Voters' parent='Users' title='Voter Data' />
      <Container fluid={true}>
          <Row>
            <Col xl='12'>
              <VoterAgeFilter />
            </Col>
          </Row>
      </Container>
    </Fragment>
  );
};
export default BoothLevelVoterAgeFilter;
