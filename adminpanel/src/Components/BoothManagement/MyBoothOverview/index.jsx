import React,{ Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';

import BoothOverview from './BoothOverview';

const MyBoothOverview = () => {
    
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Voter Data Entry Form' parent='Users' title='Voter Data' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='12'>
              <BoothOverview />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default MyBoothOverview;
