import React, { Fragment } from 'react';
import { Breadcrumbs, Btn } from '../../../AbstractElements';
import { Add, Cancel } from '../../../Constant';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const AddBoothAgent = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('✅ Agent Data Submitted:', data);
    // TODO: Replace with actual API call
    navigate(`${process.env.PUBLIC_URL}/admin/agents`);
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Admin" title="Add Agent" mainTitle="Add Booth/Survey Agent" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <Label>Full Name</Label>
                    <Input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Enter full name"
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="text"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="Enter contact number"
                    />
                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Email (Optional)</Label>
                    <Input
                      type="email"
                      {...register('email')}
                      placeholder="Enter email (optional)"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      {...register('password', { required: 'Password is required' })}
                      placeholder="Set agent password"
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Agent Role</Label>
                    <Input
                      type="select"
                      {...register('role', { required: 'Please select agent role' })}
                    >
                      <option value="">Select Role</option>
                      <option value="BoothAgent">Booth Agent</option>
                      <option value="SurveyAgent">Survey Agent</option>
                    </Input>
                    {errors.role && <p className="text-danger">{errors.role.message}</p>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Assign to Booth</Label>
                    <Input
                      type="select"
                      {...register('booth', { required: 'Select a booth' })}
                    >
                      <option value="">Select Booth</option>
                      <option value="booth-101">Booth 101 - Ward A</option>
                      <option value="booth-102">Booth 102 - Ward B</option>
                      {/* Dynamically populate via API */}
                    </Input>
                    {errors.booth && <p className="text-danger">{errors.booth.message}</p>}
                  </FormGroup>

                  <Row>
                    <Col className="text-end">
                      <Btn attrBtn={{ color: 'primary', className: 'me-3' }}>{Add}</Btn>
                      <Link to={`${process.env.PUBLIC_URL}/admin/agents`}>
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

export default AddBoothAgent;
