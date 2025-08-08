import React,{ Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';
import PollDayOp from './PollDayOp';

const PollDayOperation = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Poll Day Operations' parent='Users' title='Poll Day Operations' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='12'>
              <PollDayOp />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default PollDayOperation;
