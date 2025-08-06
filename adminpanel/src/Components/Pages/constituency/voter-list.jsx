// src/pages/constituency-command-center/voter-list.jsx
import React from "react";

const voters = [
  { name: "Rajesh Kumar", age: 32, gender: "Male", booth: "Booth 101", party: "Party A" },
  { name: "Priya Sharma", age: 28, gender: "Female", booth: "Booth 102", party: "Party B" },
  { name: "Amit Patel", age: 45, gender: "Male", booth: "Booth 103", party: "Party C" }
];

const VoterList = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Voter List</h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Booth</th>
              <th className="p-3">Party</th>
            </tr>
          </thead>
          <tbody>
            {voters.map((v, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">{v.name}</td>
                <td className="p-3">{v.age}</td>
                <td className="p-3">{v.gender}</td>
                <td className="p-3">{v.booth}</td>
                <td className="p-3">{v.party}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoterList;
