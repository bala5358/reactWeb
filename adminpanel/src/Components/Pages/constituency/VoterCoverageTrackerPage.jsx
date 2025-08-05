import { Card } from 'antd';
import ProgressGrid from '../../CommandCenter/CoverageTracker/ProgressGrid';
import TrendChart from '../../CommandCenter/CoverageTracker/TrendChart';
import { useParams } from 'react-router-dom';
import { useElectionData } from '../../../Services/electionData';

export default function VoterCoverageTrackerPage() {
  const { constituencyId } = useParams();
  const { data, loading, error } = useElectionData(constituencyId);

  if (loading) return <div>Loading coverage data...</div>;
  if (error) return <div>Error loading coverage tracker</div>;

  const boothsData = data?.booths || [];
  const trendData = data?.trend || { dates: [], values: [] };

  return (
    <>
      <Card title="Booth Coverage Progress">
        <ProgressGrid data={boothsData} />
      </Card>
      <Card title="Coverage Trend Analysis" style={{ marginTop: 16 }}>
        <TrendChart trend={trendData} />
      </Card>
    </>
  );
}
