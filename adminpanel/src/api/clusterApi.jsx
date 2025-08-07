export const fetchClusterSummary = async () => {
  // Replace this with actual API call later
  return [
    {
      booth_name: "Booth 12 - Gandhi Nagar",
      constituency: "Gandhi Nagar",
      agents: [
        
        { name: "Sita Devi" }
      ],
      submissions: {
        voter: 12,
        turnout: 5,
        survey: 3
      },
      target: 30
    },
    {
      booth_name: "Booth 15 - West Town",
      constituency: "West Zone",
      agents: [
        { name: "Anil" }
      ],
      submissions: {
        voter: 20,
        turnout: 8,
        survey: 2
      },
      target: 40
    },
    {
      booth_name: "Booth 21 - South Park",
      constituency: "South City",
      agents: [
        { name: "Lakshmi" }
      ],
      submissions: {
        voter: 25,
        turnout: 10,
        survey: 5
      },
      target: 50
    },
    {
      booth_name: "Booth 03 - North Heights",
      constituency: "North Hills",
      agents: [
        { name: "Mohan" }
      ],
      submissions: {
        voter: 15,
        turnout: 4,
        survey: 2
      },
      target: 35
    },
    {
      booth_name: "Booth 08 - East Green",
      constituency: "East Valley",
      agents: [
        { name: "Sunita" }
      ],
      submissions: {
        voter: 18,
        turnout: 6,
        survey: 3
      },
      target: 40
    },
    {
      booth_name: "Booth 11 - West Lake",
      constituency: "West Zone",
      agents: [
        { name: "Aarti" }
      ],
      submissions: {
        voter: 22,
        turnout: 9,
        survey: 4
      },
      target: 45
    }
  ];
};




export const fetchAgentPerformance = async () => {
  // Mock data — replace with real API call later
  return [
    {
      agent_id: "A01",
      name: "Agent A",
      booth_name: "Booth 1 - South",
      submissions_today: 12,
      daily_target: 15,
      completion_pct: 80,
      alert: null,
    },
    {
      agent_id: "A02",
      name: "Agent B",
      booth_name: "Booth 2 - East",
      submissions_today: 0,
      daily_target: 15,
      completion_pct: 0,
      alert: "No submissions today",
    },
    {
      agent_id: "A03",
      name: "Agent C",
      booth_name: "Booth 3 - North",
      submissions_today: 20,
      daily_target: 20,
      completion_pct: 100,
      alert: null,
    },
  ];
};



export const fetchIssueFeed = async () => {
  // Mocked issues
  return [
    {
      id: "I001",
      issue_type: "Audio Not Working",
      booth_name: "Booth 7",
      agent: "Agent B",
      description: "Device won't record voter audio.",
      media_type: "audio",
      media_url: "https://example.com/audio/sample.mp3",
      status: "open",
    },
    {
      id: "I002",
      issue_type: "Connectivity Issue",
      booth_name: "Booth 3",
      agent: "Agent C",
      description: "No internet for syncing survey results.",
      media_type: "image",
      media_url: "https://via.placeholder.com/150",
      status: "resolved",
    },
  ];
};

export const resolveIssue = async (id) => {
  console.log(`Resolved issue ${id}`);
  return true;
};

export const escalateIssue = async (id) => {
  console.log(`Escalated issue ${id}`);
  return true;
};


export const submitNewIssue = async (formData) => {
  const res = await fetch("/api/issues/create", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to submit");
  return await res.json();
};
