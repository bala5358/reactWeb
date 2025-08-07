import React from 'react';
import { Btn } from '../../../AbstractElements';

const style2 = { width: 60, fontSize: 14, padding: 4 };
const placeholderImg = 'https://via.placeholder.com/40';

export const adminData = [
  {
    name: 'Admin One',
    email: 'admin1@example.com',
    phone: '9876543210',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
    role: 'Super Admin',
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
  {
    name: 'Admin Two',
    email: 'admin2@example.com',
    phone: '9988776655',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
    role: 'Moderator',
    action: (
      <div>
        <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs' }}>Edit</Btn>
        &nbsp;
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs' }}>Delete</Btn>
      </div>
    ),
  },
];

export const adminColumns = [
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
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
    center: true,
    minWidth: '250px',
  },
  {
    name: 'Phone Number',
    selector: (row) => row.phone,
    sortable: true,
    center: true,
    minWidth: '160px',
  },
  {
    name: 'Role',
    selector: (row) => row.role,
    center: true,
    minWidth: '150px',
  },
  {
    name: 'Action',
    cell: (row) => row.action,
    center: true,
    minWidth: '180px',
    maxWidth: '200px',
  },
];
