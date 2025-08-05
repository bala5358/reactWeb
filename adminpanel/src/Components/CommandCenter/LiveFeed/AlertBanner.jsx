import { Alert, Space, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';

export default function AlertBanner({ alerts, onViewAll }) {
  if (alerts.length === 0) return null;

  return (
    <Alert
      message={
        <Space>
          <BellOutlined />
          <span>
            {alerts.length} urgent {alerts.length > 1 ? 'alerts' : 'alert'} requiring attention
          </span>
        </Space>
      }
      type="error"
      showIcon
      action={
        <Button 
          size="small" 
          type="text"
          onClick={onViewAll}
        >
          View All
        </Button>
      }
      style={{ marginBottom: 16 }}
    />
  );
}