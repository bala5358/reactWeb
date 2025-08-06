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

const PartyPerformanceChart = () => {
  const data = {
    labels: ["Party A", "Party B", "Party C"],
    datasets: [
      {
        label: "Votes",
        data: [3200, 2800, 1500],
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
      <h3 className="text-lg font-semibold mb-3">Party Performance</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PartyPerformanceChart;
