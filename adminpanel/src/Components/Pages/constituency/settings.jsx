// src/pages/constituency-command-center/settings.jsx
import React, { useState } from "react";

const SettingsPage = () => {
  const [boundary, setBoundary] = useState("Ward 12 to Ward 25");
  const [boothCount, setBoothCount] = useState(45);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white shadow rounded-lg p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Constituency Boundary</label>
          <input
            type="text"
            value={boundary}
            onChange={(e) => setBoundary(e.target.value)}
            className="mt-1 block w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Booth Count</label>
          <input
            type="number"
            value={boothCount}
            onChange={(e) => setBoothCount(e.target.value)}
            className="mt-1 block w-full border rounded-lg p-2"
          />
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
