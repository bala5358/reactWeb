import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  CardHeader,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import HeaderCard from "../Common/Component/HeaderCard";
import TaskListComponent from "./TaskListComponent";
import { Btn, H5 } from "../../AbstractElements";
import { useForm } from "react-hook-form";
import { CustomStyles, Username } from "../../Constant";
import DatePicker from "react-datepicker";
import Select from "react-select";

const statusOptions = [
  { value: "Assigned", label: "Assigned" },
  { value: "In Progress", label: "In Progress" },
  { value: "Completed", label: "Completed" },
];

const PriorityOptions = [
  { value: "High", label: "High" },
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "Urgent", label: "Urgent" },
];

const SurveyboothOptions = [
  { value: "Booth 17 - Zone A", label: "Booth 17 - Zone A" },
  { value: "Booth 12 - Zone B", label: "Booth 12 - Zone B" },
];

const Tasklist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showform, setShowform] = useState(false);
  const [startDate, setstartDate] = useState(new Date());
  const toggleform = () => {
    setShowform(!showform);
  };

  const handleChange = (date) => {
    setstartDate(date);
  };

  const onSubmit = () => {
    alert("You submitted the form and stuff!");
    toggleform();
  };

  return (
    <div>
      <Fragment>
        <h3 class="p-3">Task List</h3>
        <div class="d-flex justify-content-end mt-3 mb-5">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={toggleform}
          >
            + Add Task
          </button>
        </div>

        {showform && (
          <div
            className="position-fixed top-50 start-50 translate-middle p-4 border rounded bg-white shadow"
            style={{ zIndex: 1000, width: "80%", maxWidth: "900px" }}
          >
            <H5 className="mb-4">Add Task</H5>

            <button
              className="btn btn-link position-absolute top-0 end-0 m-2 p-0 text-dark"
              onClick={toggleform}
              aria-label="Close"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="fa fa-times"></i>
            </button>

            <Form
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Row 1 */}
              <Row className="mb-4">
                <Col md="4">
                  <Label className="form-label" htmlFor="validationCustom01">
                    Agent Name / ID
                  </Label>
                  <input
                    className="form-control"
                    id="validationCustom01"
                    type="text"
                    placeholder="Mark"
                    name="fName"
                  />
                  <div className="valid-feedback">Looks good!</div>
                </Col>

                <Col md="4">
                  <Label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Assign Date
                  </Label>
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={handleChange}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </Col>

                <Col md="4">
                  <Label htmlFor="priority" className="form-label">
                    Priority
                  </Label>
                  <Select
                    options={PriorityOptions}
                    className="js-example-basic-single col-sm-12"
                  />
                </Col>
              </Row>

              {/* Row 2 */}
              <Row className="mb-4">
                <Col md="6">
                  <Label htmlFor="surveyStatus" className="form-label">
                    Survey Status
                  </Label>
                  <Select
                    options={statusOptions}
                    className="js-example-basic-single col-sm-12"
                  />
                  <div className="invalid-feedback">
                    Please provide a Status.
                  </div>
                </Col>

                <Col md="6">
                  <Label className="form-label" htmlFor="assignedSurvey">
                    Assigned Survey / Booth
                  </Label>
                  <Select
                    options={SurveyboothOptions}
                    className="js-example-basic-single col-sm-12"
                  />
                </Col>
              </Row>

              {/* Row 3 */}
              <Row className="mb-4">
                <Col md="12">
                  <Label className="form-label" htmlFor="validationCustom05">
                    Remarks / Notes
                  </Label>
                  <Input type="textarea" className="form-control" rows="3" />
                </Col>
              </Row>

              {/* Submit */}
              <div className="d-flex justify-content-end">
                <Btn attrBtn={{ color: "primary" }}>Assign Task</Btn>
              </div>
            </Form>
          </div>
        )}

        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <HeaderCard title="Select Multiple and Delete Single Data" />
                <CardBody>
                  <TaskListComponent />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default Tasklist;
