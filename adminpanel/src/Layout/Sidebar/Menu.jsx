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
 
      { path: `/app/faq`, icon: "faq", type: "link", active: false, title: "FAQ" },
      { title: "VoterSurveyForm", icon: "file",  type: "link", path: `/forms/controls/votersurveyform` },
 
      {
        title: "Map",
        icon: "maps",
        type: "sub",
        active: false,
        children: [
          { path: `/app/map/googlemap`, type: "link", title: "GoogleMap" },
          { path: `/app/map/pigeonmap`, type: "link", title: "PigeonMap" },
         
        ],
      },
 
       {
        title: "Shop",
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: `/app/ecommerce/product`, title: "Products", type: "link" },
          { path: `/app/ecommerce/product-page/1`, title: "Product-Page", type: "link" },
          { path: `/app/ecommerce/product-list`, title: "Product-List", type: "link" },
 
 
 
      { path: `/app/ecommerce/payment-details`, title: "Payment-Detail", type: "link" },
          { path: `/app/ecommerce/orderhistory`, title: "OrderHistory", type: "link" },
          { path: `/app/ecommerce/invoice`, title: "Invoice", type: "link" },
          { path: `/app/ecommerce/cart`, title: "Cart", type: "link" },
          { path: `/app/ecommerce/wishlist`, title: "Wishlist", type: "link" },
          { path: `/app/ecommerce/checkout`, title: "checkout", type: "link" },
          { path: `/app/ecommerce/pricing`, title: "Pricing", type: "link" },
        ],
      },
 
 
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
 
      { path: `/app/knowledgebase`, icon: "knowledgebase", type: "link", active: false, title: "Knowledgebase" },
       { path: `/app/file-manager`, icon: "file", title: "File-Manager", type: "link" },
     
 
      {
        title: "Chat",
        icon: "chat",
        type: "sub",
        active: false,
        children: [
          { path: `/app/chat-app/chats`, type: "link", title: "Chats" },
          { path: `/app/chat-app/chat-video-app`, type: "link", title: "Video-app" },
        ],
      },
    ],
  },
];