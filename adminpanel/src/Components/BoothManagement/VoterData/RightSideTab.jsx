import React, { Fragment, useState } from 'react';
import { Col, Card, CardBody, CardHeader, CardFooter, Form, FormGroup, Label, Input, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';

const voterHistoryOptions = [
  { value: '2024-MP', label: '2024-MP' },
  { value: '2022-Local Body', label: '2022-Local Body' },
  { value: '2021-MLA', label: '2021-MLA' },
  { value: 'Not Voted', label: 'Not Voted' }
];

const religionOptions = [
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Christian", label: "Christian" },
  { value: "Jainism", label: "Jainism" },
  { value: "Sikhism", label: "Sikhism" },
  { value: "Buddhism", label: "Buddhism" },
];

const casteCategoryOptions = [
  { value: "OC", label: "OC" },
  { value: "BC", label: "BC" },
  { value: "MBC", label: "MBC" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
];

const casteOptions = [
  { value: "Vanniyar", label: "Vanniyar" },
  { value: "Paraiyar", label: "Paraiyar" },
  { value: "Yadavar", label: "Yadavar" },
  { value: "Thevar", label: "Thevar" },
  { value: "Nadar", label: "Nadar" },
  { value: "Chettiar", label: "Chettiar" },
  { value: "Mudaliar", label: "Mudaliar" },
  { value: "Naidu", label: "Naidu" },
  { value: "Gounder", label: "Gounder" },
  { value: "Pillai", label: "Pillai" },
  { value: "Vellalar", label: "Vellalar" },
  { value: "Scheduled Caste", label: "Scheduled Caste" },
  { value: "Scheduled Tribe", label: "Scheduled Tribe" },
];

const subCasteOptions = {
  Vanniyar: [
    { value: "Padayachi", label: "Padayachi" },
    { value: "Gounder", label: "Gounder" },
  ],
  Thevar: [
    { value: "Maravar", label: "Maravar" },
    { value: "Kallar", label: "Kallar" },
    { value: "Agamudayar", label: "Agamudayar" },
  ],
  Yadavar: [
    { value: "Konar", label: "Konar" },
    { value: "Idaiyar", label: "Idaiyar" },
  ],
  Nadar: [
    { value: "Gramani", label: "Gramani" },
    { value: "Shanar", label: "Shanar" },
  ],
  Paraiyar: [
    { value: "Adi Dravidar", label: "Adi Dravidar" },
    { value: "Arunthathiyar", label: "Arunthathiyar" },
  ],
  Mudaliar: [
    { value: "Thondaimandala", label: "Thondaimandala" },
    { value: "Isai Vellalar", label: "Isai Vellalar" },
  ],
  Gounder: [
    { value: "Kongu Vellalar", label: "Kongu Vellalar" },
  ],
  Naidu: [
    { value: "Balija Naidu", label: "Balija Naidu" },
    { value: "Kamma Naidu", label: "Kamma Naidu" },
  ],
  Chettiar: [
    { value: "Nagarathar", label: "Nagarathar" },
    { value: "Devanga Chettiar", label: "Devanga Chettiar" },
  ],
  Pillai: [
    { value: "Saiva Pillai", label: "Saiva Pillai" },
    { value: "Vellala Pillai", label: "Vellala Pillai" },
  ],
  Vellalar: [
    { value: "Saiva Vellalar", label: "Saiva Vellalar" },
    { value: "Mudali Vellalar", label: "Mudali Vellalar" },
  ],
  "Scheduled Caste": [
    { value: "Paraiyar", label: "Paraiyar (Adi Dravidar)" },
    { value: "Pallan", label: "Pallan (Devendrakula Velalar)" },
    { value: "Arunthathiyar", label: "Arunthathiyar" },
    { value: "Chakkiliyan", label: "Chakkiliyan" },
    { value: "Kuravan", label: "Kuravan" },
  ],
  "Scheduled Tribe": [
    { value: "Malayali", label: "Malayali" },
    { value: "Kattunayakan", label: "Kattunayakan" },
    { value: "Irula", label: "Irula" },
    { value: "Paniyan", label: "Paniyan" },
    { value: "Thottiya", label: "Thottiya Naicker" },
  ],
};

const partyOptions = [
  { value: "DMK", label: "Dravida Munnetra Kazhagam (DMK)" },
  { value: "AIADMK", label: "All India Anna Dravida Munnetra Kazhagam (AIADMK)" },
  { value: "BJP", label: "Bharatiya Janata Party (BJP)" },
  { value: "INC", label: "Indian National Congress (INC)" },
  { value: "PMK", label: "Pattali Makkal Katchi (PMK)" },
  { value: "VCK", label: "Viduthalai Chiruthaigal Katchi (VCK)" },
  { value: "NTK", label: "Naam Tamilar Katchi (NTK)" },
  { value: "AMMK", label: "Amma Makkal Munnettra Kazagam (AMMK)" },
  { value: "TMMK", label: "Tamil Nadu Muslim Munnetra Kazhagam (TMMK)" },
  { value: "TVK", label: "Tamizhaga Vettri Kazhagam (TVK)" },
  { value: "CPI", label: "Communist Party of India (CPI)" },
  { value: "CPI-M", label: "Communist Party of India (Marxist) CPI-M" },
  { value: "NCP", label: "Nationalist Congress Party (NCP)" },
  { value: "BSP", label: "Bahujan Samaj Party (BSP)" },
];

const categoryOptions = [
  { value: "Available", label: "Available" },
  { value: "Unavailable", label: "Unavailable" },
  { value: "Shifted", label: "Shifted" },
  { value: "Death", label: "Death" },
  { value: "Outstation", label: "Outstation" },
  { value: "Differently Abled", label: "Differently Abled" },
  { value: "Party Member", label: "Party Member" },
  { value: "BLA-2", label: "BLA-2" },
  { value: "In-charge", label: "In-charge" },
  { value: "Postal Vote", label: "Postal Vote" },
  { value: "Duplicate", label: "Duplicate" },
  { value: "Booth Agent", label: "Booth Agent" },
  { value: "Booth Agent & BLA-2", label: "Booth Agent & BLA-2" },
];

const languageOptions = [
  { value: "Tamil", label: "Tamil" },
  { value: "Hindi", label: "Hindi" },
  { value: "Telugu", label: "Telugu" },
  { value: "Kannada", label: "Kannada" },
  { value: "Malayalam", label: "Malayalam" },
];

const schemeOptions = [
  { value: "Amma Laptop", label: "Amma Laptop" },
  { value: "Amma Scooty for Ladies", label: "Amma Scooty for Ladies" },
  { value: "Free Maternity Kit", label: "Free Maternity Kit" },
  { value: "Crop Loan Waiver Scheme", label: "Crop Loan Waiver Scheme" },
  { value: "Kalaignar Magalir Urimai Thogai", label: "Kalaignar Magalir Urimai Thogai" },
  { value: "Free Bus Travel for Women", label: "Free Bus Travel for Women" },
];

const feedbackOptions = [
  { value: "Water issue at our village", label: "Water issue at our village" },
  { value: "Need railway bridge at this junction", label: "Need railway bridge at this junction" },
  { value: "Lake cleaning need to do", label: "Lake cleaning need to do" },
  { value: "Underground drainage system is required", label: "Underground drainage system is required" },
];

const RightSideTab = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedReligion, setSelectedReligion] = useState(null);
    const [selectedCasteCategory, setSelectedCasteCategory] = useState(null);
    const [selectedCaste, setSelectedCaste] = useState(null);
    const [selectedSubCaste, setSelectedSubCaste] = useState(null);
    const [selectedParty, setSelectedParty] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedSchemes, setSelectedSchemes] = useState([]);
    const [selectedFeedback, setSelectedFeedback] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState(""); 
    const [locationValue, setLocationValue] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [membershipNumber, setMembershipNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [remarks, setRemarks] = useState("");

    const availableSubCastes =
        selectedCaste && subCasteOptions[selectedCaste.value]
        ? subCasteOptions[selectedCaste.value]
        : [];
   
    const handleFetchLocation = () => {
        setLatitude("12.971599");
        setLongitude("77.594566");
        setLocationValue("12.971599, 77.594566");
    };

    const handleReset = () => {
        setLatitude("");
        setLongitude("");
        setLocationValue("");
    };

    const handleSave = () => {
        const formattedLocation = `${latitude}, ${longitude}`;
        setLocationValue(formattedLocation);
        setModalOpen(false);
    };
    
    const handleUpdateVoter = () => {
        alert("Voter update functionality would go here");
    };

    return (
        <Fragment>
            <Col lg="12" className='xl-100 box-col-12' xl="12">
                <Card>
                    <CardHeader style={{fontSize:'25px',fontWeight:'500'}}>Voter Information</CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col sm="6" md="6">
                                    <FormGroup>
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Voter History</Label>
                                        <Select
                                            options={voterHistoryOptions}
                                            isMulti                
                                            value={selectedOptions} 
                                            onChange={setSelectedOptions}
                                            placeholder="Select Voter History..."
                                            classNamePrefix="select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Voter Name</Label>
                                    <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter Voter's Full Name"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Gender</Label>
                                    <Input
                                    className="form-control"
                                    type="select"
                                    style={{ fontSize: '14px' }}
                                    >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    </Input>
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Age</Label>
                                    <Input
                                    className="form-control"
                                    type="number"
                                    placeholder="Enter Age"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Voter ID (EPIC No)</Label>
                                    <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter Voter ID Number"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Date of Birth</Label>
                                    <Input
                                        className="form-control"
                                        type="date"
                                        placeholder="Select Date of Birth"
                                        value={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        style={{ fontSize: '14px' }}
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
                                    placeholder="Enter Full Address"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Booth/Part Number</Label>
                                    <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter Booth/Part Number"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Family Head Name</Label>
                                    <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter Family Head Name"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Family Members Count</Label>
                                    <Input
                                    className="form-control"
                                    type="number"
                                    placeholder="Enter Count"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>

                                <Col sm="6" md="6">
                                <FormGroup className="mb-3">
                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Occupation</Label>
                                    <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter Occupation"
                                    style={{ fontSize: '14px' }}
                                    />
                                </FormGroup>
                                </Col>
                               <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Mobile Number</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Mobile Number"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Whatsapp Number</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Whatsapp Number"
                                            value={whatsappNumber}
                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="9" md="9">
                                    <FormGroup>
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Location</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            value={locationValue}
                                            placeholder="Latitude, Longitude"
                                            onClick={() => setModalOpen(true)}
                                            style={{ fontSize: '14px' }}
                                            readOnly
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="3" md="3">
                                    <FormGroup>
                                        <Label className="form-label invisible" style={{ fontWeight: "500", marginBottom: "6px" }}>Fetch</Label>
                                        <Button
                                            color="primary"
                                            onClick={() => setModalOpen(true)}
                                            className="w-100"
                                        >
                                            Fetch Location
                                        </Button>
                                    </FormGroup>
                                </Col>
                                <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} centered>
                                    <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Set Location</ModalHeader>
                                    <ModalBody>
                                        <Row className="g-3">
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label style={{ fontWeight: "500", marginBottom: "6px" }}>Latitude</Label>
                                                    <Input
                                                        type="text"
                                                        value={latitude}
                                                        onChange={(e) => setLatitude(e.target.value)}
                                                        placeholder="Enter Latitude"
                                                        style={{ fontSize: '14px' }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label style={{ fontWeight: "500", marginBottom: "6px" }}>Longitude</Label>
                                                    <Input
                                                        type="text"
                                                        value={longitude}
                                                        onChange={(e) => setLongitude(e.target.value)}
                                                        placeholder="Enter Longitude"
                                                        style={{ fontSize: '14px' }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </ModalBody>
                                    <ModalFooter className="d-flex justify-content-between">
                                        <div className="d-flex gap-2 w-100">
                                            <Button color="primary" className="w-75" onClick={handleFetchLocation}>
                                                Fetch Current Location
                                            </Button>
                                            <Button color="warning" className="w-25" onClick={handleReset}>
                                                Reset
                                            </Button>
                                        </div>
                                        <Button
                                            className="w-100"
                                            color="success"
                                            onClick={handleSave}
                                            disabled={!latitude || !longitude}
                                        >
                                            Save Location
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Religion</Label>
                                        <Select
                                            options={religionOptions}
                                            value={selectedReligion}
                                            onChange={setSelectedReligion}
                                            placeholder="Select Religion..."
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>    
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Caste Category</Label>
                                        <Select
                                            options={casteCategoryOptions}
                                            value={selectedCasteCategory}
                                            onChange={setSelectedCasteCategory}
                                            placeholder="Select Caste Category..."
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Caste</Label>
                                        <Select
                                            options={casteOptions}
                                            value={selectedCaste}
                                            onChange={setSelectedCaste}
                                            placeholder="Select Caste..."
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Sub-Caste</Label>
                                        <Select
                                            options={availableSubCastes}
                                            value={selectedSubCaste}
                                            onChange={setSelectedSubCaste}
                                            placeholder={selectedCaste ? "Select Sub-Caste..." : "Select a caste first"}
                                            isSearchable
                                            isDisabled={!selectedCaste}
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Party</Label>
                                        <Select
                                            options={partyOptions}
                                            value={selectedParty}
                                            onChange={setSelectedParty}
                                            placeholder="Select Party..."
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Category</Label>
                                        <Select
                                            options={categoryOptions}
                                            value={selectedCategory}
                                            onChange={setSelectedCategory}
                                            placeholder="Select Category..."
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Membership Number</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Membership Number"
                                            value={membershipNumber}
                                            onChange={(e) => setMembershipNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Languages</Label>
                                        <Select
                                            options={languageOptions}
                                            value={selectedLanguages}
                                            onChange={setSelectedLanguages}
                                            placeholder="Select Language"
                                            isSearchable
                                            isMulti
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Government Schemes</Label>
                                        <Select
                                            options={schemeOptions}
                                            value={selectedSchemes}
                                            onChange={setSelectedSchemes}
                                            placeholder="Select Schemes..."
                                            isMulti
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Feedback</Label>
                                        <Select
                                            options={feedbackOptions}
                                            value={selectedFeedback}
                                            onChange={setSelectedFeedback}
                                            placeholder="Select Feedback..."
                                            isMulti
                                            isSearchable
                                            classNamePrefix="react-select"
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Aadhar Number</Label>
                                        <Input
                                            className="form-control"
                                            type="number"
                                            placeholder="Enter Aadhar Number"
                                            value={aadharNumber}
                                            onChange={(e) => setAadharNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="6">
                                    <FormGroup className="mb-3">
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>PAN Number</Label>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter PAN Number"
                                            value={panNumber}
                                            onChange={(e) => setPanNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <FormGroup>
                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>Remarks</Label>
                                        <Input 
                                            type="textarea" 
                                            className="form-control" 
                                            rows="5" 
                                            placeholder="Enter Remarks"
                                            value={remarks}
                                            onChange={(e) => setRemarks(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <CardFooter className="text-end">
                                <Button color="primary" onClick={handleUpdateVoter}>
                                    Save Profile
                                </Button>
                            </CardFooter>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default RightSideTab;