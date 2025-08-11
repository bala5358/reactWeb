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
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
// Coimbatore assembly constituencies in the district (per official list) :contentReference[oaicite:1]{index=1}
const constituencies = [
  "Mettupalayam",
  "Sulur",
  "Kavundampalayam",
  "Coimbatore (North)",
  "Thondamuthur",
  "Coimbatore (South)",
  "Singanallur",
  "Kinathukadavu",
  "Pollachi",
  "Valparai"
];
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedConstituency, setSelectedConstituency] = useState("Singanallur");

  const toggle = () => setDropdownOpen(prev => !prev);
  const handleSelect = (name) => setSelectedConstituency(name);
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
        <h5>{data?.constituency?.name || 'Constituency'} Command Center</h5>
        <div className="last-updated">
         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              caret
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #ccc",
                width: "220px",
                textAlign: "left"
              }}
            >
              {selectedConstituency}
            </DropdownToggle>
            <DropdownMenu end style={{ backgroundColor: "white" }}>
              {constituencies.map((name, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleSelect(name)}
                  style={{ color: "black" }}
                >
                  {name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {/* Main Dashboard Grid */}
     <Row gutter={[16, 16]} className="dashboard-grid">
  {/* Metrics Section */}
{/* <Col xs={24} lg={24} className="metrics-col">
  <CoverageCards stats={data?.stats || {}} />
</Col> */}


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
