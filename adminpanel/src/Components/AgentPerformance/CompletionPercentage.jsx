import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Input,
  Progress,
  Table,
  Button,
  Row
} from 'reactstrap';
import { H3 } from '../../AbstractElements';
import { CSVLink } from 'react-csv';

// Mock API
const fetchCompletionData = async () => {
  return [
    {
      agent_name: "Ravi Kumar",
      constituency: "Gandhi Nagar",
      assigned_target: 30,
      submissions: { voter: 12, turnout: 8, survey: 4 }
    },
    {
      agent_name: "Sita Devi",
      constituency: "West Zone",
      assigned_target: 25,
      submissions: { voter: 5, turnout: 2, survey: 1 }
    },
    {
      agent_name: "Anil",
      constituency: "North Hills",
      assigned_target: 20,
      submissions: { voter: 15, turnout: 5, survey: 2 }
    }
  ];
};

const CompletionPercentage = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('All');
  const [agentSearch, setAgentSearch] = useState('');
  const [constituencies, setConstituencies] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchCompletionData();
      setData(res);
      setFiltered(res);
      const unique = ['All', ...new Set(res.map(r => r.constituency))];
      setConstituencies(unique);
    };
    loadData();
  }, []);

  useEffect(() => {
    let result = [...data];

    if (selectedConstituency !== 'All') {
      result = result.filter(r => r.constituency === selectedConstituency);
    }

    if (agentSearch.trim() !== '') {
      result = result.filter(r =>
        r.agent_name.toLowerCase().includes(agentSearch.toLowerCase())
      );
    }

    setFiltered(result);
  }, [selectedConstituency, agentSearch, data]);

  const getTotal = (sub) =>
    (sub.voter || 0) + (sub.turnout || 0) + (sub.survey || 0);

  const getPercentage = (sub, target) => {
    const total = getTotal(sub);
    return target > 0 ? Math.round((total / target) * 100) : 0;
  };

  const getColor = (pct) => {
    if (pct >= 90) return 'success';
    if (pct >= 60) return 'warning';
    return 'danger';
  };

  // Summary calculations
  const averagePct = Math.round(
    filtered.reduce((sum, item) => sum + getPercentage(item.submissions, item.assigned_target), 0) /
    (filtered.length || 1)
  );

  const bestPerformer = [...filtered].sort(
    (a, b) => getPercentage(b.submissions, b.assigned_target) - getPercentage(a.submissions, a.assigned_target)
  )[0];

  const lowPerformers = filtered.filter(
    (item) => getPercentage(item.submissions, item.assigned_target) < 60
  );

  // CSV
  const csvData = filtered.map((item) => ({
    Agent: item.agent_name,
    Constituency: item.constituency,
    Target: item.assigned_target,
    Voter: item.submissions.voter,
    Turnout: item.submissions.turnout,
    Survey: item.submissions.survey,
    Total: getTotal(item.submissions),
    Completion: `${getPercentage(item.submissions, item.assigned_target)}%`,
  }));

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <H3>🎯 Completion Percentage</H3>
          <div className="d-flex gap-2 flex-wrap">
            <Input
              type="select"
              value={selectedConstituency}
              onChange={(e) => setSelectedConstituency(e.target.value)}
              style={{ maxWidth: '180px' }}
            >
              {constituencies.map((c, idx) => (
                <option key={idx}>{c}</option>
              ))}
            </Input>
            <Input
              type="text"
              placeholder="Search Agent"
              value={agentSearch}
              onChange={(e) => setAgentSearch(e.target.value)}
              style={{ maxWidth: '200px' }}
            />
            <CSVLink
              data={csvData}
              filename="completion_percentage.csv"
              className="btn btn-outline-primary"
            >
              📤 Download CSV
            </CSVLink>
          </div>
        </CardHeader>

        <CardBody>
          {/* Summary Card */}
          <Row className="mb-4">
            <Col md={4}>
              <div className="bg-light p-3 rounded shadow-sm">
                <h6 className="text-muted mb-1">📊 Average Completion</h6>
                {/* <h4 className="mb-0">{averagePct}%</h4> */}
                <span className="text-success small">
                    {averagePct}%
                </span>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-light p-3 rounded shadow-sm">
                <h6 className="text-muted mb-1">🏆 Best Performer</h6>
                {/* <h5 className="mb-0">{bestPerformer?.agent_name || '-'}</h5> */}
                <span className="text-success small">
                  {bestPerformer?.agent_name || '-'} {getPercentage(bestPerformer?.submissions || {}, bestPerformer?.assigned_target || 1)}%
                </span>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-light p-3 rounded shadow-sm">
                <h6 className="text-muted mb-1">🔔 Low Performers</h6>
                {lowPerformers.length === 0 ? (
                  <span className="text-success">None 🎉</span>
                ) : (
                  <ul className="mb-0 ps-3 small text-danger">
                    {lowPerformers.map((a, i) => (
                      <li key={i}>{a.agent_name} ({getPercentage(a.submissions, a.assigned_target)}%)</li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
          </Row>

          {/* Table */}
          <div className="table-responsive">
            <Table className="table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Agent</th>
                  <th>Constituency</th>
                  <th>Target</th>
                  <th>Total</th>
                  <th>Completion %</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      No data found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((item, idx) => {
                    const total = getTotal(item.submissions);
                    const pct = getPercentage(item.submissions, item.assigned_target);
                    const color = getColor(pct);

                    return (
                      <tr key={idx}>
                        <th scope="row">{idx + 1}</th>
                        <td>{item.agent_name}</td>
                        <td>{item.constituency}</td>
                        <td>{item.assigned_target}</td>
                        <td>{total}</td>
                        <td style={{ width: '25%' }}>
                          <Progress value={pct} color={color}>
                            {pct}%
                          </Progress>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CompletionPercentage;
