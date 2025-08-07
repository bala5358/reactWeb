import React from 'react';
import { Btn } from '../../../AbstractElements';

const style2 = { width: 60, fontSize: 14, padding: 4 };

const placeholderImg = 'https://via.placeholder.com/40';

export const clusterAgentData = [
  {
    name: 'Arjun Reddy',
    constituency: 'Coimbatore South',
    phone: '9876543210',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
    booths: [15, 17, 18, 22], // multiple booths
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
  {
    name: 'Lakshmi Iyer',
    constituency: 'Gandhipuram',
    phone: '9123456780',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
    booths: [32, 33],
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
];

export const clusterAgentColumns = [
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
  },
  {
    name: 'Full Name',
    selector: (row) => row.name,
    sortable: true,
    center: true,
    minWidth: '200px',
  },
  {
    name: 'Constituency',
    selector: (row) => row.constituency,
    sortable: true,
    center: true,
    minWidth: '150px',
  },
  {
    name: 'Phone Number',
    selector: (row) => row.phone,
    sortable: true,
    center: true,
    minWidth: '160px',
  },
  {
    name: 'Assigned Booths',
    selector: (row) => row.booths,
    cell: (row) => (
      <span className="badge bg-info text-dark">
        {row.booths.join(', ')}
      </span>
    ),
    center: true,
    minWidth: '200px',
  },
  {
    name: 'Action',
    cell: (row) => row.action,
    center: true,
    minWidth: '180px',
    maxWidth: '200px',
  },
];
