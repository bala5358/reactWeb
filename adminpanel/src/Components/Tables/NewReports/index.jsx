import React, { Fragment, useContext } from 'react';
import { Breadcrumbs, Btn } from '../../../AbstractElements';
import { Add, Cancel } from '../../../Constant';
import { useNavigate, Link } from 'react-router-dom';
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
  Input,
} from 'reactstrap';
import CustomizerContext from '../../../_helper/Customizer';

const NewReport = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddReport = (data) => {
    console.log('📤 Submitting Report:', data);
    // TODO: Submit to backend
    history(`${process.env.PUBLIC_URL}/app/project/project-list/${layoutURL}`);
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Report" title="New Complaint" mainTitle="File a Complaint" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(AddReport)}>
                  <FormGroup>
                    <Label>Report Title</Label>
                    <Input
                      type="text"
                      {...register('title', { required: true })}
                      placeholder="Enter report title"
                    />
                    {errors.title && <span className="text-danger">Title is required</span>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Candidate Name</Label>
                    <Input
                      type="text"
                      {...register('candidateName', { required: true })}
                      placeholder="Enter candidate name"
                    />
                    {errors.candidateName && <span className="text-danger">Candidate name is required</span>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Agent Name</Label>
                    <Input
                      type="text"
                      {...register('agentName', { required: true })}
                      placeholder="Enter agent name"
                    />
                    {errors.agentName && <span className="text-danger">Agent name is required</span>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Constitution</Label>
                    <Input
                      type="text"
                      {...register('constitution', { required: true })}
                      placeholder="Enter constitution name or ID"
                    />
                    {errors.constitution && <span className="text-danger">Constitution is required</span>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Complaint Description</Label>
                    <Input
                      type="textarea"
                      rows="4"
                      {...register('description', { required: true })}
                      placeholder="Describe the issue in detail"
                    />
                    {errors.description && <span className="text-danger">Description is required</span>}
                  </FormGroup>

                  <FormGroup>
                    <Label>Evidence Upload</Label>
                    <Input type="file" {...register('evidence')} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Date of Incident</Label>
                    <Input type="date" {...register('incidentDate', { required: true })} />
                    {errors.incidentDate && <span className="text-danger">Date is required</span>}
                  </FormGroup>

                  <Row>
                    <Col>
                      <div className="text-end">
                        <Btn attrBtn={{ color: 'success', className: 'me-3' }}>{Add}</Btn>
                        <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                          <Btn attrBtn={{ color: 'danger' }}>{Cancel}</Btn>
                        </Link>
                      </div>
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

export default NewReport;
