import React from 'react';
import { Link } from 'react-router-dom';
import { H6, Image } from '../../../AbstractElements';
import fireImage from '../../../assets/images/giftools.gif';
import Slider from 'react-slick';
import { notificationSliderOption } from './NotificationSliderOption';

const NotificationSlider = () => {
  return (
    <div className='notification-slider overflow-hidden '>
      <Slider className='m-0' {...notificationSliderOption}>
        <div className='d-flex h-100'>
          <Image attrImage={{ src: fireImage, alt: 'gif' }} />
          <H6 attrH6={{ className: 'mb-0 f-w-400' }}>
            {/* <span className='font-primary'>Your vote is your voice  </span> */}
            <span className='f-light'>Change begins with a single vote.</span>
          </H6>
          <i className='icon-arrow-top-right f-light' />
        </div>
        <div className='d-flex h-100'>
          <Image attrImage={{ src: fireImage, alt: 'gif' }} />
          <H6 attrH6={{ className: 'mb-0 f-w-400' }}>
            <span className='f-light'>Every vote is a building block of change. </span>
          </H6>
          {/* <Link className='ms-1' to='https://1.envato.market/3GVzd' target='_blank'>
            Buy now !
          </Link> */}
        </div>
      </Slider>
    </div>
  );
};

export default NotificationSlider;
