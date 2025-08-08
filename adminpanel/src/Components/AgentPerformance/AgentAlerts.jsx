import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Table,
  Input,
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Textarea
} from 'reactstrap';

import { H3 } from '../../AbstractElements';
import dayjs from 'dayjs';

// Mock API
const fetchAgentData = async () => {
  return [
    {
      agent_name: "Ravi Kumar",
      constituency: "Gandhi Nagar",
      assigned_target: 30,
      last_submission_date: "2025-08-05",
      submissions: { voter: 12, turnout: 8, survey: 4 }
    },
    {
      agent_name: "Sita Devi",
      constituency: "West Zone",
      assigned_target: 25,
      last_submission_date: "2025-08-01",
      submissions: { voter: 0, turnout: 0, survey: 0 }
    },
    {
      agent_name: "Anil",
      constituency: "North Hills",
      assigned_target: 20,
      last_submission_date: "2025-08-06",
      submissions: { voter: 5, turnout: 1, survey: 0 }
    }
  ];
};

const AgentAlerts = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('All');
  const [agentSearch, setAgentSearch] = useState('');
  const [constituencies, setConstituencies] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchAgentData();
      setData(res);
      setFiltered(res);
      const unique = ['All', ...new Set(res.map((r) => r.constituency))];
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

  const daysSince = (dateStr) => {
    return dayjs().diff(dayjs(dateStr), 'day');
  };

  const [modalOpen, setModalOpen] = useState(false);
const [selectedAgent, setSelectedAgent] = useState(null);
const [commentText, setCommentText] = useState('');


const openCommentModal = (agent) => {
  setSelectedAgent(agent);
  setCommentText('');
  setModalOpen(true);
};

const handleCommentSubmit = () => {
  alert(`Comment for ${selectedAgent.agent_name}: ${commentText}`);
  // Optionally: Send to backend
  setModalOpen(false);
};


  const getAlerts = (item) => {
    const total = getTotal(item.submissions);
    const pct = getPercentage(item.submissions, item.assigned_target);
    const days = daysSince(item.last_submission_date);
    const alerts = [];

    if (pct < 60) alerts.push('Low %');
    if (total === 0) alerts.push('No Submissions');
    if (days > 2) alerts.push(`Inactive ${days}d`);

    return alerts;
  };

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <H3>🔔 Agent Alerts</H3>
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
    <th>Agent</th>
    <th>Constituency</th>
    <th>Last Submission</th>
    <th>Target</th>
    <th>Total</th>
    <th>Completion %</th>
    <th>Alerts</th>
    <th>Actions</th> {/* New column */}
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
    filtered.map((item, idx) => {
      const total = getTotal(item.submissions);
      const pct = getPercentage(item.submissions, item.assigned_target);
      const alertTags = getAlerts(item);

      return (
        <tr key={idx}>
          <th scope="row">{idx + 1}</th>
          <td>{item.agent_name}</td>
          <td>{item.constituency}</td>
          <td>{item.last_submission_date}</td>
          <td>{item.assigned_target}</td>
          <td>{total}</td>
          <td>{pct}%</td>
          <td>
            {alertTags.length === 0 ? (
              <Badge color="success">✅ OK</Badge>
            ) : (
              alertTags.map((tag, i) => (
                <Badge color="danger" className="me-1" key={i}>
                  {tag}
                </Badge>
              ))
            )}
          </td>
          <td>
            {/* Action buttons */}
            <div className="d-flex gap-1">
              <button
                className="btn btn-sm btn-outline-warning"
                onClick={() => alert(`Reminder sent to ${item.agent_name}`)}
              >
                🔔 Reminder
              </button>
              <button
  className="btn btn-sm btn-outline-primary"
  onClick={() => openCommentModal(item)}
>
  📝 Note
</button>

            </div>
          </td>
        </tr>
      );
    })
  )}
</tbody>
            </Table>
          </div>
        </CardBody>

        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
  <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
    Add Comment for {selectedAgent?.agent_name}
  </ModalHeader>
  <ModalBody>
    <Form>
      <FormGroup>
        <Label for="commentText">Comment</Label>
        <Input
          id="commentText"
          type="textarea"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
          placeholder="Type your comment here..."
        />
      </FormGroup>
    </Form>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={handleCommentSubmit}>
      Submit
    </Button>
    <Button color="secondary" onClick={() => setModalOpen(false)}>
      Cancel
    </Button>
  </ModalFooter>
</Modal>

      </Card>
    </Col>
  );
};

export default AgentAlerts;
