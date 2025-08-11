export const MENUITEMS = [
  {
    menutitle: "Super Admin Panel",
    menucontent: "Dashboards, Tools, and Monitoring",
    Items: [
      {
        icon: "home",
        badge: false,
        active: false,
        path: `/dashboard`,
        title: "Dashboard",
        type: "link",
      },

      {
        title: "Booth Agent Dashboard",
        icon: "others",
        type: "sub",
        active: false,
        children: [
          {
            path: `/booth-agent/booth-overview`,
            title: "My Booth Overview",
            type: "link",
          },
          {
            path: `/booth-agent/voter-list`,
            icon: "user",
            title: "Voter List",
            type: "link",
          },
          {
            path: `/booth-agent/Voter-age-filter`,
            title: "Voter Age Filter",
            type: "link",
          },
          {
            path: `/booth-agent/voter-entry`,
            title: "Voter Data Entry Form",
            type: "link",
          },
          {
            path: `/booth-agent/voter-contact-info`,
            title: "Voter Contact Information",
            type: "link",
          },
          {
            path: `/booth-agent/poll-day-operations`,
            title: "Poll Day Operations",
            type: "link",
          },
          {
            path: `/booth-agent/voters-turnout`,
            title: "Booth Turnout Submission",
            type: "link",
          },
          {
            path: `/booth-agent/BoothTeam-Resource`,
            title: "BoothTeam Resource",
            type: "link",
          },

          {
            path: `/booth-agent/field-notes`,
            title: "Field Notes / Observations",
            type: "link",
          },
        ],
      },

      {
        title: "Survey Agent Interface",
        icon: "others",
        type: "sub",
        active: false,
        children: [
          {
            path: `/survey-agent/tasks`,
            title: "Survey Task List",
            type: "link",
          },
          {
            path: `/survey-agent/response`,
            title: "Survey Response Form",
            type: "link",
          },
        ],
      },

      {
        title: "Cluster Supervisor Hub",
        icon: "others",
        type: "sub",
        children: [
          {
            title: "Cluster Summary View",
            type: "sub",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/clustersummary/boothlist`,
                title: "Booth List",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/clustersummary/submissionratespage`,
                title: "Submission Rates Page",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/clustersummary/agentactivitylogs`,
                title: "Agent Activity Logs",
                type: "link",
              },
            ],
          },
          {
            title: "Agent Performance Tracker",
            type: "sub",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/agentperformance/dailysubmissions`,
                title: "Daily Submissions",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/agentperformance/completionpercentage`,
                title: "Completion Percentage",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/agentperformance/agentalerts`,
                title: "Agent Alerts",
                type: "link",
              },
            ],
          },
          {
            title: "Issue Feed",
            type: "sub",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/issuefeed/issueform`,
                title: "Issue Form",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/issuefeed/boothissues`,
                title: "Booth Issues",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/issuefeed/resolveescalatelist`,
                title: "Resolve escalate list",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/issuefeed/issuecommentstimeline`,
                title: "Issue Comments Timeline",
                type: "link",
              },
            ],
          },
        ],
      },

      {
        title: "Constituency Hub",
        icon: "task",
        type: "sub",
        active: false,
        children: [
          { path: `/constituency-dashboard`, title: "dashboard", type: "link" },
          { path: `/singanallur`, title: "Voter", type: "link" },
          { path: `/booth-status`, title: "Booth Status", type: "link" },
          {
            path: `/party-performance`,
            title: "Party Performance",
            type: "link",
          },

          { path: `/alerts`, title: "Alerts", type: "link" },
          {
            path: `/agent-management`,
            title: "Agent Management",
            type: "link",
          },
          { path: `/reports`, title: "Reports", type: "link" },
          {
            path: `/command-center/constituency/:constituencyId`,
            title: "Booth-Level-Heatmap",
            type: "link",
          },
          {
            path: `/command-center/constituency/:constituencyId/booths/:boothId`,
            title: "Voter-Coverage-Tracker",
            type: "link",
          },
          {
            path: `/command-center/constituency/:constituencyId/live-feed`,
            title: "Live-Submission-Feed",
            type: "link",
          },
        ],
      },

      {
        title: "Role Managements",
        icon: "others",
        type: "sub",
        active: false,
        children: [
          { path: `/admin-dashboard`, title: "Admins Dashboard", type: "link" },

          { path: `/add/constitution`, title: "Constitutions", type: "link" },
          {
            path: `/add/constitution-list`,
            title: "Constitutions Agents List",
            type: "link",
          },
          { path: `/add/clusteragent`, title: "Cluster Agents", type: "link" },
          {
            path: `/add/clusteragent-list`,
            title: "Cluster Agents List",
            type: "link",
          },
          { path: `/add/surveyagent`, title: "Survey Agents", type: "link" },
          {
            path: `/add/surveyagent-list`,
            title: "Survey Agents List",
            type: "link",
          },
          { path: `/add/boothagent`, title: "Booth Agents", type: "link" },
          {
            path: `/add/boothagent-list`,
            title: "Booth Agents List",
            type: "link",
          },
          { path: `/add/admin`, title: "Admins", type: "link" },
          { path: `/add/admin-list`, title: "Admins List", type: "link" },
        ],
      },
    ],
  },

  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [
      { path: `/guardian`, icon: "user", title: "Guardian", type: "link" },
      {
        path: `/pollday`,
        icon: "knowledgebase",
        type: "link",
        active: true,
        title: "Poll",
      },
      { path: `/task`, icon: "task", type: "link", title: "Task" },
    ],
  },

  {
    menutitle: "Election Team",
    menucontent: "Elction",
    Items: [
      { path: `/user-list`, icon: "user", title: "User-List", type: "link" },
      { path: `/parties-List`, icon: "user", title: "Parties", type: "link" },
      { path: `/agent-List`, icon: "user", title: "Agent", type: "link" },
    ],
  },
];
