// AllConstitutionsTable.js

import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import HeaderCard from '../../Common/Component/HeaderCard';
import DataTable from 'react-data-table-component';
import { constitutionColumns, constitutionData } from './ConstitutionList';

const ConstitutionListTitle = 'Constitution List';
const ConstitutionListDesc = 'View all constituency heads and manage their details.';

const AllConstitutionsTable = () => {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Admin"
        title="Constitution List"
        mainTitle="Constitution List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={ConstitutionListTitle} span1={ConstitutionListDesc} />
              <CardBody>
                <div className="table-responsive">
                  <DataTable
                    noHeader
                    pagination
                    columns={constitutionColumns}
                    data={constitutionData}
                    highlightOnHover
                    striped
                    responsive
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AllConstitutionsTable;
