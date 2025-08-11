import React,{ Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

import BoothTeamResourcePage from './BoothTeamResourcePage';

const BoothTeamResource = () => {
    
  return (
    <Fragment>
      <Breadcrumbs mainTitle='BoothTeam & Resource' parent='Users' title='Voter Data' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='12'>
              <BoothTeamResourcePage />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BoothTeamResource;
