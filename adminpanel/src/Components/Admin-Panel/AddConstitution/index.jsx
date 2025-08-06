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

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [constituencies, setConstituencies] = useState([]);

  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    setStates([
      { id: 'tn', name: 'Tamil Nadu' },
      { id: 'kl', name: 'Kerala' },
      { id: 'ap', name: 'Andhra Pradesh' },
    ]);
  }, []);

  useEffect(() => {
    if (selectedState === 'tn') {
      setDistricts([
        { id: 'chn', name: 'Chennai' },
        { id: 'coi', name: 'Coimbatore' },
      ]);
    } else if (selectedState === 'kl') {
      setDistricts([
        { id: 'tvm', name: 'Thiruvananthapuram' },
        { id: 'ekm', name: 'Ernakulam' },
      ]);
    } else if (selectedState === 'ap') {
      setDistricts([
        { id: 'vij', name: 'Vijayawada' },
        { id: 'viz', name: 'Visakhapatnam' },
      ]);
    } else {
      setDistricts([]);
    }

    setSelectedDistrict('');
    setConstituencies([]);
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict === 'chn') {
      setConstituencies([
        { id: 'chn1', name: 'Chennai North' },
        { id: 'chn2', name: 'Chennai South' },
      ]);
    } else if (selectedDistrict === 'coi') {
      setConstituencies([
        { id: 'coi1', name: 'Coimbatore Central' },
        { id: 'coi2', name: 'Coimbatore East' },
      ]);
    } else if (selectedDistrict === 'tvm') {
      setConstituencies([
        { id: 'tvm1', name: 'Trivandrum North' },
        { id: 'tvm2', name: 'Trivandrum South' },
      ]);
    } else if (selectedDistrict === 'ekm') {
      setConstituencies([
        { id: 'ekm1', name: 'Ernakulam Urban' },
        { id: 'ekm2', name: 'Ernakulam Rural' },
      ]);
    } else if (selectedDistrict === 'vij') {
      setConstituencies([
        { id: 'vij1', name: 'Vijayawada West' },
        { id: 'vij2', name: 'Vijayawada East' },
      ]);
    } else if (selectedDistrict === 'viz') {
      setConstituencies([
        { id: 'viz1', name: 'Vizag Urban' },
        { id: 'viz2', name: 'Vizag Rural' },
      ]);
    } else {
      setConstituencies([]);
    }
  }, [selectedDistrict]);

  const onSubmit = (data) => {
    console.log('✅ Submitted Data:', data);
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
                  <Row>
                    {/* Full Name */}
                    <Col sm="6">
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
                    </Col>
 {/* State */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>State</Label>
                        <Input
                          type="select"
                          {...register('stateId', { required: 'State is required' })}
                          onChange={(e) => setSelectedState(e.target.value)}
                        >
                          <option value="">-- Select State --</option>
                          {states.map((state) => (
                            <option key={state.id} value={state.id}>
                              {state.name}
                            </option>
                          ))}
                        </Input>
                        {errors.stateId && (
                          <p className="text-danger">{errors.stateId.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* District */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>District</Label>
                        <Input
                          type="select"
                          {...register('districtId', { required: 'District is required' })}
                          onChange={(e) => setSelectedDistrict(e.target.value)}
                          disabled={!selectedState}
                        >
                          <option value="">-- Select District --</option>
                          {districts.map((district) => (
                            <option key={district.id} value={district.id}>
                              {district.name}
                            </option>
                          ))}
                        </Input>
                        {errors.districtId && (
                          <p className="text-danger">{errors.districtId.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* Constituency */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Constituency</Label>
                        <Input
                          type="select"
                          {...register('constituencyId', {
                            required: 'Please select a constituency',
                          })}
                          disabled={!selectedDistrict}
                        >
                          <option value="">-- Select Constituency --</option>
                          {constituencies.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </Input>
                        {errors.constituencyId && (
                          <p className="text-danger">
                            {errors.constituencyId.message}
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                    {/* Phone Number */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Phone Number</Label>
                        <Input
                          type="text"
                          {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Phone number must be 10 digits',
                            },
                          })}
                          placeholder="Enter contact number"
                        />
                        {errors.phone && (
                          <p className="text-danger">{errors.phone.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* Alternate Phone Number */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Alternate Phone</Label>
                        <Input
                          type="text"
                          {...register('altPhone', {
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Phone number must be 10 digits',
                            },
                          })}
                          placeholder="Enter alternate phone number"
                        />
                        {errors.altPhone && (
                          <p className="text-danger">{errors.altPhone.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* Email */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                          })}
                          placeholder="Enter email"
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* Confirm Email */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Confirm Email</Label>
                        <Input
                          type="email"
                          {...register('confirmEmail', {
                            validate: (value) =>
                              value === email || 'Emails do not match',
                          })}
                          placeholder="Re-enter email"
                        />
                        {errors.confirmEmail && (
                          <p className="text-danger">{errors.confirmEmail.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* Password */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Password</Label>
                        <Input
                          type="password"
                          {...register('password', {
                            required: 'Password is required',
                          })}
                          placeholder="Set agent password"
                        />
                        {errors.password && (
                          <p className="text-danger">{errors.password.message}</p>
                        )}
                      </FormGroup>
                    </Col>

                    {/* Confirm Password */}
                    <Col sm="6">
                      <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          {...register('confirmPassword', {
                            validate: (value) =>
                              value === password || 'Passwords do not match',
                          })}
                          placeholder="Re-enter password"
                        />
                        {errors.confirmPassword && (
                          <p className="text-danger">
                            {errors.confirmPassword.message}
                          </p>
                        )}
                      </FormGroup>
                    </Col>

                   
                  </Row>

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
