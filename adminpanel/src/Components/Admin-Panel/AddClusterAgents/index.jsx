import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumbs, Btn } from '../../../AbstractElements';
import { Add, Cancel } from '../../../Constant';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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

const AddClusterAgents = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [constitutions, setConstitutions] = useState([]);
  const [selectedBooths, setSelectedBooths] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    data.booths = selectedBooths;
    console.log('✅ Final Data:', data);
    // TODO: send to backend
    navigate(`${process.env.PUBLIC_URL}/admin/survey-agents`);
  };

  useEffect(() => {
    // mock API calls
    setStates(['Tamil Nadu', 'Kerala']);
  }, []);

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setValue('state', selected);
    setDistricts(selected === 'Tamil Nadu' ? ['Coimbatore', 'Chennai'] : ['Kochi', 'Trivandrum']);
    setConstitutions([]); // reset
    setValue('district', '');
    setValue('constitution', '');
  };

  const handleDistrictChange = (e) => {
    const selected = e.target.value;
    setValue('district', selected);
    setConstitutions(selected === 'Coimbatore' ? ['Singanallur', 'Gandhipuram'] : ['Default']);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'boothIncharges',
  });

 const openBoothModal = () => {
  const totalBooths = 200;
  const boothElements = Array.from({ length: totalBooths }, (_, i) => i + 1);

  let tempSelected = [...selectedBooths]; // temp copy for modal
  let errorMessage = '';

  const modal = MySwal.fire({
    title: 'Select Booths (max 10)',
    html: document.createElement('div'), // placeholder, updated below
    didOpen: () => {
      const content = Swal.getHtmlContainer();
      const container = document.createElement('div');
      container.style.maxHeight = '60vh';
      container.style.overflowY = 'auto';
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
      container.style.justifyContent = 'flex-start';
      container.style.padding = '10px';

      boothElements.forEach((num) => {
        const boothBox = document.createElement('div');
        boothBox.innerText = num;
        boothBox.style.flex = '0 1 calc(12.5% - 8px)';
        boothBox.style.minWidth = '48px';
        boothBox.style.maxWidth = '80px';
        boothBox.style.aspectRatio = '1';
        boothBox.style.margin = '4px';
        boothBox.style.textAlign = 'center';
        boothBox.style.fontSize = '16px';
        boothBox.style.fontWeight = '500';
        boothBox.style.borderRadius = '6px';
        boothBox.style.border = '1px solid';
        boothBox.style.cursor = 'pointer';
        boothBox.style.userSelect = 'none';
        boothBox.style.display = 'flex';
        boothBox.style.alignItems = 'center';
        boothBox.style.justifyContent = 'center';
        boothBox.style.transition = '0.2s ease';

        const isSelected = tempSelected.includes(num);
        boothBox.dataset.booth = num;
        boothBox.classList.add('booth-box');

        const setBoothStyle = () => {
          const isSelected = tempSelected.includes(num);
          boothBox.style.backgroundColor = isSelected ? '#d4edda' : '#f8d7da';
          boothBox.style.borderColor = isSelected ? '#218838' : '#dc3545';
        };

        setBoothStyle();

        boothBox.addEventListener('click', () => {
          const index = tempSelected.indexOf(num);
          if (index > -1) {
            tempSelected.splice(index, 1); // unselect
          } else {
            if (tempSelected.length >= 10) {
              Swal.getFooter().innerText = 'You can select only 10 booths';
              return;
            }
            tempSelected.push(num);
            Swal.getFooter().innerText = ''; // clear error
          }

          // Update styles of all boxes
          document.querySelectorAll('.booth-box').forEach((box) => {
            const boothNum = parseInt(box.dataset.booth);
            const selected = tempSelected.includes(boothNum);
            box.style.backgroundColor = selected ? '#d4edda' : '#f8d7da';
            box.style.borderColor = selected ? '#218838' : '#dc3545';
            box.style.pointerEvents = tempSelected.length >= 10 && !selected ? 'none' : 'auto';
            box.style.opacity = tempSelected.length >= 10 && !selected ? '0.5' : '1';
          });
        });

        container.appendChild(boothBox);
      });

      content.appendChild(container);
    },
    footer: '', // space for error message
    showConfirmButton: true,
    confirmButtonText: 'Save Selection',
    customClass: {
      popup: 'booth-modal-popup',
    },
    preConfirm: () => {
      setSelectedBooths(tempSelected);
    },
  });
};


  return (
    <Fragment>
      <Breadcrumbs parent="Admin" title="Add Cluster Agent" mainTitle="Assign Cluster Agent" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Full Name</Label>
                        <Input type="text" {...register('name', { required: 'Name is required' })} />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" {...register('email', { required: 'Email is required' })} />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Confirm Email</Label>
                        <Input
                          type="email"
                          {...register('confirmEmail', {
                            validate: (val) => val === watch('email') || 'Emails do not match',
                          })}
                        />
                        {errors.confirmEmail && <p className="text-danger">{errors.confirmEmail.message}</p>}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" {...register('password', { required: 'Password is required' })} />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          {...register('confirmPassword', {
                            validate: (val) => val === watch('password') || 'Passwords do not match',
                          })}
                        />
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone Number</Label>
                        <Input type="text" {...register('phone', { required: 'Phone is required' })} />
                        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Alternate Phone Number</Label>
                        <Input type="text" {...register('alternatePhone')} />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>State</Label>
                        <Input type="select" onChange={handleStateChange}>
                          <option value="">Select State</option>
                          {states.map((s, idx) => (
                            <option key={idx}>{s}</option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>District</Label>
                        <Input type="select" onChange={handleDistrictChange}>
                          <option value="">Select District</option>
                          {districts.map((d, idx) => (
                            <option key={idx}>{d}</option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                    {constitutions.length > 0 && (
                      <Col md="6">
                        <FormGroup>
                          <Label>Constitution</Label>
                          <Input type="select" {...register('constitution')}>
                            <option value="">Select Constitution</option>
                            {constitutions.map((c, idx) => (
                              <option key={idx}>{c}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    )}
                    <Col md="6">
                      <FormGroup>
                        <Label>Assign Booths</Label>
                        <div>
                          <Btn attrBtn={{ color: 'info', type: 'button', onClick: openBoothModal }}>
                            Select Booths
                          </Btn>
                          <div className="mt-2">
                            {selectedBooths.length > 0 && (
                              <span className="badge bg-success">
                                Selected Booths: {selectedBooths.join(', ')}
                              </span>
                            )}
                          </div>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

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

export default AddClusterAgents;
