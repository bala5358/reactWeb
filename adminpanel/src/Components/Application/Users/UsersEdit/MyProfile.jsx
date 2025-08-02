import React, { Fragment, useRef, useState } from 'react';
import { Col, Card, CardBody, CardHeader, Form, Row, Button } from 'reactstrap';
import { H4 } from '../../../../AbstractElements';
import { FaUsers, FaMale, FaFemale, FaCamera } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const MyProfileEdit = () => {
  const { state: item } = useLocation(); 
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(item?.image || '');

  if (!item) return <div>No profile data provided</div>;

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Safe string splitting function
  const safeSplit = (str) => {
    if (!str) return [''];
    return str.split('/').map(part => part.trim());
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <H4 attrH4={{ className: 'card-title mb-0' }}>Election Commission</H4>
          <div>
            <Button color="primary" className="me-2">Verify</Button>
            <div className='card-options d-inline-block'>
              <a className='card-options-collapse' href='#javascript'>
                <i className='fe fe-chevron-up'></i>
              </a>
              <a className='card-options-remove' href='#javascript'>
                <i className='fe fe-x'></i>
              </a>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="g-3">
              <Col xs={12}>
                {/* Serial / Section / Part */}
                <Row className="pb-2 border-bottom mb-2" style={{ fontSize: '0.85rem', color: '#555' }}>
                  <Col xs="4"><strong>Serial:</strong> {item.serial || 'N/A'}</Col>
                  <Col xs="4"><strong>Section:</strong> {item.section || 'N/A'}</Col>
                  <Col xs="4"><strong>Part:</strong> {item.part || 'N/A'}</Col>
                </Row>

                {/* Image and Details */}
                <Row className="align-items-center flex-grow-1 mb-3">
                  <Col md="4" sm="5">
                    <div className="position-relative" style={{ display: "inline-block", border: "1px solid #ccc", borderRadius: "6px" }}>
                      <img
                        // src={profileImage}
                        src='https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
                        alt="voter"
                        className="img-fluid rounded"
                        style={{ cursor: 'pointer' }}
                        onClick={handleImageClick}
                      />
                      {/* Edit Icon */}
                      <FaCamera
                        onClick={handleImageClick}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize:'12px'
                        }}
                      />
                      <div className="small text-white text-center" style={{
                        background: "#21599f",
                        borderTop: "1px solid #aaa",
                        padding: "2px 4px",
                        fontWeight: "bold",
                        borderRadius: "0 0 4px 4px"
                      }}>
                        {item.voterId || 'N/A'}
                      </div>
                    </div>

                    {/* Hidden file input */}
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />

                    <div className="pt-2 mt-3 d-flex justify-content-between align-items-center">
                      <span>
                        {item.gender === 'Female' ? (
                          <FaFemale className="text-danger" />
                        ) : item.gender === 'Male' ? (
                          <FaMale className="text-primary" />
                        ) : (
                          <FaUsers className="text-secondary" />
                        )}{' '}
                        {item.age || 'N/A'} | Other
                      </span>
                    </div>
                  </Col>
                  <Col md="8" sm="7">
                    <div className="fw-bold" style={{ fontSize: '0.9rem', lineHeight: '1.3', wordBreak: 'break-word', paddingBottom: "10px" }}>
                      {safeSplit(item.name).map((part, index) => (
                        <span key={index}>{part || 'N/A'}<br /></span>
                      ))}
                    </div>
                    <div className="fw-bold" style={{ fontSize: '0.9rem', lineHeight: '1.3', wordBreak: 'break-word', paddingBottom: "30px" }}>
                      {safeSplit(item.relationName).map((part, index) => (
                        <span key={index}>{part || 'N/A'}<br /></span>
                      ))}
                    </div>
                    <div className="small text-muted">{item.door || 'N/A'}</div>
                  </Col>
                </Row>

                {/* Footer with icons */}
                <Row className="border-top pt-3 mt-3">
                  <Col xs={6} className="d-flex gap-2">
                    <span style={{ backgroundColor: 'lightgray', borderRadius: '50%', padding: '10px' }}>
                      <i className="fa fa-phone text-primary" style={{ fontSize: '1.2rem' }}></i>
                    </span>
                    <span style={{ backgroundColor: 'lightgray', borderRadius: '50%', padding: '10px' }}>
                      <i className="fa fa-pencil text-primary" style={{ fontSize: '1.2rem' }}></i>
                    </span>
                  </Col>
                  <Col xs={6} className="text-end">
                    <div className="position-relative d-inline-block">
                      <FaUsers
                        className={item.gender === 'Female' ? 'text-danger' : 'text-primary'}
                        style={{ fontSize: '1.5rem' }}
                      />
                      <div style={{
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
                      }}>
                        3
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </CardBody>
        
        {/* Update Button at the bottom of the card */}
        <div className="border-top p-3 text-end">
          <Button color="primary">Update</Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default MyProfileEdit;