import React, { Fragment, useContext } from 'react';
import { Breadcrumbs, Btn } from '../../../AbstractElements';
import { Add, Cancel } from '../../../Constant';
import { useForm } from 'react-hook-form';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import CustomizerContext from '../../../_helper/Customizer';

const AddAdmin = () => {
  const navigate = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      console.log('✅ Admin Data Submitted:', data);
      // Call API to create admin here
      navigate(`${process.env.PUBLIC_URL}/admin/users/${layoutURL}`);
    }
  };

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  return (
    <Fragment>
      <Breadcrumbs parent="Admin" title="Add Admin User" mainTitle="Add Admin User" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    {/* Name */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Name</Label>
                        <Input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          placeholder="Enter full name"
                        />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                      </FormGroup>
                    </Col>

                    {/* Email */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          {...register('email', { required: 'Email is required' })}
                          placeholder="Enter email address"
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                      </FormGroup>
                    </Col>

                    {/* Confirm Email */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Confirm Email</Label>
                        <Input
                          type="email"
                          {...register('confirmEmail', {
                            required: 'Confirm email is required',
                            validate: value =>
                              value === watchEmail || 'Emails do not match',
                          })}
                          placeholder="Re-enter email address"
                        />
                        {errors.confirmEmail && <p className="text-danger">{errors.confirmEmail.message}</p>}
                      </FormGroup>
                    </Col>

                    {/* Phone */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone</Label>
                        <Input
                          type="text"
                          {...register('phone', { required: 'Phone number is required' })}
                          placeholder="Enter phone number"
                        />
                        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                      </FormGroup>
                    </Col>

                    {/* Alternate Phone */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Alternate Phone Number</Label>
                        <Input
                          type="text"
                          {...register('altPhone')}
                          placeholder="Optional alternate phone number"
                        />
                      </FormGroup>
                    </Col>

                    {/* Password */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Password</Label>
                        <Input
                          type="password"
                          {...register('password', { required: 'Password is required' })}
                          placeholder="Set a secure password"
                        />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                      </FormGroup>
                    </Col>

                    {/* Confirm Password */}
                    <Col md="6">
                      <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          {...register('confirmPassword', {
                            required: 'Confirm password is required',
                            validate: value =>
                              value === watchPassword || 'Passwords do not match',
                          })}
                          placeholder="Re-enter password"
                        />
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* Submit Buttons */}
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
