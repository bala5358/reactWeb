import React from "react";
import indiaStatesPath from "./indiaStatesPath.json"; // SVG paths for each state

const IndiaMap = ({ selectedState }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      style={{ width: "100%", height: "100%" }}
    >
      {Object.entries(indiaStatesPath).map(([stateName, pathData]) => (
        <path
          key={stateName}
          d={pathData}
          fill={selectedState === stateName ? "#ff9800" : "#90caf9"}
          stroke="#333"
          strokeWidth="1"
          onClick={() => alert(`Clicked on ${stateName}`)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </svg>
  );
};

export default IndiaMap;
