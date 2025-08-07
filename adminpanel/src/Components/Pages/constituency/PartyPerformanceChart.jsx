import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

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

const PartyPerformanceChart = ({ selectedConstituency }) => {
  const votes = constituencyVotes[selectedConstituency] || [0, 0, 0];

  const data = {
    labels: ["Party A", "Party B", "Party C"],
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
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h3 className="text-lg font-semibold mb-3">{selectedConstituency} - Party Performance</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PartyPerformanceChart;
