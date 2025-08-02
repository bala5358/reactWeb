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
      // {
      //   title: "Dashboard",
      //   icon: "home",
      //   type: "sub",
      //   badge: "badge badge-light-primary",
      //   badgetxt: "5",
      //   active: false,
      //   children: [
      //     { path: `/dashboard/default`, title: "Default", type: "link" },
      //     { path: `/dashboard/e-commerce`, title: "E-commerce", type: "link" },
      //     { path: `/dashboard/online-course`, title: "Online Course", type: "link" },
      //     { path: `/dashboard/crypto`, title: "Crypto", type: "link" },
      //     { path: `/dashboard/social`, title: "Social", type: "link" },
      //   ],
      // },

      // {
      //   title: "Widgets",
      //   icon: "widget",
      //   type: "sub",
      //   active: false,
      //   children: [
      //     { path: `/widgets/general`, title: "General", type: "link" },
      //     { path: `/widgets/chart`, title: "Chart", type: "link" },
      //   ],
      // },
    ],
    
  },
  
//  {
//     menutitle: "Pages",
//     menucontent: "All neccesory pages added",
//     Items: [
//       {
//         icon: "sample-page",
//         badge2: true,
//         active: false,
//         path: `/pages/sample-page`,
//         title: "Sample-Page",
//         type: "link",
//       },
//       {
//         title: "Others",
//         icon: "others",
//         type: "sub",
//         children: [
//           {
//             title: "Error Pages",
//             type: "sub",
//             children: [
//               { title: "Error Page 1", type: "link", path: `/pages/errors/error400` },
//               { title: "Error Page 2", type: "link", path: `/pages/errors/error401` },
//               { title: "Error Page 3", type: "link", path: `/pages/errors/error403` },
//               { title: "Error Page 4", type: "link", path: `/pages/errors/error404` },
//               { title: "Error Page 5", type: "link", path: `/pages/errors/error500` },
//               { title: "Error Page 6", type: "link", path: `/pages/errors/error503` },
//             ],
//           },
//           {
//             title: "Authentication",
//             type: "sub",
//             children: [
//               // { title: "Login Simple", type: "link", path: `/pages/authentication/login-simple` },
//               { title: "Login", type: "link", path: `/pages/authentication/login` },
//               // { title: "Login with image two", type: "link", path: `/pages/authentication/login-img` },
//               // { title: "Login with validation", type: "link", path: `/pages/authentication/login-validation` },
//               // { title: "Login with tooltip", type: "link", path: `/pages/authentication/login-tooltip` },
//               // { title: "Login with sweetalert", type: "link", path: `/pages/authentication/login-sweetalert` },
//               // { title: "Register Simple", type: "link", path: `/pages/authentication/register-simple` },
//               // { title: "Register with Bg Image", type: "link", path: `/pages/authentication/register-bg-img` },
//               { title: "Register", type: "link", path: `/pages/authentication/register` },
//               { title: "Unloack User", type: "link", path: `/pages/authentication/unlock-user` },
//               { title: "Forget Password", type: "link", path: `/pages/authentication/forget-pwd` },
//               { title: "Reset Password", type: "link", path: `/pages/authentication/create-pwd` },
//               { title: "Maintenance", type: "link", path: `/pages/authentication/maintenance` },
//             ],
//           },
//           {
//             title: "Coming Soon",
//             type: "sub",
//             children: [
//               { title: "Coming Simple", type: "link", path: `/pages/comingsoon/comingsoon` },
//               { title: "Coming with Bg Video", type: "link", path: `/pages/comingsoon/coming-bg-video` },
//               { title: "Coming with bg Image", type: "link", path: `/pages/comingsoon/coming-bg-img` },
//             ],
//           },
//         ],
//       },
//     ],
//   },

  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [

      // { path: `/guardian`, icon: "user", title: "Guardian List", type: "link" },
       { path: `/guardian`,icon: "user",  title: "Guardian", type: "link" },
        { path: `/pollday`, icon: "knowledgebase", type: "link", active: true, title: "Poll" },
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
      // {
      //   title: "Users",
      //   icon: "user",
      //   path: `/profile`,
      //   type: "sub",
      //   bookmark: true,
      //   active: false,
      //   children: [
      //     { path: `/profile`, type: "link", title: "User Profile" },
      //     { path: `/app/users/edit`, type: "link", title: "User Edit" },
      //     { path: `/app/users/cards`, type: "link", title: "User Cards" },
      //   ],
      // },

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
      // { path: `/parties-List`, icon: "knowledgebase", type: "link", title: "Parties-List" },
      { path: `/agent-List`, icon: "user", title: "Agent", type: "link" },
      // { path: `/app/task`, icon: "task", type: "link", title: "Agent List" },
    ],
  },


  {
    menutitle: "Miscellaneous",
    menucontent: "Bouns Pages & Apps",
    Items: [

      { path: `/app/faq`, icon: "faq", type: "link", active: false, title: "FAQ" },

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
    

{
        title: "Settings",
        icon: "settings",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/settings/appbanner`, title: "AppBanner", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/caste`, title: "Caste", type: "link" },
          { path: `${process.env.PUBLIC_URL}/settings/language`, title: "Language", type: "link" },
        ],
      },


      { path: `/app/ecommerce/payment-details`, title: "Payment-Detail", type: "link" },
          { path: `/app/ecommerce/orderhistory`, title: "OrderHistory", type: "link" },
          { path: `/app/ecommerce/invoice`, title: "Invoice", type: "link" },
          { path: `/app/ecommerce/cart`, title: "Cart", type: "link" },
          { path: `/app/ecommerce/wishlist`, title: "Wishlist", type: "link" },
          { path: `/app/ecommerce/checkout`, title: "checkout", type: "link" },
          { path: `/app/ecommerce/pricing`, title: "Pricing", type: "link" },
        ],
      },

      { path: `/app/knowledgebase`, icon: "knowledgebase", type: "link", active: false, title: "Knowledgebase" },
    ],
  },
];
