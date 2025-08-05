import { Table, Progress, Tag } from 'antd';

export default function ProgressGrid({ data }) {
  const columns = [
    {
      title: 'Booth',
      dataIndex: 'boothName',
      key: 'boothName',
      render: (text, record) => (
        <a href={`/constituency/booth-detail?id=${record.boothId}`}>{text}</a>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Complete' ? 'green' : status === 'In Progress' ? 'orange' : 'red';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    {
      title: 'Coverage',
      dataIndex: 'coverage',
      key: 'coverage',
      render: (coverage) => (
        <Progress 
          percent={coverage} 
          status={coverage < 75 ? 'exception' : 'normal'}
          size="small" 
        />
      )
    },
    {
      title: 'Last Update',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated'
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ y: 300 }}
    />
  );
}