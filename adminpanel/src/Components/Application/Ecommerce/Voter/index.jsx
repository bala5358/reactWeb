import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Card, Col, Container, Row } from 'reactstrap';
import Filter from './Filter';

const Voter = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Voter List" mainTitle='Voter List' />
            <Container fluid={true} className='col-12 col-md-10 col-lg-10'>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Filter />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default Voter;