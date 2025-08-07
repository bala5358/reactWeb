import { useParams, useNavigate } from 'react-router-dom';
import { 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Table, 
  Tag, 
  Button, 
  Progress,
  Empty,
  Spin,
  Divider 
} from 'antd';
import { useBoothData } from '../../../Services/electionData';
import './BoothDetail.css'; // Custom responsive styles
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useState } from 'react';
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
export default function BoothDetail() {
  const { boothId, constituencyId } = useParams();
  const navigate = useNavigate();
  const { booth, loading, error } = useBoothData(boothId);
 const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedConstituency, setSelectedConstituency] = useState("Singanallur");

  const toggle = () => setDropdownOpen(prev => !prev);
  const handleSelect = (name) => setSelectedConstituency(name);
  // Responsive column configurations
  const statColProps = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 6
  };

  const contentColProps = {
    xs: 24,
    lg: 12
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading Booth Data..." />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="error-card">
        <Empty 
          description={
            <span className="error-message">
              Failed to load booth data. Please try again later.
            </span>
          }
        />
      </Card>
    );
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 150
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      responsive: ['md']
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      onFilter: (value, record) => record.gender === value,
      responsive: ['sm']
    },
    {
      title: 'Inclination',
      dataIndex: 'inclination',
      key: 'inclination',
      render: (val) => (
        <Tag color={val === 'supporting' ? 'green' : val === 'opposing' ? 'red' : 'orange'}>
          {val}
        </Tag>
      ),
      responsive: ['sm']
    }
  ];

  return (
    <div className="booth-detail-container">
      {/* <Button 
        type="link" 
        onClick={() => navigate(`/command-center/constituency/${constituencyId}`)}
        className="back-button"
      >
        ← Back to Command Center
      </Button>

      <div className="booth-header">
        <h1>Booth {booth.id}: {booth.name}</h1>
        <Tag color="geekblue" className="location-tag">
          {booth.location}
        </Tag>
      </div> */}
      
       <div className="header-section">
        <h5>Booth {booth.id}</h5>
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

      {/* Stats Row */}
      <Row gutter={[16, 16]} className="stats-row">
        <Col {...statColProps}>
          <Card className="stat-card">
            <Statistic 
              title="Total Voters" 
              value={booth.stats.total} 
              precision={0}
            />
          </Card>
        </Col>
        <Col {...statColProps}>
          <Card className="stat-card">
            <Statistic 
              title="Surveyed" 
              value={booth.stats.surveyed} 
              precision={0}
            />
          </Card>
        </Col>
        <Col {...statColProps}>
          <Card className="stat-card">
            <Statistic 
              title="Coverage" 
              value={booth.stats.coverage} 
              suffix="%" 
              precision={1}
            />
          </Card>
        </Col>
        <Col {...statColProps}>
          <Card className="stat-card">
            <Statistic 
              title="Turnout" 
              value={booth.stats.turnout} 
              suffix="%" 
              precision={1}
            />
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Content Row */}
      <Row gutter={[16, 16]} className="content-row">
        <Col {...contentColProps}>
          <Card 
            title="Voter Demographics" 
        
            extra={<Button type="link">Export</Button>}
          >
            <Table
              columns={columns}
              dataSource={booth.voters}
              pagination={{ 
                pageSize: 10,
                responsive: true,
                showSizeChanger: false
              }}
              scroll={{ x: true }}
              rowKey="id"
              locale={{
                emptyText: <Empty description="No voter data available" />
              }}
            />
          </Card>
        </Col>
        <Col {...contentColProps}>
          <Card 
            title="Turnout Timeline" 
            className="data-card"
          >
            <div className="turnout-section">
              <div className="time-block">
                <h4>Morning (8AM-12PM)</h4>
                <Progress 
                  percent={booth.turnout.morning} 
                  status={booth.turnout.morning < 25 ? 'exception' : 'normal'}
                  strokeWidth={12}
                />
                <div className="turnout-value">
                  {booth.turnout.morning}% ({booth.turnout.morningCount} voters)
                </div>
              </div>
              
              <div className="time-block">
                <h4>Afternoon (12PM-4PM)</h4>
                <Progress 
                  percent={booth.turnout.afternoon} 
                  status={booth.turnout.afternoon < 25 ? 'exception' : 'normal'}
                  strokeWidth={12}
                />
                <div className="turnout-value">
                  {booth.turnout.afternoon}% ({booth.turnout.afternoonCount} voters)
                </div>
              </div>
              
              <div className="time-block">
                <h4>Evening (4PM-Close)</h4>
                <Progress 
                  percent={booth.turnout.evening} 
                  status={booth.turnout.evening < 25 ? 'exception' : 'normal'}
                  strokeWidth={12}
                />
                <div className="turnout-value">
                  {booth.turnout.evening}% ({booth.turnout.eveningCount} voters)
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
