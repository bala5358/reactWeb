import { Row, Col } from 'antd';
import styles from './styles.module.css';

export default function HeatmapLegend() {
  return (
    <Row justify="center" gutter={16} className={styles.legend}>
      <Col>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#ff4d4f' }} />
          <span>0-30% Turnout</span>
        </div>
      </Col>
      <Col>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#faad14' }} />
          <span>31-60% Turnout</span>
        </div>
      </Col>
      <Col>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#52c41a' }} />
          <span>61-100% Turnout</span>
        </div>
      </Col>
    </Row>
  );
}