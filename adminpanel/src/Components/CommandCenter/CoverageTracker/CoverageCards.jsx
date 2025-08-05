import { Card, Row, Col, Statistic } from 'antd';
import styles from '../BoothHeatmap/styles.module.css';

export default function CoverageCards({ stats }) {
  return (
    <Row gutter={16} className={styles.legend}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Total Registered Voters"
            value={stats.totalVoters}
            precision={0}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Voters Surveyed"
            value={stats.capturedVoters}
            precision={0}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Overall Coverage"
            value={stats.percentage}
            precision={1}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
}