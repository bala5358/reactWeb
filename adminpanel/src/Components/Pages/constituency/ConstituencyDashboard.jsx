import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { ElectionWidgetData  } from './constituencyData';
import ConstituencyCampaigns from './ConstituencyCampaigns';
import ConstituencyWidget from './ConstituencyWidget';
import ElectoralChart from './ElectoralChart';
import Notifications from './Notifications';
import ConstituencyCalender from './ConstituencyCalender';

const ConstituencyDashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Constituency' parent='Dashboard' title='Constituency' />
      <Container fluid={true}>
 
           <Row className="g-3 justify-content-between">
          {ElectionWidgetData.map((item, i) => (
            <Col key={i} xs="6" sm="4" md="3" lg="2" xl="2" xxl="2">
              <ConstituencyWidget data={item} />
            </Col>
          ))}

            </Row>
<Col xl='12'>
  <Row className='g-3'> {/* adds spacing between columns */}
    <Col xl='4' lg='6' md='12'>
      <ElectoralChart />
    </Col>
    <Col xl='4' lg='6' md='12'>
      <Notifications />
    </Col>
    <Col xl='4' lg='12' md='12'>
      <ConstituencyCalender />
    </Col>
  </Row>
</Col>


          
          <Col xl='12'>
            <ConstituencyCampaigns/>
          </Col>
        
        {/* </Row> */}
      </Container>
    </Fragment>
  );
};

export default ConstituencyDashboard;
