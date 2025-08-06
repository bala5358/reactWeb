// ConstitutionList.js

import React from 'react';
import { Btn } from '../../../AbstractElements';

const style2 = { width: 60, fontSize: 14, padding: 4 };

// Placeholder image if none provided
const placeholderImg = 'https://via.placeholder.com/40';

export const constitutionData = [
  {
    name: 'John Doe',
    constituency: 'South Chennai',
    phone: '9876543210',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
  {
    name: 'Priya Raj',
    constituency: 'Shivajinagar',
    phone: '9123456780',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
  {
    name: 'Suresh Kumar',
    constituency: 'Ernakulam',
    phone: '9988776655',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
  {
    name: 'Anjali Verma',
    constituency: 'Karol Bagh',
    phone: '9012345678',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
];

export const constitutionColumns = [
  {
    name: 'Profile',
    selector: (row) => row.image,
    cell: (row) => (
      <img
        src={row.image || placeholderImg}
        alt={row.name}
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
    ),
    minWidth: '180px',
    maxWidth: '180px',
    center: true,
  },
  {
    name: 'Full Name',
    selector: (row) => row.name,
    sortable: true,
    minWidth: '200px',
        center: true,

  },
  {
    name: 'Constituency',
    selector: (row) => row.constituency,
    sortable: true,
    minWidth: '150px',
        center: true,

  },
  {
    name: 'Phone Number',
    selector: (row) => row.phone,
    sortable: true,
    minWidth: '160px',
        center: true,

  },
  {
    name: 'Action',
    cell: (row) => row.action,
    center: true,
    minWidth: '180px',
    maxWidth: '200px',
  },
];
