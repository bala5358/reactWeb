import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { ElectionWidgetData  } from './constituencyData';
import ConstituencyCampaigns from './ConstituencyCampaigns';
import ConstituencyWidget from './ConstituencyWidget';
import ElectoralChart from './ElectoralChart';
import Notifications from './Notifications';
import ConstituencyCalender from './ConstituencyCalender';
import VotesPage from './VotesPage';

const ConstituencyDashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Constituency' parent='Dashboard' title='Constituency' />
      <Container fluid={true}>
 
          <Row className="g-3 justify-content-start">
  {ElectionWidgetData.map((item, i) => (
    <Col
      key={i}
      xs="6"   // 2 per row on mobile
      sm="4"   // 3 per row on small tablets
      md="6"   // 4 per row on medium tablets
      lg="6"   // 6 per row on laptops
      xl="2"
    >
      <ConstituencyWidget data={item} />
    </Col>
  ))}
</Row>

<Col xl='12'>
  <Row className='g-3'> {/* adds spacing between columns */}
    <Col xs="12"   // 2 per row on mobile
      sm="12"   // 3 per row on small tablets
      md="12"   // 4 per row on medium tablets
      lg="12"   // 6 per row on laptops
      xl="4">
      <ElectoralChart />
    </Col>
    <Col  xs="12"   // 2 per row on mobile
      sm="12"   // 3 per row on small tablets
      md="12"   // 4 per row on medium tablets
      lg="12"   // 6 per row on laptops
      xl="4">
      <Notifications />
    </Col>
    <Col  xs="12"   // 2 per row on mobile
      sm="12"   // 3 per row on small tablets
      md="12"   // 4 per row on medium tablets
      lg="12"   // 6 per row on laptops
      xl="4">
      <VotesPage />
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
