
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import React, { Fragment, useState, useContext } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// 🔵 Mock data based on constituency
const constituencyVotes = {
  "Mettupalayam": [3000, 2700, 1600],
  "Sulur": [2800, 2200, 1800],
  "Kavundampalayam": [3100, 2500, 2000],
  "Coimbatore (North)": [3500, 3000, 2200],
  "Thondamuthur": [2900, 2600, 1900],
  "Coimbatore (South)": [3400, 3100, 2100],
  "Singanallur": [3600, 3300, 2500],
  "Kinathukadavu": [2700, 2400, 1800],
  "Pollachi": [3200, 2800, 2300],
  "Valparai": [2500, 2000, 1700]
};

const constituencies = [
  "Mettupalayam",
  "Sulur",
  "Kavundampalayam",
  "Coimbatore (North)",
  "Thondamuthur",
  "Coimbatore (South)",
  "Singanallur",
  "Kinathukadavu",
  "Pollachi",
  "Valparai",
];
const PartyPerformanceChart = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedConstituency, setSelectedConstituency] = useState(
      constituencies[6]
    );
   
  
    const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const votes = constituencyVotes[selectedConstituency] || [0, 0, 0];

  const data = {
    labels: ["BJP", "TVK", "DMK"],
    datasets: [
      {
        label: "Votes",
        data: votes,
        backgroundColor: ["#2563eb", "#dc2626", "#f59e0b"]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "bottom" } }
  };

  return (
           <Col sm='12' xl='12'>
          
    <div className="bg-white p-4 rounded-xl shadow w-full">
      {/* <h3 className="text-lg font-semibold mb-3">{selectedConstituency} - Party Performance</h3> */}
         <Row className="align-items-center justify-content-between mb-4">
        <Col xs="12" md="6">
          <h5 className="fw-bold text-dark">{selectedConstituency} - Party Performance</h5>
        </Col>
        <Col xs="12" md="6" className="text-md-end mt-3 mt-md-0">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              caret
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #ccc",
                width: "220px",
                textAlign: "left",
              }}
            >
              {selectedConstituency}
            </DropdownToggle>
            <DropdownMenu end style={{ backgroundColor: "white" }}>
              {constituencies.map((c, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => setSelectedConstituency(c)}
                  style={{ color: "black" }}
                >
                  {c}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Bar data={data} options={options} />
    </div>
    </Col>
  );
};

export default PartyPerformanceChart;
