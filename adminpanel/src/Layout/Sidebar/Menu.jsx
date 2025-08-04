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
     
         { path: `/voter`,icon: "user",  title: "Voter", type: "link" },
   
    ],  
  },  
  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [
 
       { path: `/guardian`,icon: "user",  title: "Guardian", type: "link" },
        { path: `/pollday`, icon: "knowledgebase", type: "link", active: true, title: "Poll" },
     
 
      {
        title: "Contact",
        icon: "contact",
        type: "link",
        active: false,
        path: `/app/contact-app/contacts`,
      },
      { path: `/task`, icon: "task", type: "link", title: "Task" },
      { path: `/app/calendar/draggable-calendar`, icon: "calendar", type: "link", title: "Calendar" },
 
 
    ],
  },
 
{
    menutitle: "Election Team",
    menucontent: "Elction",
    Items: [
     
      { path: `/user-list`, icon: "user", title: "User-List", type: "link" },
        { path: `/parties-List`, icon: "user", title: "Parties", type: "link" },
      { path: `/agent-List`, icon: "user", title: "Agent", type: "link" },
      { path: `/agent-reports`, icon: "user", title: "Agent Report", type: "link" },
    ],
  },
  {
    menutitle: "Miscellaneous",
    menucontent: "Bouns Pages & Apps",
    Items: [
 
      {
        title: "Settings",
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/settings/appbanner`, title: "AppBanner", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/caste`, title: "Caste", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/language`, title: "Language", type: "link" },
        ],
      },

    ],
  },
];