import React, { Fragment, useState } from "react";
import {
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  InputGroup,
  Row,
  FormGroup,
} from "reactstrap";
import HeaderCard from "../Common/Component/HeaderCard";
import { Btn } from "../../AbstractElements";
import { SubmitForm } from "../../Constant";
import DatePicker from "react-datepicker";

const SurveyresponseForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [hasIssue, setHasIssue] = useState("");
  const [syncLater, setSyncLater] = useState(false);

  return (
    <div>
      <Fragment>
        <h3 className="p-3">Add Response</h3>
        <Card>
          <CardBody>
            <Form>
              <Row>
                <Col md="4" className="mb-3">
                  <Label htmlFor="agentName">Agent Name / ID</Label>
                  <Input
                    id="agentName"
                    type="text"
                    placeholder="Agent name"
                    required
                  />
                </Col>
                <Col md="4" className="mb-3">
                  <Label htmlFor="boothId">Booth ID / Survey ID</Label>
                  <Input
                    id="boothId"
                    type="text"
                    placeholder="Booth ID / Survey ID"
                    required
                  />
                </Col>
                <Col md="4" className="mb-3">
                  <Label htmlFor="location">Location / Area Name</Label>
                  <InputGroup>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Location"
                      required
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6" className="mb-3">
                  <Label htmlFor="voterCount">Voter Turnout Count</Label>
                  <Input
                    id="voterCount"
                    type="number"
                    placeholder="Count"
                    required
                  />
                </Col>

                <Col md="6" className="mb-3">
                  <Label>Any Issues at Booth?</Label>
                  <div className="d-flex gap-3">
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="hasIssue"
                        value="yes"
                        checked={hasIssue === "yes"}
                        onChange={() => setHasIssue("yes")}
                      />{" "}
                      <Label check>Yes</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="hasIssue"
                        value="no"
                        checked={hasIssue === "no"}
                        onChange={() => setHasIssue("no")}
                      />{" "}
                      <Label check>No</Label>
                    </FormGroup>
                  </div>
                </Col>
              </Row>

              {hasIssue === "yes" && (
                <Row>
                  <Col md="12" className="mb-3">
                    <Label htmlFor="issueDescription">Describe the Issue</Label>
                    <Input
                      id="issueDescription"
                      type="textarea"
                      placeholder="Type here..."
                      rows="3"
                      required
                    />
                  </Col>
                </Row>
              )}

              <Row>
                <Col md="6" className="mb-3">
                  <Label>Time of Visit</Label>
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </Col>

                <Col md="6" className="mb-3 d-flex align-items-center">
                  <FormGroup check className="mt-4">
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={syncLater}
                        onChange={() => setSyncLater(!syncLater)}
                      />{" "}
                      Sync Later (Offline Mode)
                    </Label>
                  </FormGroup>
                </Col>
              </Row>

              <div className="d-flex justify-content-end">
                <Btn attrBtn={{ color: "primary", type: "submit" }}>
                  {SubmitForm}
                </Btn>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Fragment>
    </div>
  );
};

export default SurveyresponseForm;
