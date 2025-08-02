import React, { Fragment, useState } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // ⬅️ Add this

const SinganallurPoll = () => {
  const totalVoters = 1000;
  const [votedStatus, setVotedStatus] = useState(Array(totalVoters).fill(false));
  const [searchQuery, setSearchQuery] = useState('');

  const toggleVoter = (index) => {
    const updated = [...votedStatus];
    updated[index] = !updated[index];
    setVotedStatus(updated);
  };
const navigate = useNavigate(); // ⬅️ Add this inside SinganallurPoll

  const votedCount = votedStatus.filter(Boolean).length;
  const notVotedCount = totalVoters - votedCount;

  const boxStyle = (voted) => ({
    flex: '0 1 calc(12.5% - 8px)',
    minWidth: '48px',
    maxWidth: '80px',
    aspectRatio: '1',
    margin: '4px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: voted ? '#218838' : '#dc3545',
    backgroundColor: voted ? '#d4edda' : '#f8d7da', // light green/red
    color: '#000',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s ease',
  });

  const badgeStyle = (bgColor) => ({
    display: 'inline-block',
    padding: '4px 10px',
    fontSize: '13px',
    fontWeight: 'bold',
    borderRadius: '12px',
    color: '#fff',
    backgroundColor: bgColor,
    marginRight: '10px',
    minWidth: '100px',
    textAlign: 'center',
  });

  const inputStyle = {
    width: '200px',
    padding: '6px 10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const filteredIndexes = Array.from({ length: totalVoters }, (_, i) => i).filter((index) =>
    (index + 1).toString().includes(searchQuery)
  );

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Singanallur Poll' parent='Icons' title='Singanallur Poll' />
      <Container fluid>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={badgeStyle('#007bff')}>Total: {totalVoters}</span>
                  <span style={badgeStyle('#28a745')}>Voted: {votedCount}</span>
                  <span style={badgeStyle('#dc3545')}>Not Voted: {notVotedCount}</span>
                </div>
                <input
                  type='text'
                  placeholder='Search number'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={inputStyle}
                />
              </CardHeader>
              <CardBody>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                  }}
                >
                  {filteredIndexes.map((index) => (
                    <div
                      key={index}
                      style={boxStyle(votedStatus[index])}
                      // onClick={() => toggleVoter(index)}
                      onClick={() => { toggleVoter(index); 
                        navigate('/singanallur/Dubai');
                      }}

                      title={votedStatus[index] ? 'Voted' : 'Not Voted'}
                    >
                      {index + 1}
                    </div>
                  ))}
                  {filteredIndexes.length === 0 && (
                    <div style={{ marginTop: '10px', color: '#888' }}>No voters found.</div>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SinganallurPoll;
