// // // // import { useParams } from 'react-router-dom';
// // // // import { Row, Col, Spin, Empty, Card } from 'antd';
// // // // import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
// // // // import CoverageCards from '../../CommandCenter/CoverageTracker/CoverageCards';
// // // // import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
// // // // import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
// // // // import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
// // // // import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
// // // // import { useElectionData } from '../../../Services/electionData';
// // // // import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
// // // // import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
// // // // import './CommandCenter.css'; // Custom responsive styles

// // // // export default function CommandCenter() {
// // // //   const { constituencyId } = useParams();
// // // //   const { data, loading, error } = useElectionData(constituencyId);

// // // //   // Responsive breakpoints
// // // //   const responsiveProps = {
// // // //     xs: 24,  // Mobile (portrait)
// // // //     sm: 24,  // Mobile (landscape)
// // // //     md: 12,  // Tablet
// // // //     lg: 12,  // Desktop
// // // //     xl: 16   // Large desktop
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="loading-container">
// // // //         <Spin size="large" tip="Loading Command Center Data..." />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <Card className="error-card">
// // // //         <Empty 
// // // //           description={
// // // //             <span className="error-message">
// // // //               Failed to load data. Please try again later.
// // // //             </span>
// // // //           }
// // // //         />
// // // //       </Card>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="command-center-container">
// // // //       <div className="header-section">
// // // //         <h1>{data?.constituency?.name || 'Constituency'} Command Center</h1>
// // // //         <div className="last-updated">
// // // //           Last updated: {new Date(data?.lastUpdated).toLocaleString()}
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Dashboard Grid */}
// // // //       <Row gutter={[16, 16]} className="dashboard-grid">
// // // //         {/* Heatmap Section */}
// // // //         <Col {...responsiveProps} className="heatmap-col">
// // // //           <Card className="dashboard-card" title="Booth Turnout Heatmap">
// // // //             <div className="heatmap-wrapper">
// // // //               <Heatmap
// // // //                 booths={data?.booths || []}
// // // //                 turnout={data?.turnout || {}}
// // // //                 geojson={data?.geojson || null}
// // // //               />
// // // //               <HeatmapLegend />
// // // //             </div>
// // // //           </Card>
// // // //         </Col>

// // // //         {/* Metrics Section */}
// // // //         <Col xs={24} lg={8} className="metrics-col">
// // // //           <CoverageCards stats={data?.stats || {}} />
// // // //         </Col>

// // // //         {/* Progress Grid */}
// // // //         <Col xs={24} md={24} lg={12} className="progress-col">
// // // //           <Card className="dashboard-card" title="Booth Coverage Progress">
// // // //             <ProgressGrid booths={data?.booths || []} />
// // // //           </Card>
// // // //         </Col>

// // // //         {/* Trend Chart */}
// // // //         <Col xs={24} md={24} lg={12} className="trend-col">
// // // //           <Card className="dashboard-card" title="Coverage Trend Analysis">
// // // //             {data?.trend?.dates ? (
// // // //               <TrendChart trend={data.trend} />
// // // //             ) : (
// // // //               <Empty description="No trend data available" />
// // // //             )}
// // // //           </Card>
// // // //         </Col>
// // // //       </Row>

// // // //       {/* Live Feed Section */}
// // // //       <Card 
// // // //         className="live-feed-card" 
// // // //         title={
// // // //           <div className="live-feed-header">
// // // //             <span>Live Activity Feed</span>
// // // //             <FeedFilters booths={data?.booths || []} />
// // // //           </div>
// // // //         }
// // // //       >
// // // //         <AlertBanner alerts={data?.alerts || []} />
// // // //         <div className="activity-feed-wrapper">
// // // //           <ActivityFeed activities={data?.activities || []} />
// // // //         </div>
// // // //       </Card>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useParams } from 'react-router-dom';
// // // import { Row, Col, Spin, Empty, Card } from 'antd';
// // // import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
// // // import CoverageCards from '../../CommandCenter/CoverageTracker/CoverageCards';
// // // import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
// // // import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
// // // import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
// // // import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
// // // import { useElectionData } from '../../../Services/electionData';
// // // import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
// // // import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
// // // import './CommandCenter.css';

// // // // ✅ Mock sample data for demo purposes
// // // const sampleData = {
// // //   constituency: { name: "Dubai Central" },
// // //   lastUpdated: new Date().toISOString(),
// // //   booths: [
// // //     { id: 1, name: "Booth 1", location: "Area A" },
// // //     { id: 2, name: "Booth 2", location: "Area B" }
// // //   ],
// // //   turnout: { percentage: 62 },
// // //   geojson: { center: [25.276987, 55.296249] },
// // //   stats: {
// // //     totalVoters: 250000,
// // //     surveyed: 187500,
// // //     coverage: 75
// // //   },
// // //   trend: {
// // //     dates: ["2023-05-01","2023-05-02","2023-05-03","2023-05-04","2023-05-05"],
// // //     values: [50, 55, 60, 65, 70]
// // //   },
// // //   alerts: [
// // //     { id: 1, message: "Urgent alert requiring attention", type: "urgent" }
// // //   ],
// // //   activities: [
// // //     { id: 1, description: "Booth 1 survey started", time: "10:00 AM" },
// // //     { id: 2, description: "Booth 2 report submitted", time: "11:30 AM" }
// // //   ]
// // // };

// // // export default function CommandCenter() {
// // //   const { constituencyId } = useParams();
// // //   const { data, loading, error } = useElectionData(constituencyId);

// // //   // ✅ Merge real API data with sample fallback
// // //   const displayData = data && Object.keys(data).length > 0 ? data : sampleData;

// // //   if (loading) {
// // //     return (
// // //       <div className="loading-container">
// // //         <Spin size="large" tip="Loading Command Center Data..." />
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     console.warn("API failed, showing sample data.");
// // //   }

// // //   return (
// // //     <div className="command-center-container">
// // //       <div className="header-section">
// // //         <h1>{displayData.constituency?.name} Command Center</h1>
// // //         <div className="last-updated">
// // //           Last updated: {new Date(displayData.lastUpdated).toLocaleString()}
// // //         </div>
// // //       </div>

// // //       <Row gutter={[16, 16]}>
// // //         {/* Heatmap */}
// // //         <Col xs={24} lg={16}>
// // //           <Card title="Booth Turnout Heatmap">
// // //             <Heatmap
// // //               booths={displayData.booths}
// // //               turnout={displayData.turnout}
// // //               geojson={displayData.geojson}
// // //             />
// // //             <HeatmapLegend />
// // //           </Card>
// // //         </Col>

// // //         {/* Stats */}
// // //         <Col xs={24} lg={8}>
// // //           <CoverageCards stats={displayData.stats} />
// // //         </Col>

// // //         {/* Progress */}
// // //         <Col xs={24} md={12}>
// // //           <Card title="Booth Coverage Progress">
// // //             <ProgressGrid booths={displayData.booths} />
// // //           </Card>
// // //         </Col>

// // //         {/* Trend */}
// // //         <Col xs={24} md={12}>
// // //           <Card title="Coverage Trend Analysis">
// // //             {displayData.trend?.dates?.length ? (
// // //               <TrendChart trend={displayData.trend} />
// // //             ) : (
// // //               <Empty description="No trend data" />
// // //             )}
// // //           </Card>
// // //         </Col>
// // //       </Row>

// // //       {/* Live Feed */}
// // //       <Card
// // //         title={
// // //           <div style={{ display: "flex", justifyContent: "space-between" }}>
// // //             <span>Live Activity Feed</span>
// // //             <FeedFilters booths={displayData.booths} />
// // //           </div>
// // //         }
// // //       >
// // //         <AlertBanner alerts={displayData.alerts} />
// // //         <ActivityFeed activities={displayData.activities} />
// // //       </Card>
// // //     </div>
// // //   );
// // // }
// // // import { useParams } from 'react-router-dom';
// // // import { Row, Col, Spin, Empty, Card } from 'antd';
// // // import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
// // // import CoverageCards from '../../CommandCenter/CoverageTracker/CoverageCards';
// // // import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
// // // import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
// // // import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
// // // import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
// // // import { useElectionData } from '../../../Services/electionData';
// // // import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
// // // import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
// // // import './CommandCenter.css';

// // // // Sample booth progress data for fallback
// // // const sampleBoothProgress = [
// // //   {
// // //     boothId: 1,
// // //     boothName: "Booth 1",
// // //     status: "Complete",
// // //     coverage: 90,
// // //     lastUpdated: "2025-08-05 10:30 AM"
// // //   },
// // //   {
// // //     boothId: 2,
// // //     boothName: "Booth 2",
// // //     status: "In Progress",
// // //     coverage: 60,
// // //     lastUpdated: "2025-08-05 09:50 AM"
// // //   },
// // //   {
// // //     boothId: 3,
// // //     boothName: "Booth 3",
// // //     status: "Not Started",
// // //     coverage: 0,
// // //     lastUpdated: "2025-08-05 08:15 AM"
// // //   }
// // // ];

// // // // Sample trend chart data for fallback
// // // const sampleTrendData = {
// // //   dates: ["2025-08-01", "2025-08-02", "2025-08-03", "2025-08-04", "2025-08-05"],
// // //   values: [50, 60, 70, 80, 90]
// // // };

// // // export default function CommandCenter() {
// // //   const { constituencyId } = useParams();
// // //   const { data, loading, error } = useElectionData(constituencyId);

// // //   // Responsive breakpoints
// // //   const responsiveProps = {
// // //     xs: 24, sm: 24, md: 12, lg: 12, xl: 16
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="loading-container">
// // //         <Spin size="large" tip="Loading Command Center Data..." />
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <Card className="error-card">
// // //         <Empty 
// // //           description={
// // //             <span className="error-message">
// // //               Failed to load data. Please try again later.
// // //             </span>
// // //           }
// // //         />
// // //       </Card>
// // //     );
// // //   }

// // //   // Fallbacks
// // //   const boothsData = data?.booths && data.booths.length > 0 ? data.booths : sampleBoothProgress;
// // //   const trendData = data?.trend?.dates ? data.trend : sampleTrendData;

// // //   return (
// // //     <div className="command-center-container">
// // //       <div className="header-section">
// // //         <h1>{data?.constituency?.name || 'Constituency'} Command Center</h1>
// // //         <div className="last-updated">
// // //           Last updated: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : "No updates yet"}
// // //         </div>
// // //       </div>

// // //       {/* Main Dashboard Grid */}
// // //       <Row gutter={[16, 16]} className="dashboard-grid">
        
// // //         {/* Heatmap Section */}
// // //         <Col {...responsiveProps} className="heatmap-col">
// // //           <Card className="dashboard-card" title="Booth Turnout Heatmap">
// // //             <div className="heatmap-wrapper">
// // //               {data?.geojson ? (
// // //                 <Heatmap
// // //                   booths={data?.booths || []}
// // //                   turnout={data?.turnout || {}}
// // //                   geojson={data.geojson}
// // //                 />
// // //               ) : (
// // //                 <Empty description="No map data available" />
// // //               )}
// // //               <HeatmapLegend />
// // //             </div>
// // //           </Card>
// // //         </Col>

// // //         {/* Metrics Section */}
// // //         <Col xs={24} lg={8} className="metrics-col">
// // //           <CoverageCards stats={data?.stats || {}} />
// // //         </Col>

// // //         {/* Progress Grid */}
// // //         <Col xs={24} md={24} lg={12} className="progress-col">
// // //           <Card className="dashboard-card" title="Booth Coverage Progress">
// // //             <ProgressGrid data={boothsData} />
// // //           </Card>
// // //         </Col>

// // //         {/* Trend Chart */}
// // //         <Col xs={24} md={24} lg={12} className="trend-col">
// // //           <Card className="dashboard-card" title="Coverage Trend Analysis">
// // //             {trendData?.dates ? (
// // //               <TrendChart trend={trendData} />
// // //             ) : (
// // //               <Empty description="No trend data available" />
// // //             )}
// // //           </Card>
// // //         </Col>
// // //       </Row>

// // //       {/* Live Feed Section */}
// // //       <Card 
// // //         className="live-feed-card" 
// // //         title={
// // //           <div className="live-feed-header">
// // //             <span>Live Activity Feed</span>
// // //             <FeedFilters booths={data?.booths || []} />
// // //           </div>
// // //         }
// // //       >
// // //         <AlertBanner alerts={data?.alerts || []} />
// // //         <div className="activity-feed-wrapper">
// // //           <ActivityFeed activities={data?.activities || []} />
// // //         </div>
// // //       </Card>
// // //     </div>
// // //   );
// // // }


// // import { useParams } from 'react-router-dom';
// // import { Row, Col, Spin, Empty, Card } from 'antd';
// // import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
// // import CoverageCards from '../../CommandCenter/CoverageTracker/CoverageCards';
// // import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
// // import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
// // import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
// // import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
// // import { useElectionData } from '../../../Services/electionData';
// // import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
// // import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
// // import './CommandCenter.css';

// // // Sample booth progress data for fallback
// // const sampleBoothProgress = [
// //   {
// //     boothId: 1,
// //     boothName: "Booth 1",
// //     status: "Complete",
// //     coverage: 90,
// //     lastUpdated: "2025-08-05 10:30 AM"
// //   },
// //   {
// //     boothId: 2,
// //     boothName: "Booth 2",
// //     status: "In Progress",
// //     coverage: 60,
// //     lastUpdated: "2025-08-05 09:50 AM"
// //   },
// //   {
// //     boothId: 3,
// //     boothName: "Booth 3",
// //     status: "Not Started",
// //     coverage: 0,
// //     lastUpdated: "2025-08-05 08:15 AM"
// //   }
// // ];

// // // Sample trend chart data for fallback
// // const sampleTrendData = {
// //   dates: ["2025-08-01", "2025-08-02", "2025-08-03", "2025-08-04", "2025-08-05"],
// //   values: [50, 60, 70, 80, 90]
// // };

// // // Sample live feed data for fallback
// // const sampleActivities = [
// //   {
// //     id: 1,
// //     time: "2025-08-05 10:45 AM",
// //     booth: "Booth 1",
// //     message: "Voter turnout increased by 5% in the last hour.",
// //     type: "update"
// //   },
// //   {
// //     id: 2,
// //     time: "2025-08-05 10:20 AM",
// //     booth: "Booth 2",
// //     message: "Survey completed for 80% of registered voters.",
// //     type: "survey"
// //   },
// //   {
// //     id: 3,
// //     time: "2025-08-05 09:50 AM",
// //     booth: "Booth 3",
// //     message: "Low turnout alert triggered.",
// //     type: "alert"
// //   }
// // ];

// // export default function CommandCenter() {
// //   const { constituencyId } = useParams();
// //   const { data, loading, error } = useElectionData(constituencyId);

// //   // Responsive breakpoints
// //   const responsiveProps = {
// //     xs: 24, sm: 24, md: 12, lg: 12, xl: 16
// //   };

// //   if (loading) {
// //     return (
// //       <div className="loading-container">
// //         <Spin size="large" tip="Loading Command Center Data..." />
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <Card className="error-card">
// //         <Empty 
// //           description={
// //             <span className="error-message">
// //               Failed to load data. Please try again later.
// //             </span>
// //           }
// //         />
// //       </Card>
// //     );
// //   }

// //   // Fallbacks
// //   const boothsData = data?.booths && data.booths.length > 0 ? data.booths : sampleBoothProgress;
// //   const trendData = data?.trend?.dates ? data.trend : sampleTrendData;
// //   const activitiesData = data?.activities && data.activities.length > 0 ? data.activities : sampleActivities;

// //   return (
// //     <div className="command-center-container">
// //       <div className="header-section">
// //         <h1>{data?.constituency?.name || 'Constituency'} Command Center</h1>
// //         <div className="last-updated">
// //           Last updated: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : "No updates yet"}
// //         </div>
// //       </div>

// //       {/* Main Dashboard Grid */}
// //       <Row gutter={[16, 16]} className="dashboard-grid">
        
// //         {/* Heatmap Section */}
// //         <Col {...responsiveProps} className="heatmap-col">
// //           <Card className="dashboard-card" title="Booth Turnout Heatmap">
// //             <div className="heatmap-wrapper">
// //               {data?.geojson ? (
// //                 <Heatmap
// //                   booths={data?.booths || []}
// //                   turnout={data?.turnout || {}}
// //                   geojson={data.geojson}
// //                 />
// //               ) : (
// //                 <Empty description="No map data available" />
// //               )}
// //               <HeatmapLegend />
// //             </div>
// //           </Card>
// //         </Col>

// //         {/* Metrics Section */}
// //         <Col xs={24} lg={8} className="metrics-col">
// //           <CoverageCards stats={data?.stats || {}} />
// //         </Col>

// //         {/* Progress Grid */}
// //         <Col xs={24} md={24} lg={12} className="progress-col">
// //           <Card className="dashboard-card" title="Booth Coverage Progress">
// //             <ProgressGrid data={boothsData} />
// //           </Card>
// //         </Col>

// //         {/* Trend Chart */}
// //         <Col xs={24} md={24} lg={12} className="trend-col">
// //           <Card className="dashboard-card" title="Coverage Trend Analysis">
// //             {trendData?.dates ? (
// //               <TrendChart trend={trendData} />
// //             ) : (
// //               <Empty description="No trend data available" />
// //             )}
// //           </Card>
// //         </Col>
// //       </Row>

// //       {/* Live Feed Section */}
// //       <Card 
// //         className="live-feed-card" 
// //         title={
// //           <div className="live-feed-header">
// //             <span>Live Activity Feed</span>
// //             <FeedFilters booths={data?.booths || []} />
// //           </div>
// //         }
// //       >
// //         <AlertBanner alerts={data?.alerts || []} />
// //         <div className="activity-feed-wrapper">
// //           <ActivityFeed activities={activitiesData} />
// //         </div>
// //       </Card>
// //     </div>
// //   );
// // }

// import { useParams } from 'react-router-dom';
// import { Row, Col, Spin, Empty, Card } from 'antd';
// import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
// import CoverageCards from '../../CommandCenter/CoverageTracker/CoverageCards';
// import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
// import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
// import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
// import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
// import { useElectionData } from '../../../Services/electionData';
// import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
// import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
// import './CommandCenter.css';

// // Sample booth progress data
// const sampleBoothProgress = [
//   {
//     boothId: 1,
//     boothName: "Booth 1",
//     status: "Complete",
//     coverage: 90,
//     lastUpdated: "2025-08-05 10:30 AM"
//   },
//   {
//     boothId: 2,
//     boothName: "Booth 2",
//     status: "In Progress",
//     coverage: 60,
//     lastUpdated: "2025-08-05 09:50 AM"
//   },
//   {
//     boothId: 3,
//     boothName: "Booth 3",
//     status: "Not Started",
//     coverage: 0,
//     lastUpdated: "2025-08-05 08:15 AM"
//   }
// ];

// // Sample trend chart data
// const sampleTrendData = {
//   dates: ["2025-08-01", "2025-08-02", "2025-08-03", "2025-08-04", "2025-08-05"],
//   values: [50, 60, 70, 80, 90]
// };

// // Sample activities for live feed
// const sampleActivities = [
//   {
//     id: 1,
//     type: 'voter',
//     boothName: 'Booth 1',
//     agentName: 'John Doe',
//     message: 'Checked in 25 voters.',
//     timestamp: '2025-08-05T10:30:00Z'
//   },
//   {
//     id: 2,
//     type: 'issue',
//     boothName: 'Booth 2',
//     agentName: 'Jane Smith',
//     message: 'Reported missing ballot papers.',
//     timestamp: '2025-08-05T09:15:00Z'
//   },
//   {
//     id: 3,
//     type: 'turnout',
//     boothName: 'Booth 3',
//     agentName: 'David Johnson',
//     message: 'Turnout updated to 65%.',
//     timestamp: '2025-08-05T08:45:00Z'
//   }
// ];

// export default function CommandCenter() {
//   const { constituencyId } = useParams();
//   const { data, loading, error } = useElectionData(constituencyId);

//   // Responsive breakpoints
//   const responsiveProps = {
//     xs: 24, sm: 24, md: 12, lg: 12, xl: 16
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <Spin size="large" tip="Loading Command Center Data..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <Card className="error-card">
//         <Empty 
//           description={
//             <span className="error-message">
//               Failed to load data. Please try again later.
//             </span>
//           }
//         />
//       </Card>
//     );
//   }

//   // Fallbacks
//   const boothsData = data?.booths && data.booths.length > 0 ? data.booths : sampleBoothProgress;
//   const trendData = data?.trend?.dates ? data.trend : sampleTrendData;
//   const activitiesData = data?.activities && data.activities.length > 0 ? data.activities : sampleActivities;

//   return (
//     <div className="command-center-container">
//       <div className="header-section">
//         <h1>{data?.constituency?.name || 'Constituency'} Command Center</h1>
//         <div className="last-updated">
//           Last updated: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : "No updates yet"}
//         </div>
//       </div>

//       {/* Main Dashboard Grid */}
//       <Row gutter={[16, 16]} className="dashboard-grid">
        
//         {/* Heatmap Section */}
//         <Col {...responsiveProps} className="heatmap-col">
//           <Card className="dashboard-card" title="Booth Turnout Heatmap">
//             <div className="heatmap-wrapper">
//               {data?.geojson ? (
//                 <Heatmap
//                   booths={data?.booths || []}
//                   turnout={data?.turnout || {}}
//                   geojson={data.geojson}
//                 />
//               ) : (
//                 <Empty description="No map data available" />
//               )}
//               <HeatmapLegend />
//             </div>
//           </Card>
//         </Col>

//         {/* Metrics Section */}
//         <Col xs={24} lg={8} className="metrics-col">
//           <CoverageCards stats={data?.stats || {}} />
//         </Col>

//         {/* Progress Grid */}
//         <Col xs={24} md={24} lg={12} className="progress-col">
//           <Card className="dashboard-card" title="Booth Coverage Progress">
//             <ProgressGrid data={boothsData} />
//           </Card>
//         </Col>

//         {/* Trend Chart */}
//         <Col xs={24} md={24} lg={12} className="trend-col">
//           <Card className="dashboard-card" title="Coverage Trend Analysis">
//             {trendData?.dates ? (
//               <TrendChart trend={trendData} />
//             ) : (
//               <Empty description="No trend data available" />
//             )}
//           </Card>
//         </Col>
//       </Row>

//       {/* Live Feed Section */}
//       <Card 
//         className="live-feed-card" 
//         title={
//           <div className="live-feed-header">
//             <span>Live Activity Feed</span>
//             <FeedFilters booths={data?.booths || []} />
//           </div>
//         }
//       >
//         <AlertBanner alerts={data?.alerts || []} />
//         <div className="activity-feed-wrapper">
//           <ActivityFeed activities={activitiesData} />
//         </div>
//       </Card>
//     </div>
//   );
// }


import { useParams } from 'react-router-dom';
import { Row, Col, Spin, Empty, Card } from 'antd';
import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
import CoverageCards from '../../CommandCenter/CoverageTracker/CoverageCards';
import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
import { useElectionData } from '../../../Services/electionData';
import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
import './CommandCenter.css';
import { useState } from 'react';

// Sample booth progress data
const sampleBoothProgress = [
  { boothId: 1, boothName: "Booth 1", status: "Complete", coverage: 90, lastUpdated: "2025-08-05 10:30 AM" },
  { boothId: 2, boothName: "Booth 2", status: "In Progress", coverage: 60, lastUpdated: "2025-08-05 09:50 AM" },
  { boothId: 3, boothName: "Booth 3", status: "Not Started", coverage: 0, lastUpdated: "2025-08-05 08:15 AM" }
];

// Sample trend chart data
const sampleTrendData = {
  dates: ["2025-08-01", "2025-08-02", "2025-08-03", "2025-08-04", "2025-08-05"],
  values: [50, 60, 70, 80, 90]
};

// Sample activities for live feed
const sampleActivities = [
  { id: 1, type: 'voter', boothName: 'Booth 1', agentName: 'John Doe', message: 'Checked in 25 voters.', timestamp: '2025-08-05T10:30:00Z' },
  { id: 2, type: 'issue', boothName: 'Booth 2', agentName: 'Jane Smith', message: 'Reported missing ballot papers.', timestamp: '2025-08-05T09:15:00Z' },
  { id: 3, type: 'turnout', boothName: 'Booth 3', agentName: 'David Johnson', message: 'Turnout updated to 65%.', timestamp: '2025-08-05T08:45:00Z' }
];

export default function CommandCenter() {
  const { constituencyId } = useParams();
  const { data, loading, error } = useElectionData(constituencyId);

  // Fallbacks
  const boothsData = data?.booths && data.booths.length > 0 ? data.booths : sampleBoothProgress;
  const trendData = data?.trend?.dates ? data.trend : sampleTrendData;
  const allActivities = data?.activities && data.activities.length > 0 ? data.activities : sampleActivities;

  // State for filtered activities
  const [filteredActivities, setFilteredActivities] = useState(allActivities);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    let filtered = [...allActivities];

    // Booth filter
    if (filters.booth !== 'all') {
      filtered = filtered.filter(act => act.boothName === boothsData.find(b => b.boothId === filters.booth)?.boothName);
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(act => act.type === filters.type);
    }

    // Date range filter
    if (filters.dateRange && filters.dateRange.length === 2) {
      const [start, end] = filters.dateRange;
      filtered = filtered.filter(act => {
        const time = new Date(act.timestamp).getTime();
        return time >= start.toDate().getTime() && time <= end.toDate().getTime();
      });
    }

    setFilteredActivities(filtered);
  };

  // Loading state
  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading Command Center Data..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className="error-card">
        <Empty description={<span className="error-message">Failed to load data. Please try again later.</span>} />
      </Card>
    );
  }

  return (
    <div className="command-center-container">
      <div className="header-section">
        <h1>{data?.constituency?.name || 'Constituency'} Command Center</h1>
        <div className="last-updated">
          Last updated: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : "No updates yet"}
        </div>
      </div>

      {/* Main Dashboard Grid */}
     <Row gutter={[16, 16]} className="dashboard-grid">
  {/* Metrics Section */}
  <Col xs={24} lg={12} className="metrics-col">
    <CoverageCards stats={data?.stats || {}} />
  </Col>

  {/* Heatmap Section - Full Width */}
  <Col xs={24} sm={24} md={24} lg={24} xl={24} className="heatmap-col">
    <Card className="dashboard-card" title="Booth Turnout Heatmap">
      <div className="heatmap-wrapper">
        {data?.geojson ? (
          <Heatmap booths={data?.booths || []} turnout={data?.turnout || {}} geojson={data.geojson} />
        ) : (
          <Empty description="No map data available" />
        )}
        <HeatmapLegend />
      </div>
    </Card>
  </Col>

  {/* Progress Grid */}
  <Col xs={24} md={24} lg={12} className="progress-col">
    <Card className="dashboard-card" title="Booth Coverage Progress">
      <ProgressGrid data={boothsData} />
    </Card>
  </Col>

  {/* Trend Chart */}
  <Col xs={24} md={24} lg={12} className="trend-col">
    <Card className="dashboard-card" title="Coverage Trend Analysis">
      {trendData?.dates ? <TrendChart trend={trendData} /> : <Empty description="No trend data available" />}
    </Card>
  </Col>
</Row>


      {/* Live Feed Section */}
      <Card 
        className="live-feed-card" 
        title={
          <div className="live-feed-header">
            <span>Live Activity Feed</span>
            <FeedFilters booths={boothsData} onFilterChange={handleFilterChange} />
          </div>
        }
      >
        <AlertBanner alerts={data?.alerts || []} />
        <div className="activity-feed-wrapper">
          <ActivityFeed activities={filteredActivities} />
        </div>
      </Card>
    </div>
  );
}
