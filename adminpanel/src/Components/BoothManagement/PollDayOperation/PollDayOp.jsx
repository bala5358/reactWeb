import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const PollDayOp = () => {
    // State for tasks
    const [tasks, setTasks] = useState([
        { id: 1, taskName: 'Set up voting booths', assignedTo: 'Team A', plannedStart: '6:00 AM', status: 'Complete', remarks: 'All 10 booths ready' },
        { id: 2, taskName: 'Arrange seating', assignedTo: 'Team B', plannedStart: '6:30 AM', status: 'Complete', remarks: 'Chairs for 200 voters' },
        { id: 3, taskName: 'Distribute voter lists', assignedTo: 'Team C', plannedStart: '7:00 AM', status: 'Pending', remarks: '15 lists remaining' },
        { id: 4, taskName: 'Test EVM machines', assignedTo: 'Tech Team', plannedStart: '5:00 AM', status: 'Complete', remarks: 'All machines functional' }
    ]);

    // State for voter turnout
    const [voterTurnout, setVoterTurnout] = useState([
        { id: 1, timeSlot: '8–9 AM', maleVoters: 50, otherVoters: 45 },
        { id: 2, timeSlot: '9–10 AM', maleVoters: 72, otherVoters: 68 },
        { id: 3, timeSlot: '10–11 AM', maleVoters: 91, otherVoters: 87 }
    ]);

    // State for transportation incidents
    const [incidentData, setIncidentData] = useState([
        { id: 1, type: 'Vehicle breakdown', time: '9:15 AM', reportedBy: 'Driver Raj', status: 'Open' },
        { id: 2, type: 'Late arrival', time: '8:30 AM', reportedBy: 'Coordinator Priya', status: 'Open' }
    ]);

    // State for voter transportation
    const [transportationData, setTransportationData] = useState([
        { 
            id: 1, 
            voterId: 'V10245', 
            name: 'Ramesh Kumar', 
            pickup: 'Main Square', 
            drop: 'PS-15', 
            vehicle: 'DL-01AB-1234', 
            driver: 'Raj (9876543210)', 
            description: 'Elderly voter',
            status: 'Scheduled'
        }
    ]);

    // State for new forms
    const [newTask, setNewTask] = useState({
        taskName: '',
        assignedTo: '',
        plannedStart: '',
        status: 'Pending',
        remarks: ''
    });

    const [newTransport, setNewTransport] = useState({
        voterId: '',
        name: '',
        pickup: '',
        drop: '',
        vehicle: '',
        driver: '',
        description: '',
        status: 'Scheduled'
    });

    const [newIncident, setNewIncident] = useState({
        type: '',
        time: '',
        reportedBy: '',
        status: 'Open'
    });

    // Modal states
    const [taskModal, setTaskModal] = useState(false);
    const [transportModal, setTransportModal] = useState(false);
    const [incidentModal, setIncidentModal] = useState(false);

    // Toggle functions
    const toggleTaskModal = () => setTaskModal(!taskModal);
    const toggleTransportModal = () => setTransportModal(!transportModal);
    const toggleIncidentModal = () => setIncidentModal(!incidentModal);

    // Add new task
    const handleAddTask = () => {
        if (newTask.taskName.trim() !== '') {
            const task = {
                id: tasks.length + 1,
                ...newTask
            };
            setTasks([...tasks, task]);
            setNewTask({
                taskName: '',
                assignedTo: '',
                plannedStart: '',
                status: 'Pending',
                remarks: ''
            });
            toggleTaskModal();
        }
    };

    // Add new transportation
    const handleAddTransport = () => {
        if (newTransport.voterId.trim() !== '' && newTransport.name.trim() !== '') {
            const transport = {
                id: transportationData.length + 1,
                ...newTransport
            };
            setTransportationData([...transportationData, transport]);
            setNewTransport({
                voterId: '',
                name: '',
                pickup: '',
                drop: '',
                vehicle: '',
                driver: '',
                description: '',
                status: 'Scheduled'
            });
            toggleTransportModal();
        }
    };

    // Add new incident
    const handleAddIncident = () => {
        if (newIncident.type.trim() !== '' && newIncident.reportedBy.trim() !== '') {
            const incident = {
                id: incidentData.length + 1,
                ...newIncident
            };
            setIncidentData([...incidentData, incident]);
            setNewIncident({
                type: '',
                time: '',
                reportedBy: '',
                status: 'Open'
            });
            toggleIncidentModal();
        }
    };

    // Toggle task status
    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, status: task.status === 'Complete' ? 'Pending' : 'Complete' } 
                : task
        ));
    };

    // Resolve incident
    const resolveIncident = (incidentId) => {
        setIncidentData(incidentData.map(incident => 
            incident.id === incidentId 
                ? { ...incident, status: 'Resolved' } 
                : incident
        ));
    };

    // Complete transportation
    const completeTransport = (transportId) => {
        setTransportationData(transportationData.map(transport => 
            transport.id === transportId 
                ? { ...transport, status: 'Completed' } 
                : transport
        ));
    };

    // Delete task
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    // Handle input changes
    const handleInputChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === 'task') {
            setNewTask(prev => ({ ...prev, [name]: value }));
        } else if (formType === 'transport') {
            setNewTransport(prev => ({ ...prev, [name]: value }));
        } else if (formType === 'incident') {
            setNewIncident(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <Fragment>
            <Col lg="12" className='xl-100 box-col-12' xl="12">
                <Card>
                    <CardHeader style={{ fontSize: '25px', fontWeight: '500' }}>
                        Poll Day Operations
                    </CardHeader>
                    
                    <CardBody>
                        {/* Tasks Section */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Polling Day Checklist</h4>
                            <Button color="primary" onClick={toggleTaskModal}>
                                Add New Task
                            </Button>
                        </div>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Assigned To</th>
                                    <th>Planned Start</th>
                                    <th>Status</th>
                                    <th>Remarks</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.taskName}</td>
                                        <td>{task.assignedTo}</td>
                                        <td>{task.plannedStart}</td>
                                        <td>
                                            <Button 
                                                color={task.status === 'Complete' ? 'success' : 'warning'}
                                                size="sm"
                                                onClick={() => toggleTaskStatus(task.id)}
                                            >
                                                {task.status}
                                            </Button>
                                        </td>
                                        <td>{task.remarks}</td>
                                        <td>
                                            <Button color="danger" size="sm" onClick={() => deleteTask(task.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <hr className="mt-5"/>

                        {/* Voter Turnout Section */}
                        <h4 className="mt-5 mb-5">Live Voter Turnout</h4>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th>Time Slot</th>
                                    <th>Male Voters</th>
                                    <th>Other Voters</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {voterTurnout.map((slot) => (
                                    <tr key={slot.id}>
                                        <td>{slot.timeSlot}</td>
                                        <td>{slot.maleVoters}</td>
                                        <td>{slot.otherVoters}</td>
                                        <td>{slot.maleVoters + slot.otherVoters}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <hr className="mt-5"/>

                        {/* Transportation Incidents Section */}
                        <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
                            <h4>Transportation Incidents</h4>
                            <Button color="primary" onClick={toggleIncidentModal}>
                                Report Incident
                            </Button>
                        </div>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Time</th>
                                    <th>Reported By</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incidentData.map((incident) => (
                                    <tr key={incident.id}>
                                        <td>{incident.type}</td>
                                        <td>{incident.time}</td>
                                        <td>{incident.reportedBy}</td>
                                        <td>
                                            <span className={`badge ${incident.status === 'Open' ? 'bg-warning' : 'bg-success'}`}>
                                                {incident.status}
                                            </span>
                                        </td>
                                        <td>
                                            {incident.status === 'Open' && (
                                                <Button color="info" size="sm" onClick={() => resolveIncident(incident.id)}>
                                                    Resolve
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <hr className="mt-5"/>

                        {/* Voter Transportation Section */}
                        <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
                            <h4>Voter Transportation</h4>
                            <Button color="primary" onClick={toggleTransportModal}>
                                Add Transportation
                            </Button>
                        </div>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th>Voter ID</th>
                                    <th>Name</th>
                                    <th>Pickup</th>
                                    <th>Drop</th>
                                    <th>Vehicle</th>
                                    <th>Driver</th>
                                    <th>Status</th>
                                    <th>Notes</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transportationData.map((transport) => (
                                    <tr key={transport.id}>
                                        <td>{transport.voterId}</td>
                                        <td>{transport.name}</td>
                                        <td>{transport.pickup}</td>
                                        <td>{transport.drop}</td>
                                        <td>{transport.vehicle}</td>
                                        <td>{transport.driver}</td>
                                        <td>
                                            <span className={`badge ${transport.status === 'Scheduled' ? 'bg-info' : 'bg-success'}`}>
                                                {transport.status}
                                            </span>
                                        </td>
                                        <td>{transport.description}</td>
                                        <td>
                                            {transport.status === 'Scheduled' && (
                                                <Button color="success" size="sm" onClick={() => completeTransport(transport.id)}>
                                                    Complete
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

                {/* Add Task Modal */}
                <Modal isOpen={taskModal} toggle={toggleTaskModal}>
                    <ModalHeader toggle={toggleTaskModal}>Add New Task</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Task Name*</Label>
                                <Input 
                                    type="text" 
                                    name="taskName" 
                                    value={newTask.taskName} 
                                    onChange={(e) => handleInputChange(e, 'task')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Assigned To*</Label>
                                <Input 
                                    type="text" 
                                    name="assignedTo" 
                                    value={newTask.assignedTo} 
                                    onChange={(e) => handleInputChange(e, 'task')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Planned Start Time*</Label>
                                <Input 
                                    type="text" 
                                    name="plannedStart" 
                                    value={newTask.plannedStart} 
                                    onChange={(e) => handleInputChange(e, 'task')} 
                                    placeholder="e.g. 6:00 AM" 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Status</Label>
                                <Input 
                                    type="select" 
                                    name="status" 
                                    value={newTask.status} 
                                    onChange={(e) => handleInputChange(e, 'task')}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Complete">Complete</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Remarks</Label>
                                <Input 
                                    type="textarea" 
                                    name="remarks" 
                                    value={newTask.remarks} 
                                    onChange={(e) => handleInputChange(e, 'task')} 
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddTask}>
                            Add Task
                        </Button>
                        <Button color="secondary" onClick={toggleTaskModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Add Transportation Modal */}
                <Modal isOpen={transportModal} toggle={toggleTransportModal} size="lg">
                    <ModalHeader toggle={toggleTransportModal}>Add Voter Transportation</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Voter ID*</Label>
                                <Input 
                                    type="text" 
                                    name="voterId" 
                                    value={newTransport.voterId} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Name*</Label>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    value={newTransport.name} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Pickup Location*</Label>
                                <Input 
                                    type="text" 
                                    name="pickup" 
                                    value={newTransport.pickup} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Drop Location*</Label>
                                <Input 
                                    type="text" 
                                    name="drop" 
                                    value={newTransport.drop} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Vehicle Number</Label>
                                <Input 
                                    type="text" 
                                    name="vehicle" 
                                    value={newTransport.vehicle} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Driver Name & Contact</Label>
                                <Input 
                                    type="text" 
                                    name="driver" 
                                    value={newTransport.driver} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Special Notes</Label>
                                <Input 
                                    type="textarea" 
                                    name="description" 
                                    value={newTransport.description} 
                                    onChange={(e) => handleInputChange(e, 'transport')} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Status</Label>
                                <Input 
                                    type="select" 
                                    name="status" 
                                    value={newTransport.status} 
                                    onChange={(e) => handleInputChange(e, 'transport')}
                                >
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Completed">Completed</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddTransport}>
                            Add Transportation
                        </Button>
                        <Button color="secondary" onClick={toggleTransportModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Add Incident Modal */}
                <Modal isOpen={incidentModal} toggle={toggleIncidentModal}>
                    <ModalHeader toggle={toggleIncidentModal}>Report Transportation Incident</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Incident Type*</Label>
                                <Input 
                                    type="text" 
                                    name="type" 
                                    value={newIncident.type} 
                                    onChange={(e) => handleInputChange(e, 'incident')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Time*</Label>
                                <Input 
                                    type="text" 
                                    name="time" 
                                    value={newIncident.time} 
                                    onChange={(e) => handleInputChange(e, 'incident')} 
                                    placeholder="e.g. 9:15 AM" 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Reported By*</Label>
                                <Input 
                                    type="text" 
                                    name="reportedBy" 
                                    value={newIncident.reportedBy} 
                                    onChange={(e) => handleInputChange(e, 'incident')} 
                                    required 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Status</Label>
                                <Input 
                                    type="select" 
                                    name="status" 
                                    value={newIncident.status} 
                                    onChange={(e) => handleInputChange(e, 'incident')}
                                >
                                    <option value="Open">Open</option>
                                    <option value="Resolved">Resolved</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddIncident}>
                            Report Incident
                        </Button>
                        <Button color="secondary" onClick={toggleIncidentModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </Col>
        </Fragment>
    );
};

export default PollDayOp;