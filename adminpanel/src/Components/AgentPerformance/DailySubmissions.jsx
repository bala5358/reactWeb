import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Input,
  Table,
  Row
} from 'reactstrap';
import { H3 } from '../../AbstractElements';

// Mock API - Replace with real API call
const fetchDailySubmissions = async () => {
  return [
    {
      agent_name: "Ravi Kumar",
      constituency: "Gandhi Nagar",
      booth_name: "Booth 12",
      date: "2025-08-07",
      voter: 10,
      turnout: 5,
      survey: 3
    },
    {
      agent_name: "Sita Devi",
      constituency: "West Zone",
      booth_name: "Booth 15",
      date: "2025-08-07",
      voter: 5,
      turnout: 2,
      survey: 1
    },
    {
      agent_name: "Ravi Kumar",
      constituency: "Gandhi Nagar",
      booth_name: "Booth 12",
      date: "2025-08-06",
      voter: 8,
      turnout: 3,
      survey: 2
    }
  ];
};

const DailySubmissions = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('All');
  const [agentSearch, setAgentSearch] = useState('');
  const [constituencies, setConstituencies] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchDailySubmissions();
      setData(res);
      setFiltered(res);

      const unique = ['All', ...new Set(res.map((r) => r.constituency))];
      setConstituencies(unique);
    };
    loadData();
  }, []);

  useEffect(() => {
    let result = [...data];

    if (selectedDate) {
      result = result.filter((r) => r.date === selectedDate);
    }

    if (selectedConstituency !== 'All') {
      result = result.filter((r) => r.constituency === selectedConstituency);
    }

    if (agentSearch.trim() !== '') {
      result = result.filter((r) =>
        r.agent_name.toLowerCase().includes(agentSearch.toLowerCase())
      );
    }

    setFiltered(result);
  }, [selectedDate, selectedConstituency, agentSearch, data]);

  const getTotal = (item) =>
    (item.voter || 0) + (item.turnout || 0) + (item.survey || 0);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <H3>📅 Daily Submissions</H3>

          <div className="d-flex gap-2">
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ maxWidth: '160px' }}
            />
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
          </div>
        </CardHeader>

        <CardBody>
          <div className="table-responsive">
            <Table className="table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Agent</th>
                  <th>Constituency</th>
                  <th>Booth</th>
                  <th>Voter</th>
                  <th>Turnout</th>
                  <th>Survey</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center text-muted">
                      No records found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((item, idx) => (
                    <tr key={idx}>
                      <th scope="row">{idx + 1}</th>
                      <td>{item.date}</td>
                      <td>{item.agent_name}</td>
                      <td>{item.constituency}</td>
                      <td>{item.booth_name}</td>
                      <td>{item.voter}</td>
                      <td>{item.turnout}</td>
                      <td>{item.survey}</td>
                      <td>{getTotal(item)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DailySubmissions;
