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

const AddConstitutions = () => {
  const navigate = useNavigate();
  const [clusters, setClusters] = useState([]);
  const [constituencies, setConstituencies] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // TODO: Replace with API call
    setClusters([
      { id: 'cluster1', name: 'North Cluster' },
      { id: 'cluster2', name: 'South Cluster' },
      { id: 'cluster3', name: 'East Cluster' },
      { id: 'cluster4', name: 'West Cluster' },
    ]);

    setConstituencies([
      { id: 'c1', name: 'Central Constituency' },
      { id: 'c2', name: 'Hill Constituency' },
    ]);
  }, []);

  const onSubmit = (data) => {
    console.log('✅ Constituency Head Data:', data);
    // TODO: Submit to backend via POST API
    navigate(`${process.env.PUBLIC_URL}/admin/constituency-heads`);
  };

  return (
    <Fragment>
      <Breadcrumbs
        parent="Admin"
        title="Add Constituency Head"
        mainTitle="Assign Constituency Head"
      />
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
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="text"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="Enter contact number"
                    />
                    {errors.phone && (
                      <p className="text-danger">{errors.phone.message}</p>
                    )}
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
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Assign Constituency</Label>
                    <Input
                      type="select"
                      {...register('constituencyId', {
                        required: 'Please select a constituency',
                      })}
                    >
                      <option value="">-- Select Constituency --</option>
                      {constituencies.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </Input>
                    {errors.constituencyId && (
                      <p className="text-danger">{errors.constituencyId.message}</p>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Assign Cluster Supervisors</Label>
                    <Input
                      type="select"
                      multiple
                      {...register('clusterSupervisors', {
                        required: 'Please select at least one cluster',
                      })}
                    >
                      {clusters.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </Input>
                    {errors.clusterSupervisors && (
                      <p className="text-danger">{errors.clusterSupervisors.message}</p>
                    )}
                  </FormGroup>

                  <Row>
                    <Col className="text-end">
                      <Btn attrBtn={{ color: 'primary', className: 'me-3' }}>{Add}</Btn>
                      <Link to={`${process.env.PUBLIC_URL}/admin/constituency-heads`}>
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

export default AddConstitutions;
