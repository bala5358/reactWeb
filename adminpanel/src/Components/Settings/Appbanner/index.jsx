import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';

const AppBanner = () => {
  const [bannerImages, setBannerImages] = useState([
    'election/sample1.jpg',
    'election/sample2.jpg',
    'election/sample3.png',
  ]);
  const [photoIndex, setPhotoIndex] = useState({ index: 0, isOpen: false });

  const handleAddImage = () => {
    // Placeholder logic to add a new image
    const newImage = prompt('Enter image path (relative to assets/images/):');
    if (newImage) {
      setBannerImages([...bannerImages, newImage]);
    }
  };

  return (
    <Fragment>
      <Col sm='12'>
        <Card>
          <div className="d-flex justify-content-between align-items-center px-4 pt-4">
            <HeaderCard title='App Banner Settings' />
            <Button color="primary" onClick={handleAddImage}>Add Image</Button>
          </div>
          <CardBody>
            <style>
    {`
      .equal-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
      }
    `}
  </style>
            <div className='my-gallery row'>
              {bannerImages.map((img, i) => (
                <figure className='col-xl-3 col-sm-6' key={i}>
                  <Image
          attrImage={{
            src: require(`../../../assets/images/${img}`),
            alt: 'Banner',
            className: 'img-thumbnail equal-image',
            onClick: () =>
              setPhotoIndex({ ...photoIndex, index: i, isOpen: true }),
          }}
        />
                </figure>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default AppBanner;
