import { useState, useEffect } from 'react';
import { Card, CardBody, Row, Col, Progress, Badge, Button, Table } from 'reactstrap';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area, LineChart, Line, Legend } from 'recharts';
 
// Enhanced color palette with more vibrant colors
const colors = {
  primary: '#4361ee',    // Vibrant blue
  secondary: '#3a0ca3',  // Deep purple
  success: '#4cc9f0',    // Sky blue
  info: '#4895ef',       // Lighter blue
  warning: '#f72585',    // Pink accent
  danger: '#d90429',     // Red for urgent items
  dark: '#212529',
  light: '#f8f9fa',
  extra1: '#7209b7',     // Additional purple
  extra2: '#3f37c9'      // Additional blue
};
 
// Gradient generator with more options
const gradientColors = {
  primary: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  success: `linear-gradient(135deg, ${colors.success}, ${colors.info})`,
  warning: `linear-gradient(135deg, ${colors.warning}, ${colors.danger})`,
  dark: `linear-gradient(135deg, ${colors.dark}, ${colors.secondary})`
};
 
// ========== ANIMATED COMPONENTS ==========
const AnimatedMetricCard = ({ title, value, icon, color, progress, trend, description }) => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    const timer = setTimeout(() => setCount(value), 300);
    return () => clearTimeout(timer);
  }, [value]);
 
  const trendColor = trend > 0 ? colors.success : trend < 0 ? colors.danger : colors.info;
  const trendIcon = trend > 0 ? 'arrow-up' : trend < 0 ? 'arrow-down' : 'equals';
 
  return (
    <Card className="border-0 shadow-sm" style={{
      background: gradientColors[color] || colors.light,
      minHeight: '120px'
    }}>
      <CardBody className="text-white">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="mb-1 text-uppercase" style={{ opacity: 0.8, fontSize: '0.75rem' }}>{title}</h6>
            <h2 className="mb-0 font-weight-bold">{typeof value === 'number' ? count : value}</h2>
            {description && <small className="d-block" style={{ opacity: 0.8 }}>{description}</small>}
          </div>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className={`fas fa-${icon}`} style={{ fontSize: '1.2rem' }}></i>
          </div>
        </div>
       
        <div className="d-flex justify-content-between align-items-end mt-2">
          {progress && (
            <Progress
              value={progress}
              color="white"
              className="mt-2 flex-grow-1 mr-2"
              style={{ height: '6px', opacity: 0.7 }}
            />
          )}
         
          {trend !== undefined && (
            <div className="d-flex align-items-center">
              <i className={`fas fa-${trendIcon} mr-1`} style={{ color: trendColor }}></i>
              <small style={{ color: trendColor }}>{Math.abs(trend)}%</small>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
 
// ========== MAIN COMPONENT ==========
const BoothOverview = () => {
  const [data, setData] = useState({
    totalVoters: 1250,
    voted: 684,
    hourlyRate: 85,
    pendingActions: 12,
    turnoutRate: 55,
    expectedTurnout: 72,
    issuesReported: 4,
    avgVotingTime: '2.5 min',
    peakHours: '9-12 AM',
    recentVoters: [
      { id: 'V10245', name: 'Rahul Sharma', time: '10:24 AM', status: 'verified' },
      { id: 'V10244', name: 'Priya Patel', time: '10:21 AM', status: 'verified' },
      { id: 'V10243', name: 'Amit Singh', time: '10:18 AM', status: 'pending' },
      { id: 'V10242', name: 'Neha Gupta', time: '10:15 AM', status: 'verified' },
      { id: 'V10241', name: 'Sanjay Kumar', time: '10:12 AM', status: 'rejected' }
    ],
    hourlyData: [
      { hour: '6-9 AM', voters: 120, target: 150, queue: 15 },
      { hour: '9-12 PM', voters: 210, target: 250, queue: 22 },
      { hour: '12-3 PM', voters: 185, target: 200, queue: 18 },
      { hour: '3-6 PM', voters: 169, target: 200, queue: 12 }
    ],
    queueData: [
      { time: '9:00', queue: 15 },
      { time: '10:00', queue: 22 },
      { time: '11:00', queue: 18 },
      { time: '12:00', queue: 12 },
      { time: '1:00', queue: 8 },
      { time: '2:00', queue: 14 },
      { time: '3:00', queue: 19 }
    ],
    demographics: {
      age: [
        { name: '18-25', value: 22, fill: '#f72585' },
        { name: '26-40', value: 38, fill: '#4895ef' },
        { name: '41-60', value: 30, fill: '#4361ee' },
        { name: '60+', value: 10, fill: '#3a0ca3' }
      ],
      gender: [
        { name: 'Male', value: 55, fill: colors.primary },
        { name: 'Female', value: 44, fill: colors.warning },
        { name: 'Other', value: 1, fill: colors.success }
      ]
    },
    performance: {
      efficiency: 82,
      speed: 76,
      accuracy: 95
    }
  });
 
  // Simulate data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        voted: prev.voted + Math.floor(Math.random() * 5),
        turnoutRate: Math.min(100, Math.round((prev.voted / prev.totalVoters) * 100)),
        hourlyRate: Math.max(50, Math.min(120, prev.hourlyRate + Math.floor(Math.random() * 10) - 5))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="container-fluid" style={{ backgroundColor: colors.light }}>
      {/* Key Metrics Row */}
      <Row className="mb-4 g-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
  <Col xl={2} md={4} sm={6} style={{ display: 'flex' }}>
    <AnimatedMetricCard
      title="Total Voters"
      value={data.totalVoters}
      icon="users"
      color="success"
      description="Registered voters"
    />
  </Col>
  <Col xl={2} md={4} sm={6} style={{ display: 'flex' }}>
    <AnimatedMetricCard
      title="Voted Today"
      value={data.voted}
      icon="vote-yea"
      color="success"
      progress={data.turnoutRate}
      // trend={data.turnoutRate - 50}
      description={`${data.turnoutRate}% turnout`}
    />
  </Col>
  <Col xl={2} md={4} sm={6} style={{ display: 'flex' }}>
    <AnimatedMetricCard
      title="Hourly Rate"
      value={data.hourlyRate}
      icon="clock"
      color="success"
      progress={data.turnoutRate}
      description={`${data.peakHours}`}
      // trend={5}
    />
  </Col>
  <Col xl={2} md={4} sm={6} style={{ display: 'flex' }}>
    <AnimatedMetricCard
      title="Pending Actions"
      value={data.pendingActions}
      icon="tasks"
      color="success"
      description="Requires attention"
    />
  </Col>
  <Col xl={2} md={4} sm={6} style={{ display: 'flex' }}>
    <AnimatedMetricCard
      title="Issues Reported"
      value={data.issuesReported}
      icon="tasks"
      color="success"
      description="Today's reported issues"
    />
  </Col>
  <Col xl={2} md={4} sm={6} style={{ display: 'flex' }}>
    <AnimatedMetricCard
      title="Avg. Time"
      value={data.avgVotingTime}
      icon="stopwatch"
      color="success"
      description="Per voter"
    />
  </Col>
</Row>
 
      {/* Analytics Row */}
      <Row className="mb-4 g-3">
      <Col lg={7}>
  <Card className="border-0 shadow-sm h-100">
    <CardBody className="h-100 d-flex flex-column">
      {/* Header section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 style={{ color: colors.dark }}>Hourly Turnout & Queue Status</h5>
        <div >
          <Button size="sm" outline color="primary"style={{marginRight:"15px"}}>Today</Button>
          <Button size="sm" outline color="secondary">Projection</Button>
        </div>
      </div>
     
      {/* Centered chart container */}
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <div style={{ height: '100%', minHeight: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data.hourlyData}
              margin={{ top: 130, right: 20, left: 20, bottom: 70 }}
            >
              <defs>
                <linearGradient id="colorVoters" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colors.primary} stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorQueue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.warning} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={colors.warning} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="hour"
                tick={{ fill: colors.dark }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tick={{ fill: colors.dark }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: colors.dark }}
              />
              <Tooltip
                contentStyle={{
                  background: colors.dark,
                  color: colors.light,
                  border: 'none',
                  borderRadius: '6px'
                }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: '10px'
                }}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="voters"
                name="Voters"
                stroke={colors.primary}
                fillOpacity={1}
                fill="url(#colorVoters)"
                strokeWidth={3}
                activeDot={{ r: 6, fill: colors.primary }}
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="queue"
                name="Queue Length"
                stroke={colors.warning}
                fillOpacity={1}
                fill="url(#colorQueue)"
                strokeWidth={3}
                activeDot={{ r: 6, fill: colors.warning }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CardBody>
  </Card>
</Col>
 
        <Col lg={5}>
          <Row className="h-100 g-3">
            <Col sm={6} lg={12}>
              <Card className="border-0 shadow-sm h-100">
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 style={{ color: colors.dark }}>Voter Demographics</h5>
                    <Badge color="primary" pill>Today</Badge>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data.demographics.age}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {data.demographics.age.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name, props) => [`${value}%`, name]}
                        contentStyle={{
                          background: colors.light,
                          color: colors.light,
                          border: 'none',
                          borderRadius: '6px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
            <Col sm={6} lg={12}>
              <Card className="border-0 shadow-sm h-100">
                <CardBody>
                  <h5 className="mb-5" style={{ color: colors.dark }}>Queue Status</h5>
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={data.queueData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          background: colors.dark,
                          color: colors.light,
                          border: 'none',
                          borderRadius: '6px'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="queue"
                        stroke={colors.warning}
                        strokeWidth={3}
                        activeDot={{ r: 6, fill: colors.warning }}
                        dot={{ r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="d-flex justify-content-between mt-2">
                    <small className="text-muted">Current queue: 12 voters</small>
                    <small className="text-muted">Avg. wait time: ~15 min</small>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
 
      {/* Second Analytics Row */}
      <Row className="mb-4 g-3">
        <Col md={6} lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody>
              <h5 className="mb-5" style={{ color: colors.dark }}>Gender Ratio</h5>
              <div className="d-flex justify-content-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={data.demographics.gender}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {data.demographics.gender.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name, props) => [`${value}%`, name]}
                      contentStyle={{
                        background: colors.light,
                        color: colors.light,
                        border: 'none',
                        borderRadius: '6px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="d-flex justify-content-around mt-5">
                {data.demographics.gender.map((item, i) => (
                  <div key={i} className="text-center">
                    <div style={{
                      width: 12,
                      height: 12,
                      backgroundColor: item.fill,
                      borderRadius: '50%',
                      display: 'inline-block',
                      marginRight: 5
                    }}></div>
                    <span className="text-muted">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Col>
 
        <Col md={6} lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody>
              <h5 className="mb-3" style={{ color: colors.dark }}>Recent Voters</h5>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <Table borderless className="mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.recentVoters.map((voter, index) => (
                      <tr key={index}>
                        <td><small>{voter.id}</small></td>
                        <td><small>{voter.name}</small></td>
                        <td><small>{voter.time}</small></td>
                        <td>
                          <Badge
                            color={
                              voter.status === 'verified' ? 'success' :
                              voter.status === 'pending' ? 'warning' : 'danger'
                            }
                            pill
                          >
                            {voter.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <Button
                outline
                color="primary"
                size="sm"
                block
                className="mt-2"
              >
                View All Voters
              </Button>
            </CardBody>
          </Card>
        </Col>
 
        <Col md={12} lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody>
              <h5 className="mb-4" style={{ color: colors.dark }}>Booth Performance</h5>
              <div className="mb-5">
                <div className="d-flex justify-content-between mb-1">
                  <small>Efficiency</small>
                  <small>{data.performance.efficiency}%</small>
                </div>
                <Progress
                  value={data.performance.efficiency}
                  color="primary"
                  style={{ height: '8px' }}
                />
              </div>
              <div className="mb-5">
                <div className="d-flex justify-content-between mb-1">
                  <small>Processing Speed</small>
                  <small>{data.performance.speed}%</small>
                </div>
                <Progress
                  value={data.performance.speed}
                  color="info"
                  style={{ height: '8px' }}
                />
              </div>
              <div className="mb-5">
                <div className="d-flex justify-content-between mb-1">
                  <small>Accuracy</small>
                  <small>{data.performance.accuracy}%</small>
                </div>
                <Progress
                  value={data.performance.accuracy}
                  color="success"
                  style={{ height: '8px' }}
                />
              </div>
              <div className="text-center mt-5">
                <h3 style={{ color: colors.primary }}>
                  {Math.round(
                    (data.performance.efficiency +
                     data.performance.speed +
                     data.performance.accuracy) / 3
                  )}%
                </h3>
                <small className="text-muted">Overall Performance Score</small>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
 
      {/* Action Cards Row */}
      <Row className="g-3">
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 style={{ color: colors.dark }}>Priority Alerts</h5>
                <Badge color="danger" pill>{data.issuesReported} Active</Badge>
              </div>
             
              <div className="alert mb-3" style={{
                background: `rgba(${hexToRgb(colors.danger)},0.1)`,
                borderLeft: `4px solid ${colors.danger}`
              }}>
                <div className="d-flex align-items-center">
                  {/* <i className={`fas fa-exclamation-triangle mr-3`} style={{ color: colors.danger }}></i> */}
                  <div>
                    <strong>Booth 12A:</strong> EVM malfunction
                    <div className="text-xs text-muted">2 unresolved issues • Reported 45 min ago</div>
                  </div>
                  {/* <Button size="sm" color="link" className="ml-auto p-0">
                    <i className="fas fa-ellipsis-v"></i>
                  </Button> */}
                </div>
              </div>
             
              <div className="alert mb-3" style={{
                background: `rgba(${hexToRgb(colors.warning)},0.1)`,
                borderLeft: `4px solid ${colors.warning}`
              }}>
                <div className="d-flex align-items-center">
                  {/* <i className={`fas fa-users mr-3`} style={{ color: colors.warning }}></i> */}
                  <div>
                    <strong>Peelamedu Area:</strong> Low turnout (38%)
                    <div className="text-xs text-muted">15 non-voters identified • Updated 30 min ago</div>
                  </div>
                  {/* <Button size="sm" color="link" className="ml-auto p-0">
                    <i className="fas fa-ellipsis-v"></i>
                  </Button> */}
                </div>
              </div>
             
              <div className="alert" style={{
                background: `rgba(${hexToRgb(colors.info)},0.1)`,
                borderLeft: `4px solid ${colors.info}`
              }}>
                <div className="d-flex align-items-center">
                  {/* <i className={`fas fa-user-clock mr-3`} style={{ color: colors.info }}></i> */}
                  <div>
                    <strong>Queue Management:</strong> Long waiting time
                    <div className="text-xs text-muted">Avg. wait time 25 min • Updated 15 min ago</div>
                  </div>
                  {/* <Button size="sm" color="link" className="ml-auto p-0">
                    <i className="fas fa-ellipsis-v"></i>
                  </Button> */}
                </div>
              </div>
             
              <Button
                outline
                block
                className="mt-3"
                style={{
                  color: colors.primary,
                  borderColor: colors.primary,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.target.style.background = colors.primary;
                  e.target.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = colors.primary;
                }}
              >
                View All Alerts
              </Button>
            </CardBody>
          </Card>
        </Col>
 
 <Col md={6}>
  <Card className="border-0 shadow-sm h-100">
    <CardBody className="d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 style={{
          color: '#212529',
          fontSize: '1.1rem',
          fontWeight: 600
        }}>
          Quick Actions
        </h5>
        <Badge
          color="info"
          pill
          style={{
            backgroundColor: 'rgba(80, 202, 211, 0.1)',
            color: 'white',
            fontWeight: 500,
            fontSize: '0.75rem'
          }}
        >
          Most Used
        </Badge>
      </div>
     
      <Row className="g-2 flex-grow-1">
        {[
          { label: 'Add Voter', color: '#4361ee', count: 12 },
          { label: 'Bulk SMS', color: '#4361ee', count: 8 },
          { label: 'Booth Map', color: '#4361ee', count: 5 },
          { label: 'Report Issue', color: '#4361ee', count: 3 },
          { label: 'Generate Report', color: '#4361ee', count: 2 },
          { label: 'Call Support', color: '#4361ee', count: 1 }
        ].map((action, i) => (
          <Col xs={6} key={i} className="mb-2">
            <Button
              outline
              className="w-100 d-flex flex-column align-items-center justify-content-center p-2 position-relative"
              style={{
                color: action.color,
                borderColor: action.color,
                borderWidth: '1px',
                borderRadius: '6px',
                minHeight: '70px',
                backgroundColor: 'transparent'
              }}
            >
              <i
                className={`fas fa-${action.icon} mb-1`}
                style={{
                  fontSize: '1.2rem'
                }}
              />
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 500
              }}>
                {action.label}
              </span>
             
              {action.count > 0 && (
                <Badge
                  pill
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    fontSize: '0.6rem',
                    padding: '3px 6px',
                    backgroundColor: action.color,
                    color: 'white',
                    border: '1.5px solid white'
                  }}
                >
                  {action.count}
                </Badge>
              )}
            </Button>
          </Col>
        ))}
      </Row>
     
      <div className="mt-3 pt-2 border-top d-flex justify-content-between">
        <span className="text-muted" style={{ fontSize: '0.8rem' }}>
          <i className="far fa-clock mr-1" />
          Last action: Report Issue at 10:15 AM
        </span>
        <span className="text-muted" style={{ fontSize: '0.8rem' }}>
          <i className="far fa-check-circle mr-1" />
          Today: 31 actions
        </span>
      </div>
    </CardBody>
  </Card>
</Col>
      </Row>
    </div>
  );
};
 
// Helper function
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}
 
function hexToRgba(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
export default BoothOverview;