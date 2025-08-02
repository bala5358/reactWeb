import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Col, Card, CardBody, Row, Spinner } from 'reactstrap';
import { FaUsers, FaMale, FaFemale } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TransCommon = ({ data: dataProp = [] }) => {
  const [displayCount, setDisplayCount] = useState(15);
  const [loading, setLoading] = useState(false);
  const [visibleData, setVisibleData] = useState([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleData(dataProp.slice(0, displayCount));
  }, [dataProp, displayCount]);

  const loadMore = useCallback(() => {
    if (displayCount >= dataProp.length) return;
    setLoading(true);
    setTimeout(() => {
      const newCount = Math.min(displayCount + 15, dataProp.length);
      setVisibleData(dataProp.slice(0, newCount));
      setDisplayCount(newCount);
      setLoading(false);
    }, 500);
  }, [displayCount, dataProp]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
        loadMore();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [loadMore, loading]);

  const handleCardClick = (item) => {
    navigate(`/cuba-context/app/users/edit/${item.voterId}`, { state: item });
  };

  if (!dataProp || dataProp.length === 0) {
    return (
      <div className="text-center my-5 text-muted">
        No matching records found.
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', padding: '0 15px' }}>
      <Row className="g-3">
        {visibleData.map((item) => (
          <Col key={item.voterId} md="6" xl="3">
            <Card className="shadow-sm h-100" style={{ cursor: 'pointer' }} onClick={() => handleCardClick(item)}>
              <CardBody className="d-flex flex-column">
                <Row className="pb-2 border-bottom mb-2" style={{ fontSize: '0.85rem', color: '#555' }}>
                  <Col xs="4"><strong>Serial:</strong> 01</Col>
                  <Col xs="4"><strong>Section:</strong> 721</Col>
                  <Col xs="4"><strong>Part:</strong> 1</Col>
                </Row>
                <Row className="align-items-center flex-grow-1">
                  <Col xs="5">
                    <div style={{ border: "1px solid #ccc", borderRadius: "6px" }}>
                      <img
                        src='https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
                        alt="voter"
                        className="img-fluid rounded"
                      />
                      <div className="small text-white text-center" style={{
                        background: "#21599f", borderTop: "1px solid #aaa", padding: "2px 4px",
                        fontWeight: "bold", borderRadius: "0 0 4px 4px"
                      }}>
                        {item.voterId}
                      </div>
                    </div>
                    <div className="pt-2 mt-3 d-flex justify-content-between align-items-center">
                      <span>
                        {item.gender === 'Female' ? <FaFemale className="text-danger" /> :
                          item.gender === 'Male' ? <FaMale className="text-primary" /> :
                            <FaUsers className="text-secondary" />}{' '}
                        {item.age} | {item.gender}
                      </span>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="fw-bold" style={{ fontSize: '0.9rem', paddingBottom: '10px' }}>{item.name}</div>
                    <div className="fw-bold" style={{ fontSize: '0.9rem', paddingBottom: '30px' }}>{item.relatedPerson}</div>
                    <div className="small text-muted">Door No: {item.houseNumber}</div>
                  </Col>
                </Row>
     <div className="border-top pt-2 mt-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                     <span
  style={{
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
  }}
>
  <i className="fa fa-phone text-primary" />
</span>

<span
  style={{
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    marginLeft: '10px'
  }}
>
  <i className="fa fa-pencil text-primary" />
</span>

                    </div>
                    <div className="position-relative">
                      <FaUsers className={item.gender === 'Female' ? 'text-danger' : 'text-primary'} style={{ fontSize: '1.5rem' }} />
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-8px',
                          backgroundColor: 'red',
                          color: 'white',
                          borderRadius: '50%',
                          width: '18px',
                          height: '18px',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        3
                      </div>
                    </div>
                  </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {loading && (
        <div className="text-center my-3">
          <Spinner color="primary" />
          <p>Loading more data...</p>
        </div>
      )}
    </div>
  );
};

export default TransCommon;
