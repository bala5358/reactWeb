export const MENUITEMS = [
  {
    menutitle: "Admin Panel",
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
        icon: "user-check",
        type: "sub",
        active: false,
        children: [
          { path: `/booth-agent/overview`, title: "My Booth Overview", type: "link" },
          { path: `/booth-agent/voter-entry`, title: "Voter Data Entry Form", type: "link" },
          { path: `/booth-agent/turnout`, title: "Booth Turnout Submission", type: "link" },
          { path: `/booth-agent/notes`, title: "Field Notes / Observations", type: "link" },
        ],
      },

      {
        title: "Survey Agent Interface",
        icon: "clipboard-list",
        type: "sub",
        active: false,
        children: [
          { path: `/survey-agent/tasks`, title: "Survey Task List", type: "link" },
          { path: `/survey-agent/response`, title: "Survey Response Form", type: "link" },
        ],
      },

      {
        title: "Cluster Supervisor Dashboard",
        icon: "users",
        type: "sub",
        active: false,
        children: [
          { path: `/cluster/summary`, title: "Cluster Summary View", type: "link" },
          { path: `/cluster/performance`, title: "Agent Performance Tracker", type: "link" },
          { path: `/cluster/issues`, title: "Issue Feed", type: "link" },
        ],
      },

      {
        title: "Constituency Command Center",
        icon: "activity",
        type: "sub",
        active: false,
        children: [
          { path: `/constituency/heatmap`, title: "Booth-Level Heatmap", type: "link" },
          { path: `/constituency/coverage`, title: "Voter Coverage Tracker", type: "link" },
          { path: `/constituency/submissions`, title: "Live Submission Feed", type: "link" },
        ],
      },

      {
        title: "Admin Tools",
        icon: "settings",
        type: "sub",
        active: false,
        children: [
          { path: `/admin/users`, title: "User & Role Assignment", type: "link" },
          { path: `/admin/geography`, title: "Geography Hierarchy Manager", type: "link" },
          { path: `/admin/surveys`, title: "Survey Builder", type: "link" },
        ],
      },
    ],
  },
];
