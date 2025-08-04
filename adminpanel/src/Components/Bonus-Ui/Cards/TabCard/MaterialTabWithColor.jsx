import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {MaterialTabWithColor } from '../../../../Constant';
import { TabCardData } from '../../../Common/Data/Bonus-ui';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { Btn } from "../../../../AbstractElements";
import { useForm } from "react-hook-form";
import {Row, CardHeader, CardFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import {  UsersCountryMenu, AboutMe, UpdateProfile, Address, PostalCode, Country, City } from '../../../../Constant';
import Select from 'react-select';
import { FaUsers, FaMale, FaFemale } from 'react-icons/fa';
import { RibbonData } from '../../../Common/Data/Bonus-ui';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

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
  { value: "TVK", label: "Tamizhaga Vettri Kazhagam (TVK)" }, // ✅ Added Vijay's party
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

const MaterialTabWithColorClass = ({ selectedItem }) => {
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
    const [searchQuery, setSearchQuery] = useState('');
    const [printModalOpen, setPrintModalOpen] = useState(false);
    const [availablePrinters, setAvailablePrinters] = useState([]);
    const [selectedPrinter, setSelectedPrinter] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [membershipNumber, setMembershipNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [remarks, setRemarks] = useState("");
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('1');
    const { register, formState: { errors } } = useForm();
    const onEditSubmit = (data) => {
        alert(data)
    }


    if (!selectedItem) return null;

    const availableSubCastes =
        selectedCaste && subCasteOptions[selectedCaste.value]
        ? subCasteOptions[selectedCaste.value]
        : [];
   
        
    const handleFetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude.toFixed(6);
        const long = position.coords.longitude.toFixed(6);

        setLatitude(lat);
        setLongitude(long);
        setLocationValue(`${lat}, ${long}`); 
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};


const relatedMembers = RibbonData.filter(
    (data) =>
    data.door === selectedItem.door &&
    data.id !== selectedItem.id &&
    data.relationType !== selectedItem.relationType
);

const filteredMembers = relatedMembers.filter(member => {
  const query = searchQuery.toLowerCase();
  return (
    member.name.toLowerCase().includes(query) ||
    member.relationName.toLowerCase().includes(query) ||
    member.voterId.toLowerCase().includes(query) ||
    member.door.toLowerCase().includes(query) ||
    member.serial.toString().includes(query) ||
    member.section.toString().includes(query) ||
    member.part.toString().includes(query)
  );
});

  // Reset all fields
  const handleReset = () => {
    setLatitude("");
    setLongitude("");
    setLocationValue("");
  };

  // Save manually from modal
  const handleSave = () => {
    const formattedLocation = `${latitude}, ${longitude}`;
    setLocationValue(formattedLocation);
    setModalOpen(false);
  };


 const handleScanPrinters = () => {
        setIsScanning(true);
        // Simulate scanning for printers
        setTimeout(() => {
            const newPrinters = [
                { id: '4', name: 'New Bluetooth Printer', type: 'bluetooth' },
            ];
            setAvailablePrinters(prev => [...prev, ...newPrinters]);
            setIsScanning(false);
        }, 2000);
    };

    const handlePrint = () => {
        if (selectedPrinter) {
            alert(`Printing to ${selectedPrinter.name}`);
            setPrintModalOpen(false);
            // In a real app, you would call the printing API here
        } else {
            alert('Please select a printer first');
        }
    };
    
const handleUpdateVoter = async () => {
  try {
    const payload = {
      voterHistory: selectedOptions.map(opt => opt.value),
      religion: selectedReligion?.value || null,
      casteCategory: selectedCasteCategory?.value || null,
      caste: selectedCaste?.value || null,
      subCaste: selectedSubCaste?.value || null,
      party: selectedParty?.value || null,
      location: locationValue || null,
      languages: selectedLanguages.map(opt => opt.value),
      governmentSchemes: selectedSchemes.map(opt => opt.value),
      feedback: selectedFeedback.map(opt => opt.value),
      mobileNumber,
      whatsappNumber,
      dateOfBirth,
      membershipNumber,
      aadharNumber,
      panNumber,
      remarks,
    };

    const res = await fetch(
      `/api/voters/${selectedItem.voterId}`, 
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) throw new Error("Failed to update voter");
    
    alert("Voter updated successfully!");
  } catch (err) {
    console.error(err);
    alert("Update failed: " + err.message);
  }
};

    return (
        <Fragment>
            {TabCardData.map((item, i) =>
                <Col lg="12" className='xl-100 box-col-12' xl="12" key={i}>
                    <Card>
                        <HeaderCard title="Additional Info"/>
                        <CardBody>
                            <div className="tabbed-card">
                                <Nav className={item.navClass}>
                                    <NavItem>
                                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                            {item.homeIcon ? item.homeIcon : ''} Basic
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                            {item.glassIcon ? item.glassIcon : ''} Family
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                            {item.contactIcon ? item.contactIcon : ''} Share
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                            {item.contactIcon ? item.contactIcon : ''} Friends
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                       <Form>
                                            <Row>
                                                <Col sm="6" md="6">
                                                    <FormGroup>
                                                        <Label className="form-label">Voter History</Label>
                                                        <Select
                                                        options={voterHistoryOptions}
                                                        isMulti                
                                                        value={selectedOptions} 
                                                        onChange={setSelectedOptions}
                                                        placeholder="Select Voter History..."
                                                        classNamePrefix="select"
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                                 <Col sm="6" md="6">
                                                <FormGroup className="mb-3">
                                                    <Label
                                                    className="form-label"
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                    Mobile Number
                                                    </Label>
                                                    <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter Mobile Number"
                                                    style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    />
                                                </FormGroup>
                                                </Col>
                                                <Col sm="6" md="6">
                                                   <FormGroup className="mb-3">
                                                    <Label
                                                    className="form-label"
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                    Whatsapp Number
                                                    </Label>
                                                    <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter Whatsapp Number"
                                                    style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    />
                                                </FormGroup>
                                                </Col>
                                            <Col sm="6" md="6">
                                                <FormGroup className="mb-3">
                                                    <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>
                                                    Date of Birth
                                                    </Label>
                                                    <Input
                                                    className="form-control"
                                                    type="date"
                                                    placeholder="Select Date of Birth"
                                                    />
                                                </FormGroup>
                                                </Col>

                                                  <Col sm="9" md="9">
                                                    <FormGroup>
                                                    <Label className="form-label" 
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}>Location</Label>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        value={locationValue}
                                                        placeholder="Latitude, Longitude"
                                                        onClick={() => setModalOpen(true)}
                                                        readOnly
                                                         style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    />
                                                    </FormGroup>
                                                </Col>

                                                <Col sm="3" md="3">
                                                    <FormGroup>
                                                     <Label className="form-label invisible">Fetch</Label>
                                                    <Button
                                                        color="primary"
                                                        onClick={() => setModalOpen(true)}
                                                        className="w-100"
                                                        style={{
                                                        height: "38px",
                                                        }}
                                                    >
                                                        Fetch Location
                                                    </Button>
                                                    </FormGroup>
                                                </Col>

                                          {/* Popup Modal */}
                                                <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} centered>
                                                    <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Set Location</ModalHeader>
                                                    <ModalBody>
                                                    <Row className="g-3">
                                                        <Col md="6">
                                                        <FormGroup>
                                                            <Label>Latitude</Label>
                                                            <Input
                                                            type="text"
                                                            value={latitude}
                                                            onChange={(e) => setLatitude(e.target.value)}
                                                            placeholder="Enter Latitude"
                                                             style={{
                                                                borderRadius: "6px",
                                                                border: "1px solid #ccc",
                                                                padding: "8px 12px",
                                                                fontSize: "0.9rem",
                                                            }}
                                                            />
                                                        </FormGroup>
                                                        </Col>
                                                        <Col md="6">
                                                        <FormGroup>
                                                            <Label>Longitude</Label>
                                                            <Input
                                                            type="text"
                                                            value={longitude}
                                                            onChange={(e) => setLongitude(e.target.value)}
                                                            placeholder="Enter Longitude"
                                                             style={{
                                                                borderRadius: "6px",
                                                                border: "1px solid #ccc",
                                                                padding: "8px 12px",
                                                                fontSize: "0.9rem",
                                                            }}
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
                                                        className="w-100 custom-btn-outline"
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
                                                        <Label className="form-label" style={{ fontWeight: "500", marginBottom: "6px" }}>
                                                        Religion
                                                        </Label>
                                                        <Select
                                                        options={religionOptions}
                                                        value={selectedReligion}
                                                        onChange={setSelectedReligion}
                                                        placeholder="Select Religion..."
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                        />
                                                    </FormGroup>
                                                    </Col>    
                                                 <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                        <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                        >
                                                        Caste Category
                                                        </Label>
                                                        <Select
                                                        options={casteCategoryOptions}
                                                        value={selectedCasteCategory}
                                                        onChange={setSelectedCasteCategory}
                                                        placeholder="Select Caste Category..."
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                                  <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                        <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                        >
                                                        Caste
                                                        </Label>
                                                        <Select
                                                        options={casteOptions}
                                                        value={selectedCaste}
                                                        onChange={setSelectedCaste}
                                                        placeholder="Select Caste..."
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                               
                                                  <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                    <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                        Sub-Caste
                                                    </Label>
                                                    <Select
                                                        options={availableSubCastes}
                                                        value={selectedSubCaste}
                                                        onChange={setSelectedSubCaste}
                                                        placeholder={
                                                        selectedCaste ? "Select Sub-Caste..." : "Select a caste first"
                                                        }
                                                        isSearchable
                                                        isDisabled={!selectedCaste}
                                                        classNamePrefix="react-select"
                                                        styles={{
                                                        control: (provided) => ({
                                                            ...provided,
                                                            borderRadius: "6px",
                                                            borderColor: "#ced4da",
                                                            minHeight: "38px",
                                                            boxShadow: "none",
                                                            "&:hover": { borderColor: "#86b7fe" },
                                                        }),
                                                        menu: (provided) => ({
                                                            ...provided,
                                                            zIndex: 9999,
                                                        }),
                                                        }}
                                                    />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                    <Label className="form-label" style={{ fontWeight: 500 }}>
                                                        Party
                                                    </Label>
                                                    <Select
                                                        options={partyOptions}
                                                        value={selectedParty}
                                                        onChange={setSelectedParty}
                                                        placeholder="Select Party..."
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                    />
                                                    </FormGroup>
                                                </Col>
                                                  <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                        <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                        >
                                                        Category
                                                        </Label>
                                                        <Select
                                                        options={categoryOptions}
                                                        value={selectedCategory}
                                                        onChange={setSelectedCategory}
                                                        placeholder="Select Category..."
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                                <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                    <Label
                                                    className="form-label"
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                    Membership Number
                                                    </Label>
                                                    <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter Membership Number"
                                                    style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    />
                                                </FormGroup>
                                                </Col>
                                                <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                        <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                        >
                                                        Languages
                                                        </Label>
                                                        <Select
                                                        options={languageOptions}
                                                        value={selectedLanguages}
                                                        onChange={setSelectedLanguages}
                                                        placeholder="Select Language"
                                                        isSearchable
                                                        isMulti
                                                        classNamePrefix="react-select"
                                                        />
                                                    </FormGroup>
                                                    </Col>
                                                <Col md="12">
                                                    <FormGroup className="mb-3">
                                                        <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                        >
                                                        Government Schemes
                                                        </Label>
                                                        <Select
                                                        options={schemeOptions}
                                                        value={selectedSchemes}
                                                        onChange={setSelectedSchemes}
                                                        placeholder="Select Schemes..."
                                                        isMulti
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                        />
                                                     </FormGroup>
                                                    </Col>
                                                <Col md="12">
                                                    <FormGroup className="mb-3">
                                                        <Label
                                                        className="form-label"
                                                        style={{ fontWeight: "500", marginBottom: "6px" }}
                                                        >
                                                        Feedback
                                                        </Label>
                                                        <Select
                                                        options={feedbackOptions}
                                                        value={selectedFeedback}
                                                        onChange={setSelectedFeedback}
                                                        placeholder="Select Feedback..."
                                                        isMulti
                                                        isSearchable
                                                        classNamePrefix="react-select"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                              
                                                <Col sm="6" md="6">
                                                   <FormGroup className="mb-3">
                                                    <Label
                                                    className="form-label"
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                    Aadhar Number
                                                    </Label>
                                                    <Input
                                                    className="form-control"
                                                    type="number"
                                                    placeholder="Enter Aadhar Number"
                                                    style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    />
                                                </FormGroup>
                                                </Col>
                                                <Col sm="6" md="6">
                                                    <FormGroup className="mb-3">
                                                    <Label
                                                    className="form-label"
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                    PAN Number
                                                    </Label>
                                                    <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter PAN Number"
                                                    style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    />
                                                </FormGroup>
                                                </Col>
                                                
                                                <Col md="12">
                                                    <div> <Label
                                                    className="form-label"
                                                    style={{ fontWeight: "500", marginBottom: "6px" }}
                                                    >
                                                   Remarks
                                                    </Label>
                                                        <Input type="textarea" className="form-control" rows="5" placeholder="Enter Remarks" 
                                                        style={{
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "8px 12px",
                                                        fontSize: "0.9rem",
                                                    }}  />
                                                    </div>
                                        
                                                </Col>
                                            </Row>
                                        
                                       <CardFooter className="text-end">
                                            <Btn 
                                                attrBtn={{ color: "primary", type: "button", onClick: handleUpdateVoter }}
                                            >
                                                {UpdateProfile}
                                            </Btn>
                                            </CardFooter>
                                    </Form>
                                    </TabPane>

                                   <TabPane tabId="2">
                                    <div>
                                        {/* Updated Search Box with working functionality */}
                                        <Form className="theme-form mb-3">
                                        <div className="input-group">
                                            <Input 
                                            className="form-control-plaintext" 
                                            type="search" 
                                            placeholder="Search by name, relation, ID, etc..."
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            style={{
                                                padding: '8px 12px',
                                                border: '1px solid #ced4da',
                                                borderRadius: '4px'
                                            }}
                                            />
                                            <Btn 
                                            attrBtn={{ 
                                                color: "primary", 
                                                className: "input-group-text",
                                                style: { cursor: 'pointer' }
                                            }}
                                            >
                                            Search
                                            </Btn>
                                        </div>
                                        </Form>

                                        <h4 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '20px' }}>
                                        Family Members {filteredMembers.length > 0 && `(${filteredMembers.length})`}
                                        </h4>

                                        <Row className="g-4">
                                        {filteredMembers.length > 0 ? (
                                            filteredMembers.map((member) => (
                                            <Col xs="12" md="6" key={member.id}>
                                                <Card className="shadow-sm h-100">
                                                {/* Rest of your card content remains exactly the same */}
                                                <CardBody className="d-flex flex-column">
                                                    {/* Serial / Section / Part */}
                                                    <Row className="pb-2 border-bottom mb-2" style={{ fontSize: '0.85rem', color: '#555' }}>
                                                    <Col xs="4"><strong>Serial:</strong> {member.serial}</Col>
                                                    <Col xs="4"><strong>Section:</strong> {member.section}</Col>
                                                    <Col xs="4"><strong>Part:</strong> {member.part}</Col>
                                                    </Row>

                                                    {/* Image and Details */}
                                                    <Row className="align-items-center flex-grow-1">
                                                    <Col md="5" sm="5">
                                                        <div style={{ border: "1px solid #ccc", borderRadius: "6px", overflow: "hidden" }}>
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="img-fluid rounded"
                                                        />
                                                        <div className="small text-white text-center" style={{
                                                            background: "#21599f",
                                                            borderTop: "1px solid #aaa",
                                                            padding: "2px 4px",
                                                            fontWeight: "bold"
                                                        }}>
                                                            {member.voterId}
                                                        </div>
                                                        </div>
                                                        <div className="pt-2 mt-2 d-flex justify-content-between align-items-center">
                                                        <span>
                                                            {member.gender === 'Female' ? (
                                                            <FaFemale className="text-danger" />
                                                            ) : member.gender === 'Male' ? (
                                                            <FaMale className="text-primary" />
                                                            ) : (
                                                            <FaUsers className="text-secondary" />
                                                            )}{' '}
                                                            {member.age} | Other
                                                        </span>
                                                        </div>
                                                    </Col>

                                                    <Col md="7" sm="7">
                                                        <div
                                                        className="fw-bold"
                                                        style={{ fontSize: '0.9rem', lineHeight: '1.3', wordBreak: 'break-word', paddingBottom: "10px" }}
                                                        >
                                                        {member.name.split('/').map((part, index) => (
                                                            <span key={index}>{part.trim()}<br /></span>
                                                        ))}
                                                        </div>
                                                        <div
                                                        className="fw-bold"
                                                        style={{ fontSize: '0.9rem', lineHeight: '1.3', wordBreak: 'break-word', paddingBottom: "20px" }}
                                                        >
                                                        {member.relationName.split('/').map((part, index) => (
                                                            <span key={index}>{part.trim()}<br /></span>
                                                        ))}
                                                        </div>
                                                        <div className="small text-muted">{member.door}</div>
                                                    </Col>
                                                    </Row>

                                                    {/* Footer with icons */}
                                                    <div className="border-top pt-2 mt-3 d-flex justify-content-between align-items-center">
                                                    <div className="d-flex gap-2">
                                                        <span style={{ backgroundColor: 'lightgray', borderRadius: '50%', padding: '10px' }}>
                                                        <i className="fa fa-phone text-primary" style={{ fontSize: '1.2rem' }}></i>
                                                        </span>
                                                        <span 
                                                        style={{ backgroundColor: 'lightgray', borderRadius: '50%', padding: '10px' }}
                                                        onClick={() => navigate(`/cuba-context/app/users/edit/${member.voterId}`, { state: member })}
                                                        >
                                                        <i className="fa fa-pencil text-primary" style={{ fontSize: '1.2rem' }}></i>
                                                        </span>
                                                    </div>
                                                    <div className="position-relative">
                                                        <FaUsers
                                                        className={member.gender === 'Female' ? 'text-danger' : 'text-primary'}
                                                        style={{ fontSize: '1.5rem' }}
                                                        />
                                                        <div style={{
                                                        position: 'absolute',
                                                        top: '-6px',
                                                        right: '-8px',
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        width: '18px',
                                                        height: '18px',
                                                        fontSize: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        }}>
                                                        3
                                                        </div>
                                                    </div>
                                                    </div>
                                                </CardBody>
                                                </Card>
                                            </Col>
                                            ))
                                        ) : (
                                            <Col xs="12">
                                            <Card style={{ padding: '12px 25px', textAlign: 'center' }}>
                                                <p style={{ margin: 0 }}>
                                                {searchQuery ? 'No matching family members found' : 'No related family members found'}
                                                </p>
                                            </Card>
                                            </Col>
                                        )}
                                        </Row>
                                    </div>
                                    </TabPane>



                                <TabPane tabId="3">
                                <Row className="justify-content-center" style={{ marginTop: '30px' }}>
                                    {/* WhatsApp */}
                                    <Col xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
                                    <Card style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <a href='https://wa.me/?text=Check%20this%20out!' target='_blank' rel="noreferrer">
                                        <i className='fa fa-whatsapp' style={{ fontSize: '30px', color: '#25D366' }} />
                                        </a>
                                        <p style={{ marginTop: '10px', fontSize: '14px' }}>WhatsApp</p>
                                    </Card>
                                    </Col>

                                    {/* SMS */}
                                    <Col xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
                                    <Card style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <a href='sms:?body=Check%20this%20out!' rel="noreferrer">
                                        <i className='fa fa-comment' style={{ fontSize: '30px', color: '#007bff' }} />
                                        </a>
                                        <p style={{ marginTop: '10px', fontSize: '14px' }}>SMS</p>
                                    </Card>
                                    </Col>

                                    {/* Generic Share */}
                                    <Col xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
                                    <Card style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <a href='#' onClick={() => navigator.share && navigator.share({ title: 'Share', url: window.location.href })}>
                                        <i className='fa fa-share-alt' style={{ fontSize: '30px', color: '#17a2b8' }} />
                                        </a>
                                        <p style={{ marginTop: '10px', fontSize: '14px' }}>Share</p>
                                    </Card>
                                    </Col>

                                    {/* Print Button */}
                                <Col xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
                                <Card style={{ 
                                    width: '100px', 
                                    height: '100px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }} onClick={() => setPrintModalOpen(true)}>
                                    <div style={{ textAlign: 'center' }}>
                                    <i className='fa fa-print' style={{ 
                                        fontSize: '30px', 
                                        color: '#6c757d' 
                                    }} />
                                    <p style={{ 
                                        marginTop: '10px', 
                                        fontSize: '14px',
                                        marginBottom: 0
                                    }}>Print</p>
                                    </div>
                                </Card>
                                </Col>

                                {/* Printer Selection Modal */}
                                <Modal isOpen={printModalOpen} toggle={() => setPrintModalOpen(!printModalOpen)} centered>
                                <ModalHeader toggle={() => setPrintModalOpen(!printModalOpen)}>
                                    Select Printer
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-muted mb-3">Choose a device to connect</p>

                                    {availablePrinters.length === 0 ? (
                                    <p className="text-center text-muted">No printers found</p>
                                    ) : (
                                    availablePrinters.map((printer) => (
                                        <div 
                                        key={printer.id} 
                                        onClick={() => setSelectedPrinter(printer)}
                                        className="d-flex justify-content-between align-items-center border rounded px-3 py-2 mb-2"
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: selectedPrinter?.id === printer.id ? '#f0f0f0' : 'white'
                                        }}
                                        >
                                        <div style={{ flex: 1 }}>
                                            <strong>{printer.name}</strong>
                                        </div>
                                        <div style={{ flex: 1, textAlign: 'center' }}>
                                            {printer.type || 'CLASSIC'}
                                        </div>
                                        <div style={{ flex: 1, textAlign: 'right' }}>
                                            <span className="text-muted small">Unpaired</span>
                                        </div>
                                        </div>
                                    ))
                                    )}
                                </ModalBody>
                                <ModalFooter className="d-flex justify-content-between">
                                    <Button 
                                    color="primary" 
                                    size="sm"
                                    onClick={handleScanPrinters}
                                    disabled={isScanning}
                                    >
                                    {isScanning ? (
                                        <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Scanning...
                                        </>
                                    ) : 'Scan'}
                                    </Button>
                                    <div>
                                    <Button 
                                        color="secondary" 
                                        size="sm" 
                                        className="me-2"
                                        onClick={() => setPrintModalOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button 
                                        color="success" 
                                        size="sm"
                                        onClick={handlePrint}
                                        disabled={!selectedPrinter}
                                    >
                                        Connect
                                    </Button>
                                    </div>
                                </ModalFooter>
                                </Modal>

                                </Row>
                                 <h4 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '20px' }}>Part & Section Info</h4>

                                {/* Dummy Card with 2 lines of data */}
                                <Row className="justify-content-start mb-4">
                                    <Col xs="12" md="12">
                                    <Card style={{ padding: '12px 25px', textAlign: 'left' }}>
                                        <p style={{ margin: 0 ,color:'blue'}}>1.This is line one of dummy data.</p>
                                        <p style={{ margin: 0 }}>1-This is line two of dummy data.</p>
                                    </Card>
                                    </Col>
                                </Row>
                                </TabPane>


                                     <TabPane tabId="4">
                                         {/* <Form className='theme-form'>
                                            <div className='input-group '>
                                                <Input className='form-control-plaintext' type='search' placeholder='Search..' />
                                                <span className='btn btn-primary input-group-text'>Search</span>
                                            </div>
                                        </Form> */}
                                        <Form className="theme-form mb-3">
                                        <div className="input-group">
                                            <Input 
                                            className="form-control-plaintext" 
                                            type="search" 
                                            placeholder="Search by name, relation, etc..."
                                            style={{
                                                padding: '8px 12px',
                                                border: '1px solid #ced4da',
                                                borderRadius: '4px'
                                            }}
                                            />
                                            <Btn 
                                            attrBtn={{ 
                                                color: "primary", 
                                                className: "input-group-text",
                                                style: { cursor: 'pointer' }
                                            }}
                                            >
                                            Search
                                            </Btn>
                                        </div>
                                        </Form>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default MaterialTabWithColorClass;