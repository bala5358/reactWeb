export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
         {
        icon: "home",
        badge: true,
        active: false,
        path: `/dashboard`,
        title: "Dashboard",
        type: "link",
      },
     
    {
        title: "Booth Agent Dashboard",
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/settings/appbanner`, title: "My Booth Overview", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/caste`, title: "Voter Data Entry Form", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/language`, title: "Booth Turnout Submission", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/language`, title: "Field Notes", type: "link" },
        ],
      },
       {
        title: "Survey Agent Interferance",
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/settings/appbanner`, title: "Survey Task List", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/caste`, title: "Survey Response Form", type: "link" },
        ],
      },
       {
        title: "Cluster Supervisor Dashboard",
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/settings/appbanner`, title: "Cluster Summary View", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/caste`, title: "Agent Performer Tracker", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/language`, title: "Issue Feed", type: "link" },
        ],
      },
       {
        title: "Constituency Command Center",
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/settings/appbanner`, title: "Booth Level Heatmap", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/caste`, title: "Voter Coverage Tracker", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/language`, title: "Live Submission Feed", type: "link" },
        ],
      },
    ],  
  },  
];