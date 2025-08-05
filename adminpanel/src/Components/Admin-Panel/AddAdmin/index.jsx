import React, { Fragment, useContext } from 'react';
import { Breadcrumbs, Btn } from '../../../AbstractElements';
import { Add, Cancel } from '../../../Constant';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import CustomizerContext from '../../../_helper/Customizer';

const AddAdmin = () => {
  const navigate = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      console.log('✅ Admin Data Submitted:', data);
      // Call API to create admin here
      navigate(`${process.env.PUBLIC_URL}/admin/users/${layoutURL}`);
    }
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Admin" title="Add Admin User" mainTitle="Add Admin User" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Enter full name"
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone</Label>
                    <Input
                      type="text"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="Enter phone number"
                    />
                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      {...register('password', { required: 'Password is required' })}
                      placeholder="Set a secure password"
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Role</Label>
                    <Input type="select" {...register('role', { required: 'Role is required' })}>
                      <option value="">Select Role</option>
                      <option value="BoothAgent">Booth Agent</option>
                      <option value="SurveyAgent">Survey Agent</option>
                      <option value="ClusterSupervisor">Cluster Supervisor</option>
                      <option value="ConstituencyLead">Constituency Lead</option>
                      <option value="Admin">Admin</option>
                    </Input>
                    {errors.role && <p className="text-danger">{errors.role.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Assigned Geography</Label>
                    <Input type="select" {...register('geography')}>
                      <option value="">Select Geography</option>
                      <option value="booth-1">Booth 1</option>
                      <option value="cluster-2">Cluster 2</option>
                      {/* Dynamically load from API if needed */}
                    </Input>
                  </FormGroup>

                  <Row>
                    <Col className="text-end">
                      <Btn attrBtn={{ color: 'success', className: 'me-3' }}>{Add}</Btn>
                      <Link to={`${process.env.PUBLIC_URL}/admin/users`}>
                        <Btn attrBtn={{ color: 'danger' }}>{Cancel}</Btn>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddAdmin;
