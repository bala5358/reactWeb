import React,{ Fragment,useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';
import MyProfileEdit from '../../Application/Users/UsersEdit/MyProfile';
import MaterialTabWithColorClass from '../../Bonus-Ui/Cards/TabCard/MaterialTabWithColor';
import { RibbonData } from '../../Common/Data/Bonus-ui';
import RightSideTab from './RightSideTab';
import LeftSideTab from './LeftSideTab';
const VoterDataEntry = () => {
  const [searchTerm, setSearchTerm] = useState('');
    

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
              <RightSideTab />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default VoterDataEntry;
