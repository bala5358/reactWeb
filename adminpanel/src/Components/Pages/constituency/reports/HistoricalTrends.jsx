import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Button,
  Input,
  FormGroup,
  Label,
  Table,
} from "reactstrap";
import { Line } from "react-chartjs-2";

const HistoricalTrends = () => {
  const [timeRange, setTimeRange] = useState("5years");
  const [electionType, setElectionType] = useState("general");
  const [party, setParty] = useState("bjp");

  // Simulated party performance data ranges
  const partyRanges = {
    bjp: [55, 80],
    tvk: [45, 70],
    dmk: [50, 75],
    aiadmk: [48, 73],
  };

  const generateData = () => {
    const labels = [];
    const data1 = [];
    const data2 = [];

    let startYear, endYear;
    if (timeRange === "5years") {
      startYear = 2018;
      endYear = 2023;
    } else if (timeRange === "10years") {
      startYear = 2013;
      endYear = 2023;
    } else {
      startYear = 2003;
      endYear = 2023;
    }

    const [min, max] = partyRanges[party] || [50, 80];

    for (let year = startYear; year <= endYear; year++) {
      labels.push(year.toString());
      data1.push(Math.floor(Math.random() * (max - min)) + min); // National
      data2.push(Math.floor(Math.random() * (max - min)) + min); // Party in this constituency
    }

    return {
      labels,
      datasets: [
        {
          label: "National Average",
          data: data1,
          borderColor: "#36A2EB",
          backgroundColor: "rgba(54, 162, 235, 0.1)",
          tension: 0.3,
          fill: true,
        },
        {
          label: `${party.toUpperCase()} - This Constituency`,
          data: data2,
          borderColor: "#FF6384",
          backgroundColor: "rgba(255, 99, 132, 0.1)",
          tension: 0.3,
          fill: true,
        },
      ],
    };
  };

  return (
    <Fragment>
      <Breadcrumbs
        parent="Pages"
        title="Historical Voting Trends"
        mainTitle="Historical Voting Trends"
      />
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                  <FormGroup className="mb-2 mb-md-0 mr-md-3">
                    <Label for="partySelect" className="mr-2">
                      Party:
                    </Label>
                    <Input
                      type="select"
                      id="partySelect"
                      value={party}
                      onChange={(e) => setParty(e.target.value)}
                    >
                      <option value="bjp">BJP</option>
                      <option value="tvk">TVK</option>
                      <option value="dmk">DMK</option>
                      <option value="aiadmk">AIADMK</option>
                    </Input>
                  </FormGroup>
                </div>

                <div className="d-flex flex-column flex-md-row mt-2 mt-md-0">
                  <ButtonGroup className="mr-md-3 mb-2 mb-md-0">
                    <Button
                      color={timeRange === "5years" ? "primary" : "secondary"}
                      onClick={() => setTimeRange("5years")}
                    >
                      5 Years
                    </Button>
                    <Button
                      color={timeRange === "10years" ? "primary" : "secondary"}
                      onClick={() => setTimeRange("10years")}
                    >
                      10 Years
                    </Button>
                    <Button
                      color={timeRange === "20years" ? "primary" : "secondary"}
                      onClick={() => setTimeRange("20years")}
                    >
                      20 Years
                    </Button>
                  </ButtonGroup>
                  {/* <FormGroup className="mb-0">
                    <Label for="electionType" className="sr-only">
                      Election Type
                    </Label>
               <Input
  type="select"
  id="electionType"
  value={electionType}
  onChange={(e) => setElectionType(e.target.value)}
>
  <option value="parliament">Parliament Election</option>
  <option value="assembly">Assembly Election</option>
</Input>

                  </FormGroup> */}
                </div>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col>
                    <div style={{ height: "400px" }}>
                      <Line
                        data={generateData()}
                        options={{
                          maintainAspectRatio: false,
                          responsive: true,
                          plugins: {
                            title: {
                              display: true,
                              text: `Voter Turnout - ${party.toUpperCase()}`,
                            },
                          },
                          scales: {
                            y: {
                              beginAtZero: false,
                              min: 40,
                              max: 90,
                              title: {
                                display: true,
                                text: "Turnout Percentage",
                              },
                            },
                            x: {
                              title: {
                                display: true,
                                text: "Year",
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md="6">
                    <Card>
                      <CardHeader>
                        <h5>Key Observations</h5>
                      </CardHeader>
                      <CardBody>
                        <ul>
                          <li>
                            {party.toUpperCase()} turnout trends updated per
                            selection.
                          </li>
                          <li>
                            This constituency performance vs national average
                            shown above.
                          </li>
                          <li>Data dynamically changes for time range.</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card>
                      <CardHeader>
                        <h5>Comparative Analysis</h5>
                      </CardHeader>
                      <CardBody>
                        <Table>
                          <thead>
                            <tr>
                              <th>Year</th>
                              <th>National</th>
                              <th>{party.toUpperCase()}</th>
                              <th>Difference</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[2023, 2020, 2017, 2014].map((year) => {
                              const [min, max] = partyRanges[party];
                              const national =
                                Math.floor(Math.random() * 10) + 60;
                              const local =
                                Math.floor(Math.random() * (max - min)) + min;
                              return (
                                <tr key={year}>
                                  <td>{year}</td>
                                  <td>{national}%</td>
                                  <td>{local}%</td>
                                  <td
                                    className={
                                      local > national
                                        ? "text-success"
                                        : "text-danger"
                                    }
                                  >
                                    {local > national ? "+" : ""}
                                    {local - national}%
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HistoricalTrends;
