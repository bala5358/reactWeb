import React, { Fragment, useState } from 'react';
import { Col, Card, CardBody, CardHeader, CardFooter, Form, FormGroup, Label, Input, Row, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Select from 'react-select';
import classnames from 'classnames';

const communicationMethodOptions = [
  { value: 'Phone Call', label: 'Phone Call' },
  { value: 'SMS', label: 'SMS' },
  { value: 'WhatsApp', label: 'WhatsApp' },
  { value: 'Email', label: 'Email' },
  { value: 'In-Person', label: 'In-Person' }
];

const visitStatusOptions = [
  { value: 'Contacted', label: 'Contacted' },
  { value: 'Not Home', label: 'Not Home' },
  { value: 'Refused', label: 'Refused' },
  { value: 'Follow-up Needed', label: 'Follow-up Needed' }
];

const communicationTypeOptions = [
  { value: 'Call', label: 'Call' },
  { value: 'SMS', label: 'SMS' },
  { value: 'WhatsApp', label: 'WhatsApp' },
  { value: 'Email', label: 'Email' },
  { value: 'In-person', label: 'In-person' }
];

const responseOptions = [
  { value: 'Positive', label: 'Positive' },
  { value: 'Neutral', label: 'Neutral' },
  { value: 'Negative', label: 'Negative' },
  { value: 'No Response', label: 'No Response' }
];

const priorityCategoryOptions = [
  { value: 'Needs Follow-up', label: 'Needs Follow-up' },
  { value: 'Influential Voter', label: 'Influential Voter' },
  { value: 'Elderly & Needs Transport', label: 'Elderly & Needs Transport' },
  { value: 'First-Time Voter', label: 'First-Time Voter' },
  { value: 'Swing Voter', label: 'Swing Voter' },
  { value: 'Strong Supporter', label: 'Strong Supporter' }
];

const statusOptions = [
  { value: 'Active', label: 'Active' },
  { value: 'Resolved', label: 'Resolved' },
  { value: 'Dropped', label: 'Dropped' }
];

const agentOptions = [
  { value: 'Agent 1', label: 'Agent 1' },
  { value: 'Agent 2', label: 'Agent 2' },
  { value: 'Agent 3', label: 'Agent 3' }
];

const VoterContactInfo = () => {
    // Basic voter info state
    const [voterId, setVoterId] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [alternatePhone, setAlternatePhone] = useState("");
    const [email, setEmail] = useState("");
    const [preferredCommunication, setPreferredCommunication] = useState(null);
    const [address, setAddress] = useState("");
    const [agreesToContact, setAgreesToContact] = useState(false);
    
    // Door-to-Door Visits state
    const [visitDate, setVisitDate] = useState("");
    const [visitedBy, setVisitedBy] = useState("");
    const [visitStatus, setVisitStatus] = useState(null);
    const [remarks, setRemarks] = useState("");
    const [followUpRequired, setFollowUpRequired] = useState(false);
    const [nextVisitDate, setNextVisitDate] = useState("");
    
    // Communication History state
    const [communicationType, setCommunicationType] = useState(null);
    const [communicationDateTime, setCommunicationDateTime] = useState(new Date().toISOString().slice(0, 16));
    const [initiatedBy, setInitiatedBy] = useState(null);
    const [conversationSummary, setConversationSummary] = useState("");
    const [response, setResponse] = useState(null);
    const [commFollowUpNeeded, setCommFollowUpNeeded] = useState(false);
    const [commNextFollowUpDate, setCommNextFollowUpDate] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [sentBy,setSentBy] = useState("");
    
    // Priority Flag state
    const [priorityCategory, setPriorityCategory] = useState(null);
    const [priorityReason, setPriorityReason] = useState("");
    const [assignedAgent, setAssignedAgent] = useState(null);
    const [reviewDate, setReviewDate] = useState("");
    const [priorityStatus, setPriorityStatus] = useState(null);
    
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab) => {
        if(activeTab !== tab) setActiveTab(tab);
    };

    const handleSave = () => {
        alert("Voter engagement data saved");
    };

    const handleUpdate = () => {
        alert("Voter engagement data updated");
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAttachment(file);
        }
    };

    return (
        <Fragment>
            <Col lg="12" className='xl-100 box-col-12' xl="12">
                <Card>
                    <CardHeader style={{fontSize:'25px',fontWeight:'500'}}>Voter Engagement & Communication</CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                {/* Basic Voter Information Fields */}
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Voter ID</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Voter ID"
                                            value={voterId}
                                            onChange={(e) => setVoterId(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Name</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Phone Number</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Alternate Phone</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Alternate Phone"
                                            value={alternatePhone}
                                            onChange={(e) => setAlternatePhone(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Email Address</Label>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            placeholder="Enter Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Preferred Communication Method</Label>
                                        <Select
                                            options={communicationMethodOptions}
                                            value={preferredCommunication}
                                            onChange={setPreferredCommunication}
                                            placeholder="Select Communication Method..."
                                            isSearchable
                                            classNamePrefix="react-select"
                                            styles={{
                                                control: (base) => ({
                                                    ...base,
                                                    fontSize: '14px'
                                                })
                                            }}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md="12">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Address</Label>
                                        <Input
                                            className="form-control"
                                            type="textarea"
                                            rows="2"
                                            placeholder="Enter Address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md="12">
                                <FormGroup className="mb-3">
                                    <div className="form-check">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="contactAgreement"
                                        checked={agreesToContact}
                                        onChange={(e) => setAgreesToContact(e.target.checked)}
                                        style={{ 
                                        width: '18px',
                                        height: '18px',
                                        marginRight: '8px',
                                        marginTop: '0',
                                        cursor: 'pointer',
                                        border: '2px solid #495057',
                                        borderRadius: '3px',
                                        appearance: 'none',
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        position: 'relative',
                                        boxSizing: 'border-box',
                                        backgroundColor: agreesToContact ? '#7366ff' : 'white',
                                        transition: 'background-color 0.2s ease'
                                        }}
                                    />
                                    {agreesToContact && (
                                        <span style={{
                                        position: 'absolute',
                                        left: '4px',
                                        top: '1px',
                                        width: '6px',
                                        height: '12px',
                                        border: 'solid white',
                                        borderWidth: '0 2px 2px 0',
                                        transform: 'rotate(45deg)',
                                        pointerEvents: 'none'
                                        }}></span>
                                    )}
                                    <Label 
                                        className="form-check-label" 
                                        for="contactAgreement" 
                                        style={{ 
                                        fontWeight: "500", 
                                        cursor: 'pointer',
                                        marginLeft: '4px'
                                        }}
                                    >
                                        Voter agrees to be contacted
                                    </Label>
                                    </div>
                                </FormGroup>
                                </Col>

                                {agreesToContact && (
                                    <Col md="12" className="mt-4">
                                        <Nav tabs className="mb-4" style={{ borderBottom: '1px solid #dee2e6' }}>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '1' })}
                                                    onClick={() => { toggleTab('1'); }}
                                                    style={{
                                                        padding: '12px 20px',
                                                        border: '1px solid transparent',
                                                        borderBottom: activeTab === '1' ? '2px solid #7366ff' : 'none',
                                                        color: activeTab === '1' ? '#7366ff' : '#495057',
                                                        fontWeight: '500',
                                                        backgroundColor: activeTab === '1' ? 'white' : 'transparent',
                                                        borderTopLeftRadius: '4px',
                                                        borderTopRightRadius: '4px',
                                                        marginBottom: '-1px'
                                                    }}
                                                >
                                                    Door-to-Door Visits
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '2' })}
                                                    onClick={() => { toggleTab('2'); }}
                                                    style={{
                                                        padding: '12px 20px',
                                                        border: '1px solid transparent',
                                                        borderBottom: activeTab === '2' ? '2px solid #7366ff' : 'none',
                                                        color: activeTab === '2' ? '#7366ff' : '#495057',
                                                        fontWeight: '500',
                                                        backgroundColor: activeTab === '2' ? 'white' : 'transparent',
                                                        borderTopLeftRadius: '4px',
                                                        borderTopRightRadius: '4px',
                                                        marginBottom: '-1px'
                                                    }}
                                                >
                                                    Communication History
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '3' })}
                                                    onClick={() => { toggleTab('3'); }}
                                                    style={{
                                                        padding: '12px 20px',
                                                        border: '1px solid transparent',
                                                        borderBottom: activeTab === '3' ? '2px solid #7366ff' : 'none',
                                                        color: activeTab === '3' ? '#7366ff' : '#495057',
                                                        fontWeight: '500',
                                                        backgroundColor: activeTab === '3' ? 'white' : 'transparent',
                                                        borderTopLeftRadius: '4px',
                                                        borderTopRightRadius: '4px',
                                                        marginBottom: '-1px'
                                                    }}
                                                >
                                                    Priority Flag
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={activeTab} style={{
                                            padding: '20px',
                                            border: '1px solid #dee2e6',
                                            borderTop: 'none',
                                            borderBottomLeftRadius: '4px',
                                            borderBottomRightRadius: '4px',
                                            backgroundColor: 'white'
                                        }}>
                                            {/* Tab 1: Door-to-Door Visits */}
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col sm="4" md="4">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Visit Date</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="date"
                                                                value={visitDate}
                                                                onChange={(e) => setVisitDate(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="4" md="4">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Visited By</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Enter Name"
                                                                value={visitedBy}
                                                                onChange={(e) => setVisitedBy(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="4" md="4">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Status</Label>
                                                            <Select
                                                                options={visitStatusOptions}
                                                                value={visitStatus}
                                                                onChange={setVisitStatus}
                                                                placeholder="Select Status..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Remarks / Observation</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="textarea"
                                                                rows="3"
                                                                placeholder="Enter Remarks"
                                                                value={remarks}
                                                                onChange={(e) => setRemarks(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                    <FormGroup className="mb-3">
                                                        <div className="form-check">
                                                        <Input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="followUpRequired"
                                                            checked={followUpRequired}
                                                            onChange={(e) => setFollowUpRequired(e.target.checked)}
                                                            style={{ 
                                                            width: '18px',
                                                            height: '18px',
                                                            marginRight: '8px',
                                                            marginTop: '0',
                                                            cursor: 'pointer',
                                                            border: '2px solid #495057',
                                                            borderRadius: '3px',
                                                            appearance: 'none',
                                                            WebkitAppearance: 'none',
                                                            MozAppearance: 'none',
                                                            position: 'relative',
                                                            boxSizing: 'border-box',
                                                            backgroundColor: followUpRequired ? '#7366ff' : 'white',
                                                            transition: 'background-color 0.2s ease'
                                                            }}
                                                        />
                                                        {followUpRequired && (
                                                            <span style={{
                                                            position: 'absolute',
                                                            left: '4px',
                                                            top: '1px',
                                                            width: '6px',
                                                            height: '12px',
                                                            border: 'solid white',
                                                            borderWidth: '0 2px 2px 0',
                                                            transform: 'rotate(45deg)',
                                                            pointerEvents: 'none'
                                                            }}></span>
                                                        )}
                                                        <Label 
                                                            className="form-check-label" 
                                                            for="followUpRequired" 
                                                            style={{ 
                                                            fontWeight: "500", 
                                                            cursor: 'pointer',
                                                            marginLeft: '4px'
                                                            }}
                                                        >
                                                            Follow-up Required
                                                        </Label>
                                                        </div>
                                                    </FormGroup>
                                                    </Col>
                                                    {followUpRequired && (
                                                        <>
                                                            <Col sm="6" md="6">
                                                                <FormGroup className="mb-3">
                                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Next Visit Date</Label>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="date"
                                                                        value={nextVisitDate}
                                                                        onChange={(e) => setNextVisitDate(e.target.value)}
                                                                        style={{ fontSize: '14px' }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col sm="6" md="6">
                                                                <FormGroup className="mb-3">
                                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Communication Type</Label>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Enter Communication Type"
                                                                        value={communicationType}
                                                                        onChange={(e) => setCommunicationType(e.target.value)}
                                                                        style={{ fontSize: '14px' }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col sm="6" md="6">
                                                                <FormGroup className="mb-3">
                                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Reason for Priority</Label>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Enter Reason"
                                                                        value={priorityReason}
                                                                        onChange={(e) => setPriorityReason(e.target.value)}
                                                                        style={{ fontSize: '14px' }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col sm="6" md="6">
                                                                <FormGroup className="mb-3">
                                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Sent By</Label>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Enter Name"
                                                                        value={sentBy}
                                                                        onChange={(e) => setSentBy(e.target.value)}
                                                                        style={{ fontSize: '14px' }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col sm="6" md="6">
                                                                <FormGroup className="mb-3">
                                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Assigned Agent</Label>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Enter Agent Name"
                                                                        value={assignedAgent}
                                                                        onChange={(e) => setAssignedAgent(e.target.value)}
                                                                        style={{ fontSize: '14px' }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col sm="6" md="6">
                                                                <FormGroup className="mb-3">
                                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Review Date</Label>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="date"
                                                                        value={reviewDate}
                                                                        onChange={(e) => setReviewDate(e.target.value)}
                                                                        style={{ fontSize: '14px' }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </>
                                                    )}
                                                </Row>
                                            </TabPane>

                                            {/* Tab 2: Communication History */}
                                            <TabPane tabId="2">
                                                <Row>
                                                    <Col md="12">
                                                        <h5 style={{ marginBottom: '20px' }}>Track all communication with this voter</h5>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Communication Type</Label>
                                                            <Select
                                                                options={communicationTypeOptions}
                                                                value={communicationType}
                                                                onChange={setCommunicationType}
                                                                placeholder="Select Type..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Date & Time</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="datetime-local"
                                                                value={communicationDateTime}
                                                                onChange={(e) => setCommunicationDateTime(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Initiated By</Label>
                                                            <Select
                                                                options={agentOptions}
                                                                value={initiatedBy}
                                                                onChange={setInitiatedBy}
                                                                placeholder="Select Agent..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Response</Label>
                                                            <Select
                                                                options={responseOptions}
                                                                value={response}
                                                                onChange={setResponse}
                                                                placeholder="Select Response..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Message / Conversation Summary</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="textarea"
                                                                rows="3"
                                                                placeholder="Brief description of what was discussed"
                                                                value={conversationSummary}
                                                                onChange={(e) => setConversationSummary(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
  <FormGroup className="mb-3">
    <div className="form-check" style={{ position: 'relative' }}>
      <Input
        className="form-check-input"
        type="checkbox"
        id="commFollowUpNeeded1"
        checked={commFollowUpNeeded}
        onChange={(e) => setCommFollowUpNeeded(e.target.checked)}
        style={{ 
          width: '18px',
          height: '18px',
          marginRight: '8px',
          marginTop: '0',
          cursor: 'pointer',
          border: '2px solid #495057',
          borderRadius: '3px',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          position: 'relative',
          boxSizing: 'border-box',
          backgroundColor: commFollowUpNeeded ? '#7366ff' : 'white',
          transition: 'background-color 0.2s ease'
        }}
      />
      {commFollowUpNeeded && (
        <span style={{
          position: 'absolute',
          left: '4px',
          top: '1px',
          width: '6px',
          height: '12px',
          border: 'solid white',
          borderWidth: '0 2px 2px 0',
          transform: 'rotate(45deg)',
          pointerEvents: 'none'
        }}></span>
      )}
      <Label 
        className="form-check-label" 
        for="commFollowUpNeeded1" 
        style={{ 
          fontWeight: "500", 
          cursor: 'pointer',
          marginLeft: '4px'
        }}
      >
        Follow-up Needed?
      </Label>
    </div>
  </FormGroup>
</Col>
                                                    {commFollowUpNeeded && (
                                                        <Col sm="6" md="6">
                                                            <FormGroup className="mb-3">
                                                                <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Next Follow-up Date</Label>
                                                                <Input
                                                                    className="form-control"
                                                                    type="date"
                                                                    value={commNextFollowUpDate}
                                                                    onChange={(e) => setCommNextFollowUpDate(e.target.value)}
                                                                    style={{ fontSize: '14px' }}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    )}
                                                    <Col md="12">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Attachment / Proof</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="file"
                                                                onChange={handleFileUpload}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                            {attachment && (
                                                                <small className="text-muted">Selected: {attachment.name}</small>
                                                            )}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            {/* Tab 3: Priority Flag */}
                                            <TabPane tabId="3">
                                                <Row>
                                                    <Col md="12">
                                                        <h5 style={{ marginBottom: '20px' }}>Mark this voter for special handling</h5>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Priority Category</Label>
                                                            <Select
                                                                options={priorityCategoryOptions}
                                                                value={priorityCategory}
                                                                onChange={setPriorityCategory}
                                                                placeholder="Select Category..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Status</Label>
                                                            <Select
                                                                options={statusOptions}
                                                                value={priorityStatus}
                                                                onChange={setPriorityStatus}
                                                                placeholder="Select Status..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Reason for Priority</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="textarea"
                                                                rows="3"
                                                                placeholder="Explain why this voter needs special attention"
                                                                value={priorityReason}
                                                                onChange={(e) => setPriorityReason(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Assigned Agent</Label>
                                                            <Select
                                                                options={agentOptions}
                                                                value={assignedAgent}
                                                                onChange={setAssignedAgent}
                                                                placeholder="Select Agent..."
                                                                isSearchable
                                                                classNamePrefix="react-select"
                                                                styles={{
                                                                    control: (base) => ({
                                                                        ...base,
                                                                        fontSize: '14px'
                                                                    })
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6" md="6">
                                                        <FormGroup className="mb-3">
                                                            <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Review Date</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="date"
                                                                value={reviewDate}
                                                                onChange={(e) => setReviewDate(e.target.value)}
                                                                style={{ fontSize: '14px' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                )}
                            </Row>
                            <CardFooter className="text-end">
                                <Button color="primary" className="me-2" onClick={handleSave}>
                                    Save
                                </Button>
                                <Button color="success" onClick={handleUpdate}>
                                    Update
                                </Button>
                            </CardFooter>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default VoterContactInfo;