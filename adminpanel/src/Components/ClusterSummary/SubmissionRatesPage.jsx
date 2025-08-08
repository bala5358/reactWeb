import React, { Fragment, useEffect, useState } from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Progress,
  Row,
  Button,
  Input,
} from 'reactstrap';
import { H3 } from '../../AbstractElements';
import { fetchClusterSummary } from '../../api/clusterApi';

const SubmissionRatesTable = () => {
  const [booths, setBooths] = useState([]);
  const [filteredBooths, setFilteredBooths] = useState([]);
  const [viewMode, setViewMode] = useState('table'); // table | card
  const [constituencies, setConstituencies] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('All');

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchClusterSummary();
      setBooths(res);

      const uniqueConstituencies = [
        'All',
        ...new Set(res.map((b) => b.constituency || 'Unknown')),
      ];
      setConstituencies(uniqueConstituencies);
      setFilteredBooths(res);
    };
    loadData();
  }, []);

  const getTotal = (sub) =>
    (sub.voter || 0) + (sub.turnout || 0) + (sub.survey || 0);

  const getRate = (sub, target) => {
    const total = getTotal(sub);
    return target > 0 ? Math.min(100, Math.round((total / target) * 100)) : 0;
  };

  const getColor = (pct) => {
    if (pct >= 90) return 'success';
    if (pct >= 60) return 'warning';
    return 'danger';
  };

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setSelectedConstituency(selected);

    if (selected === 'All') {
      setFilteredBooths(booths);
    } else {
      const filtered = booths.filter((b) => b.constituency === selected);
      setFilteredBooths(filtered);
    }
  };

  const handleDownloadCSV = () => {
    const headers = [
      'Booth Name',
      'Constituency',
      'Target',
      'Voter',
      'Turnout',
      'Survey',
      'Total',
      'Completion (%)',
    ];
    const rows = filteredBooths.map((b) => {
      const total = getTotal(b.submissions);
      const pct = getRate(b.submissions, b.target);
      return [
        `"${b.booth_name}"`,
        `"${b.constituency}"`,
        b.target,
        b.submissions.voter || 0,
        b.submissions.turnout || 0,
        b.submissions.survey || 0,
        total,
        `${pct}%`,
      ].join(',');
    });
    const csvContent =
      'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `submission_rates_${selectedConstituency.toLowerCase()}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <H3>📈 Submission Rates</H3>

            <div className="d-flex gap-2">
              <Input
                type="select"
                size="sm"
                value={selectedConstituency}
                onChange={handleFilterChange}
              >
                {constituencies.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </Input>

              <Button
                color="primary"
                size="sm"
                onClick={() =>
                  setViewMode(viewMode === 'table' ? 'card' : 'table')
                }
              >
                Switch to {viewMode === 'table' ? 'Cards View' : 'Table View'}
              </Button>

              <Button color="success" size="sm" onClick={handleDownloadCSV}>
                💾 Download
              </Button>
            </div>
          </CardHeader>

          <CardBody>
            {viewMode === 'table' ? (
              <div className="table-responsive">
                <Table className="table-hover table-border-horizontal align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Booth Name</th>
                      <th>Constituency</th>
                      <th>Target</th>
                      <th>Total Submissions</th>
                      <th>Completion %</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBooths.map((booth, idx) => {
                      const total = getTotal(booth.submissions);
                      const rate = getRate(booth.submissions, booth.target);
                      return (
                        <tr key={idx}>
                          <th scope="row">{idx + 1}</th>
                          <td>{booth.booth_name}</td>
                          <td>{booth.constituency || 'N/A'}</td>
                          <td>{booth.target}</td>
                          <td>{total}</td>
                          <td>{rate}%</td>
                          <td>
                            <Progress
                              value={rate}
                              color={getColor(rate)}
                              style={{ height: '8px' }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              <Row className="g-4">
                {filteredBooths.map((booth, idx) => {
                  const total = getTotal(booth.submissions);
                  const rate = getRate(booth.submissions, booth.target);
                  const color = getColor(rate);
                  return (
                    <Col md="6" lg="4" key={idx}>
                      <Card className="shadow-sm h-100 border">
                        <CardBody>
                          <h5>{booth.booth_name}</h5>
                          <p className="mb-1">
                            🏛 Constituency: {booth.constituency}
                          </p>
                          <p className="mb-1">🎯 Target: {booth.target}</p>
                          <p className="mb-1">📦 Total: {total}</p>
                          <Progress value={rate} color={color} className="mb-2" />
                          <small className="text-muted">{rate}% Completed</small>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            )}
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SubmissionRatesTable;
