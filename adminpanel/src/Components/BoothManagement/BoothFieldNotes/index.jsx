import React,{ Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import FieldNotes from './FieldNotes';

const BoothFieldNotes = () => {
  
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Voter Data Entry Form' parent='Users' title='Voter Data' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            {/* <Col xl='12'>
              <LeftSideTab />
            </Col> */}
            <Col xl='12'>
              <FieldNotes />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BoothFieldNotes;
