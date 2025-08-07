import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Input,
  Row,
} from 'reactstrap';
import { H3 } from '../../AbstractElements';

// Mock API (replace with real API call)
const fetchAgentActivityLogs = async () => {
  return [
    {
      agent_name: "Ravi Kumar",
      booth_name: "Booth 12 - Gandhi Nagar",
      constituency: "Gandhi Nagar",
      activity_type: "Voter Entry",
      timestamp: "2025-08-07T09:30:00Z",
    },
    {
      agent_name: "Sita Devi",
      booth_name: "Booth 15 - West Town",
      constituency: "West Zone",
      activity_type: "Survey Submission",
      timestamp: "2025-08-07T08:10:00Z",
    },
    {
      agent_name: "Anil",
      booth_name: "Booth 03 - North Heights",
      constituency: "North Hills",
      activity_type: "Turnout Update",
      timestamp: "2025-08-07T07:42:00Z",
    },
  ];
};

const AgentActivityLogs = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('All');
  const [agentSearch, setAgentSearch] = useState('');

  useEffect(() => {
    const loadLogs = async () => {
      const data = await fetchAgentActivityLogs();
      const sorted = data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setLogs(sorted);
      setFilteredLogs(sorted);
      const unique = ['All', ...new Set(data.map((l) => l.constituency))];
      setConstituencies(unique);
    };
    loadLogs();
  }, []);

  useEffect(() => {
    let filtered = logs;

    if (selectedConstituency !== 'All') {
      filtered = filtered.filter((log) => log.constituency === selectedConstituency);
    }

    if (agentSearch.trim() !== '') {
      filtered = filtered.filter((log) =>
        log.agent_name.toLowerCase().includes(agentSearch.toLowerCase())
      );
    }

    setFilteredLogs(filtered);
  }, [selectedConstituency, agentSearch, logs]);

  const formatTime = (ts) => {
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <H3>📋 Agent Activity Timeline</H3>
          <div className="d-flex gap-2">
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
              value={agentSearch}
              onChange={(e) => setAgentSearch(e.target.value)}
              placeholder="Search Agent"
              style={{ maxWidth: '200px' }}
            />
          </div>
        </CardHeader>

        <CardBody>
          {filteredLogs.length === 0 ? (
            <div className="text-center text-muted">No activity logs found.</div>
          ) : (
            <ul className="timeline">
              {filteredLogs.map((log, idx) => (
                <li key={idx} className="timeline-item">
                  <div className="timeline-time">{formatTime(log.timestamp)}</div>
                  <div className="timeline-dot bg-primary" />
                  <div className="timeline-content">
                    <strong>{log.activity_type}</strong>
                    <p className="mb-1 small text-muted">
                      👤 {log.agent_name} | 🏛 {log.constituency} | 🗳 {log.booth_name}
                    </p>
                    <span className="badge bg-light text-dark small">
                      {new Date(log.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardBody>
      </Card>

      <style>
        {`
        .timeline {
          position: relative;
          list-style: none;
          padding-left: 30px;
        }

        .timeline:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 15px;
          width: 2px;
          background: #dee2e6;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-time {
          position: absolute;
          left: -46px;
          font-size: 0.85rem;
          color: #888;
        }

        .timeline-dot {
          position: absolute;
          left: 20px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .timeline-content {
          margin-left: 36px;
          background: #f8f9fa;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        `}
      </style>
    </Col>
  );
};

export default AgentActivityLogs;
