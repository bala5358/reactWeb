import { useEffect, useState } from "react";

// ===== Mock Data (replace with API calls) =====
const mockConstituency = {
  id: 1,
  name: 'Bangalore South',
  center: { lat: 12.9716, lng: 77.5946 },
  geojson: {},
  stats: {
    totalVoters: 250000,
    capturedVoters: 187500,
    percentage: 75.0
  },
  trend: {
    dates: ['2023-05-01', '2023-05-02', '2023-05-03', '2023-05-04', '2023-05-05'],
    percentages: [10, 25, 45, 60, 75]
  },
  booths: [
    { boothId: 1, boothName: 'Booth 1', coverage: 80, status: 'Complete', lastUpdated: '2023-05-05 14:30' },
  ],
  turnout: {
    1: { percentage: 82, voters: { captured: 820, total: 1000 } },
  },
  alerts: [
    { id: 1, message: 'Low turnout in Booth 1', type: 'warning' }
  ],
  activities: [
    { id: 1, booth: 'Booth 1', action: 'Turnout updated to 82%' }
  ]
};

const mockBoothDetails = {
  id: 1,
  name: 'Government School, Jayanagar',
  stats: {
    total: 1000,
    surveyed: 820,
    coverage: 82,
    turnout: 65
  },
  turnout: {
    morning: 25,
    afternoon: 45,
    evening: 65
  },
  voters: [
    { id: 1, name: 'Rahul', age: 32, gender: 'male', inclination: 'supporting' },
  ]
};

// ===== Simulated API Calls =====
export async function getConstituencyData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockConstituency), 500);
  });
}

export async function getBoothDetails(boothId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockBoothDetails), 500);
  });
}

// ===== Hook for Constituency Data =====
export function useElectionData(constituencyId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getConstituencyData(constituencyId)
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading constituency data", err);
        setError(err);
        setLoading(false);
      });
  }, [constituencyId]);

  return { data, loading, error };
}

// ===== Hook for Booth Details =====
export function useBoothData(boothId) {
  const [booth, setBooth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!boothId) return;
    setLoading(true);
    setError(null);
    getBoothDetails(boothId)
      .then(res => {
        setBooth(res);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading booth data", err);
        setError(err);
        setLoading(false);
      });
  }, [boothId]);

  return { booth, loading, error };
}
