import { Timeline, Tag, Space } from 'antd';
import { 
  UserOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  FileTextOutlined 
} from '@ant-design/icons';

const eventIcons = {
  voter: <UserOutlined />,
  turnout: <CheckCircleOutlined />,
  issue: <WarningOutlined />,
  report: <FileTextOutlined />
};

const eventColors = {
  voter: 'blue',
  turnout: 'green',
  issue: 'red',
  report: 'orange'
};

export default function ActivityFeed({ activities }) {
  return (
    <Timeline mode="left" style={{ marginTop: 16 }}>
      {activities.map(activity => (
        <Timeline.Item
          key={activity.id}
          dot={eventIcons[activity.type]}
          color={eventColors[activity.type]}
        >
          <Space direction="vertical" size={0}>
            <div>
              <Tag color="geekblue">{activity.boothName}</Tag>
              <strong>{activity.agentName}</strong>
            </div>
            <div>{activity.message}</div>
            <div style={{ color: '#999', fontSize: 12 }}>
              {new Date(activity.timestamp).toLocaleString()}
            </div>
          </Space>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}