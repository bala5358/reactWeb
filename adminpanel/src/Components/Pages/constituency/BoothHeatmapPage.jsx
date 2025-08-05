import { Card, Empty } from 'antd';
import Heatmap from '../../CommandCenter/BoothHeatmap/Heatmap';
import HeatmapLegend from '../../CommandCenter/BoothHeatmap/HeatmapLegend';
import { useParams } from 'react-router-dom';
import { useElectionData } from '../../../Services/electionData';

export default function BoothHeatmapPage() {
  const { constituencyId } = useParams();
  const { data, loading, error } = useElectionData(constituencyId);

  if (loading) return <div>Loading map...</div>;
  if (error) return <div>Error loading map data</div>;

  return (
    <Card title="Booth Turnout Heatmap">
      {data?.geojson ? (
        <Heatmap
          booths={data?.booths || []}
          turnout={data?.turnout || {}}
          geojson={data.geojson}
        />
      ) : (
        <Empty description="No map data available" />
      )}
      <HeatmapLegend />
    </Card>
  );
}
