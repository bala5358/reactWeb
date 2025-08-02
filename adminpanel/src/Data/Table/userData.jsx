import React from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import user1 from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/3.jpg';
import user4 from '../../assets/images/user/3.png';
import user5 from '../../assets/images/user/4.jpg';

export const userData = [
  {
    id: 1,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user1, alt: 'user1' }} />
        <Media body className="align-self-center">
          <div>Airi Satou</div>
        </Media>
      </Media>
    ),
    email: 'airi@gmail.com',
    age: 24,
    PhoneNumber: 9807654321,
    address: 'Trichy',
    status: true,
  },
  {
    id: 2,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user2, alt: 'user2' }} />
        <Media body className="align-self-center">
          <div>John Doe</div>
        </Media>
      </Media>
    ),
    email: 'john@example.com',
    age: 30,
    PhoneNumber: 9876543210,
    address: 'Chennai',
    status: false,
  },
  {
    id: 3,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user3, alt: 'user3' }} />
        <Media body className="align-self-center">
          <div>Jane Smith</div>
        </Media>
      </Media>
    ),
    email: 'jane@example.com',
    age: 28,
    PhoneNumber: 9123456789,
    address: 'Bangalore',
    status: true,
  },
  {
    id: 4,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user4, alt: 'user4' }} />
        <Media body className="align-self-center">
          <div>Michael Jordan</div>
        </Media>
      </Media>
    ),
    email: 'mj@example.com',
    age: 35,
    PhoneNumber: 9988776655,
    address: 'Coimbatore',
    status: false,
  },
  {
    id: 5,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user5, alt: 'user5' }} />
        <Media body className="align-self-center">
          <div>Sara Connor</div>
        </Media>
      </Media>
    ),
    email: 'sara@example.com',
    age: 27,
    PhoneNumber: 9090909090,
    address: 'Madurai',
    status: true,
  },
];

export const userColumns = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    center: true,
  },
  {
    name: 'Age',
    selector: row => row.age,
    sortable: true,
    center: true,
  },
  {
    name: 'Phone Number',
    selector: row => row.PhoneNumber,
    sortable: true,
    center: true,
  },
  {
    name: 'Address',
    selector: row => row.address,
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
    sortable: true,
    center: true,
  },
];
