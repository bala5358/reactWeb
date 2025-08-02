import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
// import HeaderCard from '../../Common/Component/HeaderCard';
// import DataTableComponent from './DataTableComponent';
import UserListTable from './UserListTable';

const UserList = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="User" title="List" mainTitle="User List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              {/* <HeaderCard title="Select Multiple and Delete Single Data" /> */}
              <CardBody>
                <Button style={{ float: "inline-end"}}>Add User</Button>
                <UserListTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};

export default UserList;