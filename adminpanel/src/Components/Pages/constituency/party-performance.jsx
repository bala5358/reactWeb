// src/pages/constituency-command-center/party-performance.jsx
import React from "react";
import PartyPerformanceChart from "./PartyPerformanceChart";


const PartyPerformancePage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Party Performance</h1>
      <PartyPerformanceChart />
    </div>
  );
};

export default PartyPerformancePage;
