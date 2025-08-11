// import { Card } from 'antd';
// import { useState } from 'react';
// import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
// import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
// import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';
// import { useParams } from 'react-router-dom';
// import { useElectionData } from '../../../Services/electionData';

// // Sample booth progress data
// const sampleBoothProgress = [
//   { boothId: 1, boothName: "Booth 1", status: "Complete", coverage: 90, lastUpdated: "2025-08-05 10:30 AM" },
//   { boothId: 2, boothName: "Booth 2", status: "In Progress", coverage: 60, lastUpdated: "2025-08-05 09:50 AM" },
//   { boothId: 3, boothName: "Booth 3", status: "Not Started", coverage: 0, lastUpdated: "2025-08-05 08:15 AM" }
// ];

// // Sample activities for fallback
// const sampleActivities = [
//   { id: 1, type: 'voter', boothName: 'Booth 1', agentName: 'John Doe', message: 'Checked in 25 voters.', timestamp: '2025-08-05T10:30:00Z' },
//   { id: 2, type: 'issue', boothName: 'Booth 2', agentName: 'Jane Smith', message: 'Reported missing ballot papers.', timestamp: '2025-08-05T09:15:00Z' },
//   { id: 3, type: 'turnout', boothName: 'Booth 3', agentName: 'David Johnson', message: 'Turnout updated to 65%.', timestamp: '2025-08-05T08:45:00Z' }
// ];

// export default function LiveSubmissionFeedPage() {
//   const { constituencyId } = useParams();
//   const { data, loading, error } = useElectionData(constituencyId);

//   const boothsData = data?.booths && data.booths.length > 0 ? data.booths : sampleBoothProgress;
//   const allActivities = data?.activities && data.activities.length > 0 ? data.activities : sampleActivities;

//   // State for filtered activities
//   const [filteredActivities, setFilteredActivities] = useState(allActivities);

//   // Handle filter changes
//   const handleFilterChange = (filters) => {
//     let filtered = [...allActivities];

//     // Booth filter
//     if (filters.booth !== 'all') {
//       const boothName = boothsData.find(b => b.boothId === filters.booth)?.boothName;
//       filtered = filtered.filter(act => act.boothName === boothName);
//     }

//     // Type filter
//     if (filters.type !== 'all') {
//       filtered = filtered.filter(act => act.type === filters.type);
//     }

//     // Date range filter
//     if (filters.dateRange && filters.dateRange.length === 2) {
//       const [start, end] = filters.dateRange;
//       filtered = filtered.filter(act => {
//         const time = new Date(act.timestamp).getTime();
//         return time >= start.toDate().getTime() && time <= end.toDate().getTime();
//       });
//     }

//     setFilteredActivities(filtered);
//   };

//   if (loading) return <div>Loading live feed...</div>;
//   if (error) return <div>Error loading live submissions</div>;

//   return (
//     <Card 
//       title={
//         <div className="live-feed-header">
//           <span>Live Activity Feed</span>
//           <FeedFilters booths={boothsData} onFilterChange={handleFilterChange} />
//         </div>
//       }
//     >
//       <AlertBanner alerts={data?.alerts || []} />
//       <div className="activity-feed-wrapper">
//         <ActivityFeed activities={filteredActivities} />
//       </div>
//     </Card>
//   );
// }

import { Card, Row, Col, Typography, Divider } from 'antd';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FeedFilters from '../../CommandCenter/LiveFeed/FeedFilters';
import AlertBanner from '../../CommandCenter/LiveFeed/AlertBanner';
import ActivityFeed from '../../CommandCenter/LiveFeed/ActivityFeed';

import { useElectionData } from '../../../Services/electionData';


// Sample data
const sampleActivities = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  type: i % 3 === 0 ? 'issue' : i % 2 === 0 ? 'turnout' : 'voter',
  boothName: `Booth ${i + 1}`,
  agentName: `Agent ${i + 1}`,
  message: i % 3 === 0 
    ? 'Reported EVM malfunction.'
    : i % 2 === 0 
      ? `Turnout updated to ${50 + i * 2}%`
      : `Checked in ${20 + i} voters.`,
  timestamp: `2025-08-05T1${i}:30:00Z`
}));

export default function LiveActivityFeed() {
  const { constituencyId } = useParams();
  const [filteredActivities, setFilteredActivities] = useState(sampleActivities);

  const handleFilterChange = (filters) => {
    let filtered = [...sampleActivities];

    if (filters.booth !== 'all') {
      filtered = filtered.filter(act => act.boothName === `Booth ${filters.booth}`);
    }
    if (filters.type !== 'all') {
      filtered = filtered.filter(act => act.type === filters.type);
    }
    if (filters.dateRange && filters.dateRange.length === 2) {
      const [start, end] = filters.dateRange;
      filtered = filtered.filter(act => {
        const time = new Date(act.timestamp).getTime();
        return time >= start.toDate().getTime() && time <= end.toDate().getTime();
      });
    }

    setFilteredActivities(filtered);
  };

  return (
       <Fragment>
          <Breadcrumbs mainTitle='Live Activity Feed' parent='Live Activity Feed' title='Live Activity Feed' />
    <Card
      title={
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={4} style={{ margin: 0 }}>
              Live Activity Feed 
            </Typography.Title>
          </Col>
          <Col>
            <FeedFilters booths={[...Array(10)].map((_, i) => ({
              id: i + 1,
              name: `Booth ${i + 1}`
            }))} onFilterChange={handleFilterChange} />
          </Col>
        </Row>
      }
      style={{ margin: 20 }}
    >
      {/* Alerts */}
      <AlertBanner alerts={[{ message: "Power outage in Booth 3", type: "warning" }]} />
      <Divider />

      {/* Feed Section */}
      <div style={{ maxHeight: 500, overflowY: 'auto', paddingRight: 8 }}>
        <ActivityFeed activities={filteredActivities} />
      </div>
    </Card>
  </Fragment>

  );
}
