import React from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import user1 from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/6.jpg';
import user4 from '../../assets/images/user/3.png';
import user6 from '../../assets/images/user/5.jpg';

export const AgentBoothData = [
  {
    id: 1,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user1, alt: 'user1' }} />
        <Media body className="align-self-center">
          <div>Nila</div>
        </Media>
      </Media>
    ),
    booth: 'Booth 101',
    contact: '9807654321',
    status: true,
  },
  {
    id: 2,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user2, alt: 'user2' }} />
        <Media body className="align-self-center">
          <div>Bala</div>
        </Media>
      </Media>
    ),
    booth: 'Booth 102',
    contact: '9876543210',
    status: false,
  },
  {
    id: 3,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user6, alt: 'user3' }} />
        <Media body className="align-self-center">
          <div>Tharun</div>
        </Media>
      </Media>
    ),
    booth: 'Booth 103',
    contact: '9123456789',
    status: true,
  },
  {
    id: 4,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user2, alt: 'user4' }} />
        <Media body className="align-self-center">
          <div>Yuga</div>
        </Media>
      </Media>
    ),
    booth: 'Booth 104',
    contact: '9988776655',
    status: false,
  },
  {
    id: 5,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user6, alt: 'user5' }} />
        <Media body className="align-self-center">
          <div>Ananth</div>
        </Media>
      </Media>
    ),
    booth: 'Booth 105',
    contact: '9090909090',
    status: true,
  },
];

export const boothColumns = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'Booth',
    selector: row => row.booth,
    sortable: true,
    center: true,
  },
  {
    name: 'Contact',
    selector: row => row.contact,
    sortable: true,
    center: true,
  },
  {
    name: 'Status',
    selector: row => (
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={row.status}
          readOnly
        />
      </div>
    ),
    sortable: false,
    center: true,
  },
];
