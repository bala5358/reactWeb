import React, { Fragment, useState } from 'react';
import { 
  Col, Card, CardBody, CardHeader, Form, Row, Button, 
  Table, FormGroup, Label, Input, 
  TabContent, TabPane, Nav, NavItem, NavLink 
} from 'reactstrap';
import classnames from 'classnames';

const BoothTeamResourcePage = () => {
  const [activeTab, setActiveTab] = useState('1');

  // Booth Agent form
  const [agentForm, setAgentForm] = useState({ fullName: '', role: 'Booth Agent', phone: '', email: '', status: 'Active' });
  const [agentList, setAgentList] = useState([]);

  // Resource Inventory form
  const [resourceForm, setResourceForm] = useState({ itemName: '', quantity: '', condition: 'New' });
  const [resourceList, setResourceList] = useState([]);

  // Task Assignment form
  const [taskForm, setTaskForm] = useState({ taskName: '', description: '', status: 'Not Started' });
  const [taskList, setTaskList] = useState([]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleAgentSubmit = (e) => {
    e.preventDefault();
    if (!agentForm.fullName.trim()) return; // simple validation
    setAgentList([...agentList, { ...agentForm, id: Date.now() }]);
    setAgentForm({ fullName: '', role: 'Booth Agent', phone: '', email: '', status: 'Active' });
  };

  const handleResourceSubmit = (e) => {
    e.preventDefault();
    if (!resourceForm.itemName.trim()) return;
    setResourceList([...resourceList, { ...resourceForm, id: Date.now() }]);
    setResourceForm({ itemName: '', quantity: '', condition: 'New' });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (!taskForm.taskName.trim()) return;
    setTaskList([...taskList, { ...taskForm, id: Date.now() }]);
    setTaskForm({ taskName: '', description: '', status: 'Not Started' });
  };

  return (
    <Fragment>
      <Col lg="12">
        <Card>
          <CardHeader className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0" style={{ fontSize: '25px', fontWeight: '500' }}>
              BoothTeam and Resource
            </h1>
          </CardHeader>

          <CardBody>
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => toggle('1')}>
                  <strong>1. Booth Agent Team</strong>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => toggle('2')}>
                  <strong>2. Resource Inventory</strong>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => toggle('3')}>
                  <strong>3. Task Assignment & Status</strong>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className="mt-4">

              {/* Tab 1: Booth Agent */}
              <TabPane tabId="1">
                <Form onSubmit={handleAgentSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Full Name</Label>
                        <Input
                          bsSize="sm"
                          value={agentForm.fullName}
                          onChange={(e) => setAgentForm({ ...agentForm, fullName: e.target.value })}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Role</Label>
                        <Input
                          type="select"
                          bsSize="sm"
                          value={agentForm.role}
                          onChange={(e) => setAgentForm({ ...agentForm, role: e.target.value })}
                        >
                          <option>Booth Agent</option>
                          <option>Team Lead</option>
                          <option>Coordinator</option>
                          <option>Volunteer</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone</Label>
                        <Input
                          bsSize="sm"
                          value={agentForm.phone}
                          onChange={(e) => setAgentForm({ ...agentForm, phone: e.target.value })}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          bsSize="sm"
                          value={agentForm.email}
                          onChange={(e) => setAgentForm({ ...agentForm, email: e.target.value })}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Status</Label>
                        <Input
                          type="select"
                          bsSize="sm"
                          value={agentForm.status}
                          onChange={(e) => setAgentForm({ ...agentForm, status: e.target.value })}
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                          <option>On Leave</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Button type="submit" color="primary" size="md">
                    Save Agent
                  </Button>
                </Form>

                {/* Booth Agent Table */}
                <div className="table-responsive mt-4">
                  <Table hover bordered>
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Role</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agentList.length > 0 ? (
                        agentList.map((a) => (
                          <tr key={a.id}>
                            <td>{a.fullName}</td>
                            <td>{a.role}</td>
                            <td>{a.phone}</td>
                            <td>{a.email}</td>
                            <td>{a.status}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center text-muted">
                            No agents added yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </TabPane>

              {/* Tab 2: Resource Inventory */}
              <TabPane tabId="2">
                <Form onSubmit={handleResourceSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Item Name</Label>
                        <Input
                          bsSize="sm"
                          value={resourceForm.itemName}
                          onChange={(e) => setResourceForm({ ...resourceForm, itemName: e.target.value })}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Quantity</Label>
                        <Input
                          bsSize="sm"
                          type="number"
                          value={resourceForm.quantity}
                          onChange={(e) => setResourceForm({ ...resourceForm, quantity: e.target.value })}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Condition</Label>
                        <Input
                          bsSize="sm"
                          type="select"
                          value={resourceForm.condition}
                          onChange={(e) => setResourceForm({ ...resourceForm, condition: e.target.value })}
                        >
                          <option>New</option>
                          <option>Good</option>
                          <option>Needs Replacement</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button type="submit" color="primary" size="md">
                    Save Resource
                  </Button>
                </Form>

                <div className="table-responsive mt-4">
                  <Table hover bordered>
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Condition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resourceList.length > 0 ? (
                        resourceList.map((r) => (
                          <tr key={r.id}>
                            <td>{r.itemName}</td>
                            <td>{r.quantity}</td>
                            <td>{r.condition}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center text-muted">
                            No resources added yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </TabPane>

              {/* Tab 3: Task Assignment */}
              <TabPane tabId="3">
                <Form onSubmit={handleTaskSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Task Name</Label>
                        <Input
                          bsSize="sm"
                          type="select"
                          value={taskForm.taskName}
                          onChange={(e) => setTaskForm({ ...taskForm, taskName: e.target.value })}
                        >
                          <option value="">Select Task</option>
                          <option>Distribute Voter Slips</option>
                          <option>Verify Voter IDs</option>
                          <option>Set Up Booth Infrastructure</option>
                          <option>Coordinate with Supervisor</option>
                          <option>Train Volunteers</option>
                          <option>Monitor Voter Turnout</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Status</Label>
                        <Input
                          bsSize="sm"
                          type="select"
                          value={taskForm.status}
                          onChange={(e) => setTaskForm({ ...taskForm, status: e.target.value })}
                        >
                          <option>Not Started</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Description</Label>
                        <Input
                          bsSize="sm"
                          type="textarea"
                          value={taskForm.description}
                          onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button type="submit" color="primary" size="md">
                    Save Task
                  </Button>
                </Form>

                <div className="table-responsive mt-4">
                  <Table hover bordered>
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {taskList.length > 0 ? (
                        taskList.map((t) => (
                          <tr key={t.id}>
                            <td>{t.taskName}</td>
                            <td>{t.description}</td>
                            <td>{t.status}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center text-muted">
                            No tasks assigned yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </TabPane>

            </TabContent>
          </CardBody>
        </Card>
      </Col>

      {/* Hover effect styles */}
      <style>
        {`
          table tbody tr:hover {
            background-color: #f5f5f5;
            cursor: pointer;
          }
        `}
      </style>
    </Fragment>
  );
};

export default BoothTeamResourcePage;
