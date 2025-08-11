import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { Image, H5, LI, UL } from '../../../AbstractElements';
import profileImage from '../../../assets/images/dashboard-5/profile.png';
import SvgIcon from '../../Common/Component/SvgIcon';

const PartyProfileCard = ({ selectedState }) => {
  // 🔒 Hardcoded election data for 3 states
  const stateData = {
    'Kerala': {
      capital: 'Thiruvananthapuram',
      districts: 14,
      constituencies: 140,
      booths: 25000,
    },
    'Tamil Nadu': {
      capital: 'Chennai',
      districts: 38,
      constituencies: 234,
      booths: 68000,
    },
    'Telangana': {
      capital: 'Hyderabad',
      districts: 33,
      constituencies: 119,
      booths: 35000,
    },
  };

  const data = stateData[selectedState] || {
    capital: 'N/A',
    districts: 0,
    constituencies: 0,
    booths: 0,
  };

  return (
    <Card className='social-profile'>
      <CardBody>
        <div className='social-img-wrap'>
          <div className='social-img'>
            <Image attrImage={{ src: profileImage, alt: 'profile' }} />
          </div>
          <div className='edit-icon'>
            <SvgIcon iconId='profile-check' />
          </div>
        </div>
        <div className='social-details'>
          {/* Show Selected State in Link */}
          <H5 attrH5={{ className: 'mb-1' }}>
            <Link to={`/app/social-app`}>
              {selectedState} Election Officer
            </Link>
          </H5>

          {/* Email address using lowercase state name */}
          <span className='f-light'>
            election.{selectedState.toLowerCase().replace(/\s/g, '')}@gov.in
          </span>

          {/* Districts, Constituencies, Booths */}
          <UL attrUL={{ className: 'social-follow' }}>
            <LI>
              <H5 attrH5={{ className: 'mb-0' }}>{data.districts}</H5>
              <span className='f-light'>Districts</span>
            </LI>
            <LI>
              <H5 attrH5={{ className: 'mb-0' }}>{data.constituencies}</H5>
              <span className='f-light'>Constituencies</span>
            </LI>
            <LI>
              <H5 attrH5={{ className: 'mb-0' }}>{data.booths}</H5>
              <span className='f-light'>Booths</span>
            </LI>
          </UL>
        </div>
      </CardBody>
    </Card>
  );
};

export default PartyProfileCard;
