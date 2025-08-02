import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import { Done, All, Doing, CreateNewReport } from '../../../Constant';
import { Breadcrumbs, Btn } from '../../../AbstractElements';
import ProjectContext from '../../../_helper/Project';
import CusClass from '../../Application/Project/Common/CusClass';
import CustomizerContext from '../../../_helper/Customizer';
import NewReport from '../NewReports';


const AgentsReports = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const { allData } = useContext(ProjectContext);
  const [activeTab, setActiveTab] = useState('1');
  const [showNewReport, setShowNewReport] = useState(false);

  const handleCreateReportClick = () => setShowNewReport(true);
  const handleBackToList = () => setShowNewReport(false);

  return (
    <Fragment>
      <Breadcrumbs parent="Project" title="Agents Report" mainTitle={showNewReport ? 'Create Report' : 'Project List'} />
      <Container fluid={true}>
        {showNewReport ? (
          <>
            <div className="text-end mb-3">
              <Btn attrBtn={{ color: 'secondary', onClick: handleBackToList }}>← Back to Reports</Btn>
            </div>
            <NewReport />
          </>
        ) : (
          <Row className="project-card">
            <Col md="12" className="project-list">
              <Card>
                <Row>
                  <Col md="6">
                    <Nav tabs className="border-tab">
                      <NavItem><NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}><Target />{All}</NavLink></NavItem>
                      <NavItem><NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}><Info />{Doing}</NavLink></NavItem>
                      <NavItem><NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}><CheckCircle />{Done}</NavLink></NavItem>
                    </Nav>
                  </Col>
                  <Col md="6">
                    <div className="text-end">
                      <button className="btn btn-primary" style={{ color: 'white' }} onClick={handleCreateReportClick}>
                        <PlusCircle /> {CreateNewReport}
                      </button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        {allData.map((item, i) => (
                          <CusClass item={item} key={i} />
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        {allData.map((item, i) =>
                          item.badge === 'Doing' ? <CusClass item={item} key={i} /> : null
                        )}
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        {allData.map((item, i) =>
                          item.badge === 'Done' ? <CusClass item={item} key={i} /> : null
                        )}
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default AgentsReports;
