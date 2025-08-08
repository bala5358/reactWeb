import React,{ Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';
import VoterContactInfo from './VoterContactInfo';

const VoterContactInformation = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Voter&apos;s Contact Information' parent='Users' title='Voters Contact Info' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='12'>
              <VoterContactInfo />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default VoterContactInformation;
