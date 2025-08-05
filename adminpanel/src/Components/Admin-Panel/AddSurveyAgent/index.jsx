import React, { Fragment, useEffect, useState } from 'react';
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

const AddSurveyAgent = () => {
  const navigate = useNavigate();
  const [boothAgents, setBoothAgents] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 🟡 Fetch all booth agents
  useEffect(() => {
    // TODO: Replace with real API call to fetch booth agents
    setBoothAgents([
      { id: 'ba1', name: 'Ravi Kumar' },
      { id: 'ba2', name: 'Sunita Devi' },
      { id: 'ba3', name: 'Amit Singh' },
      { id: 'ba4', name: 'Pooja Mehra' },
      { id: 'ba5', name: 'Mohit Reddy' },
      { id: 'ba6', name: 'Farhan Khan' },
      { id: 'ba7', name: 'Anjali Sharma' },
      { id: 'ba8', name: 'Naveen Patil' },
      { id: 'ba9', name: 'Neha Joshi' },
      { id: 'ba10', name: 'Kiran Das' },
      { id: 'ba11', name: 'Alok Bansal' }, // extra
    ]);
  }, []);

  const onSubmit = (data) => {
    console.log('✅ Survey Agent Data:', data);
    // TODO: POST this data to your backend API
    navigate(`${process.env.PUBLIC_URL}/admin/survey-agents`);
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Admin" title="Add Survey Agent" mainTitle="Assign Survey Agent" />
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
                    <Label>Email</Label>
                    <Input
                      type="email"
                      {...register('email')}
                      placeholder="Enter email"
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
                    <Label>Assign Booth Agents (max 10)</Label>
                    <Input
                      type="select"
                      multiple
                      {...register('boothAgents', {
                        validate: (value) =>
                          value.length > 0 && value.length <= 10 || 'Select up to 10 booth agents',
                      })}
                    >
                      {boothAgents.map((agent) => (
                        <option key={agent.id} value={agent.id}>
                          {agent.name}
                        </option>
                      ))}
                    </Input>
                    {errors.boothAgents && <p className="text-danger">{errors.boothAgents.message}</p>}
                  </FormGroup>

                  <Row>
                    <Col className="text-end">
                      <Btn attrBtn={{ color: 'primary', className: 'me-3' }}>{Add}</Btn>
                      <Link to={`${process.env.PUBLIC_URL}/admin/survey-agents`}>
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

export default AddSurveyAgent;
