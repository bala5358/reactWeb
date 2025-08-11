import React,{ Fragment,useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';
import MyProfileEdit from '../../Application/Users/UsersEdit/MyProfile';
import MaterialTabWithColorClass from '../../Bonus-Ui/Cards/TabCard/MaterialTabWithColor';
import { RibbonData } from '../../Common/Data/Bonus-ui';
import RightSideTab from './RightSideTab';
import VotersTurnout from './VotersTurnout';
const BoothTurnout = () => {
    

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Voters Turnout' parent='Users' title='Voters Turnout' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='12'>
              <VotersTurnout />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BoothTurnout;


