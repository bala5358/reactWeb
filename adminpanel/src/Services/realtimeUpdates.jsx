import { useState, useEffect } from 'react';

// Mock realtime updates - replace with WebSocket connection
const mockUpdates = [
  {
    id: 1,
    type: 'voter',
    boothId: 1,
    boothName: 'Booth 1',
    agentName: 'Rahul K.',
    message: 'Updated voter details for Priya M.',
    timestamp: '2023-05-05T14:30:00Z'
  },
  // More updates...
];

const mockAlerts = [
  {
    id: 101,
    type: 'issue',
    boothId: 3,
    boothName: 'Booth 3',
    agentName: 'Anjali P.',
    message: 'Voter list discrepancy reported',
    timestamp: '2023-05-05T14:25:00Z',
    priority: 'high'
  }
];

export function useRealtimeUpdates(constituencyId, filters = {}) {
  const [updates, setUpdates] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Filter logic
    let filteredUpdates = mockUpdates;
    let filteredAlerts = mockAlerts;

    if (filters.booth && filters.booth !== 'all') {
      filteredUpdates = filteredUpdates.filter(u => u.boothId === filters.booth);
      filteredAlerts = filteredAlerts.filter(a => a.boothId === filters.booth);
    }

    if (filters.type && filters.type !== 'all') {
      filteredUpdates = filteredUpdates.filter(u => u.type === filters.type);
    }

    if (filters.priority) {
      filteredUpdates = filteredUpdates.filter(u => u.priority);
    }

    setUpdates(filteredUpdates);
    setAlerts(filteredAlerts);

    // In real app, this would setup WebSocket connection
    const ws = new WebSocket(`wss://yourapi.com/realtime?constituency=${constituencyId}`);

    return () => ws.close();
  }, [constituencyId, filters]);

  return { updates, alerts };
}