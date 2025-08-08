export const SocialProfileStatus = [
  {
    title: "Posts",
    active: 1_908,
  },
  {
    title: "Followers",
    active: "34.0k",
  },
  {
    title: "Following",
    active: 897,
  },
];


// ../../../Data/Social.js or a new file like ../../../Data/Election.js
export const ElectionWidgetData = [
  {
    title: "BJP",
    image: "1.png",
    votePercent: 38.6,
    totalVotes: 3_456_789,
    subTitle: "Total Votes",
    status: "success",
    chart: {
      color: ["#4CAF50"],
      series: [38.6],
    },
  },
  {
    title: "TVK",
    image: "1.png",
    votePercent: 27.3,
    totalVotes: 2_445_321,
    subTitle: "Total Votes",
    status: "primary",
    chart: {
      color: ["#2196F3"],
      series: [27.3],
    },
  },
  {
    title: "DMK",
    image: "1.png",
    votePercent: 18.4,
    totalVotes: 1_654_110,
    subTitle: "Total Votes",
    status: "warning",
    chart: {
      color: ["#FFC107"],
      series: [18.4],
    },
  },
  {
    title: "AIDMK",
    image: "1.png",
    votePercent: 10.1,
    totalVotes: 902_124,
    subTitle: "Total Votes",
    status: "danger",
    chart: {
      color: ["#F44336"],
      series: [10.1],
    },
  },
  {
    title: "NTK",
    image: "1.png",
    votePercent: 5.6,
    totalVotes: 498_903,
    subTitle: "Total Votes",
    status: "secondary",
    chart: {
      color: ["#9C27B0"],
      series: [5.6],
    },
  },
  {
    title: "Others",
    image: "1.png",
    votePercent: 0,
    totalVotes: 0,
    subTitle: "Total Votes",
    status: "light",
    chart: {
      color: ["#BDBDBD"],
      series: [0],
    },
  },
];



export const SocialWidgetData = [
  {
    title: "Facebook",
    image: "1.png",
    gros: 22.9,
    total: 12_098,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["var(--theme-default)"],
      series: [78],
    },
  },
   {
    title: "Facebook",
    image: "1.png",
    gros: 22.9,
    total: 12_098,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["var(--theme-default)"],
      series: [78],
    },
  },
  {
    title: "Instagram",
    image: "2.png",
    gros: 27.4,
    total: 15_080,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["#FFA941"],
      series: [70],
    },
  },
  {
    title: "Twitter",
    image: "3.png",
    gros: 14.09,
    total: 12_564,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["#57B9F6"],
      series: [50],
    },
  },
];

export const SocialWidgetDataWidgetPage = [
  {
    title: "Facebook",
    image: "1.png",
    gros: 22.9,
    total: 12_098,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["var(--theme-default)"],
      series: [78],
    },
  },
  {
    title: "Instagram",
    image: "2.png",
    gros: 27.4,
    total: 15_080,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["#FFA941"],
      series: [70],
    },
  },
  {
    title: "Twitter",
    image: "3.png",
    gros: 14.09,
    total: 12_564,
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["#57B9F6"],
      series: [50],
    },
  },
  {
    title: "Youtube",
    image: "4.png",
    gros: 14.09,
    total: 68_954,
    subTitle: "Followers",
    status: "secondary",
    chart: {
      color: ["var(--theme-secondary)"],
      series: [80],
    },
  },
];

export const SmallWidgetsData = [
  {
    title: "Photo Clicks",
    total: 76,
    gros: 72.9,
    chart: {
      series: [
        {
          name: "photo",
          data: [10, 12, 41, 36, 60, 58],
        },
      ],
      color: "#54BA4A",
    },
  },
  {
    title: "Link Clicks",
    total: 89,
    gros: 79.9,
    chart: {
      series: [
        {
          name: "photo",
          data: [10, 12, 41, 36, 60, 58],
        },
      ],
      color: "var(--theme-secondary)",
    },
  },
];

export const AllCampaignsTable = {
  header: ["AD Platform", "Campaign", "GEO", "Profitability", "Max Participation Avai.", "Status", "Create"],
  body: [
    {
      ADPlatform: "facebook",
      icon: "facebook",
      campaign: "Jane Cooper",
      GEO: "UK",
      profitability: 45.6,
      maxParticipation: 9_786,
      status: "Active",
    },
    {
      ADPlatform: "instagram",
      icon: "instagram",
      campaign: "Floyd Miles",
      GEO: "DE",
      profitability: 12.3,
      maxParticipation: 19_7098,
      status: "Active",
    },
    {
      ADPlatform: "pinterest",
      icon: "pinterest",
      campaign: "Guy Hawkins",
      GEO: "ES",
      profitability: 65.6,
      maxParticipation: 90_986,
      status: "Active",
    },
    {
      ADPlatform: "twitter",
      icon: "twitter",
      campaign: "Travis Wright",
      GEO: "ES",
      profitability: 35.6,
      maxParticipation: 23_654,
      status: "Inactive",
    },
    {
      ADPlatform: "you-tube",
      icon: "youtube-play",
      campaign: "Mark Green",
      GEO: "UK",
      profitability: 45.6,
      maxParticipation: 12_796,
      status: "Inactive",
    },
  ],
};

export const NotificationsData = [
  {
    image: '1.jpg',
    title: 'DMK leading in Chennai South',
    subTitle: '5 minutes ago',
    badge: '+12,300 votes',
  },
  {
    image: '2.jpg',
    title: 'BJP gains in Coimbatore',
    subTitle: '10 minutes ago',
    badge: '+8,970 votes',
  },
  {
    image: '3.jpg',
    title: 'TVK closing gap in Salem',
    subTitle: '30 minutes ago',
    badge: '+3,000 votes',
  },
  {
    image: '4.jpg',
    title: 'AIADMK ahead in Trichy',
    subTitle: '1 hour ago',
    badge: '+5,200 votes',
  },
  {
    image: '5.jpg',
    title: 'NTK trailing in Madurai',
    subTitle: '2 hours ago',
    badge: '-1,100 votes',
  },
];

export const ElectionTableData = {
  header: [
    "Party",
    "Candidate",
    "Seats Won",
    "Vote Share (%)",
    "Popular Votes",
    "Popular Vote (%)",
    "Status"
  ],
  body: [
    {
      party: "DMK",
      icon: "flag",
      candidate: "M. K. Stalin",
      electoralVotes: 133,
      electoralPercent: 45.4,
      popularVotes: 38_217_903,
      popularPercent: 41.0,
      status: "Won"
    },
    {
      party: "AIADMK",
      icon: "flag",
      candidate: "Edappadi K. Palaniswami",
      electoralVotes: 66,
      electoralPercent: 30.1,
      popularVotes: 28_301_234,
      popularPercent: 30.4,
      status: "Lost"
    },
    {
      party: "TVK",
      icon: "flag",
      candidate: "Vijay",
      electoralVotes: 12,
      electoralPercent: 8.6,
      popularVotes: 7_812_900,
      popularPercent: 8.3,
      status: "Active"
    },
    {
      party: "BJP",
      icon: "flag",
      candidate: "L. Murugan",
      electoralVotes: 4,
      electoralPercent: 5.2,
      popularVotes: 3_123_876,
      popularPercent: 6.8,
      status: "Active"
    },
    {
      party: "NTK",
      icon: "flag",
      candidate: "Seeman",
      electoralVotes: 0,
      electoralPercent: 0.0,
      popularVotes: 2_934_129,
      popularPercent: 3.2,
      status: "Active"
    },
    {
      party: "Others",
      icon: "flag",
      candidate: "Various",
      electoralVotes: 1,
      electoralPercent: 1.0,
      popularVotes: 1_201_234,
      popularPercent: 2.1,
      status: "Active"
    }
  ]
};
