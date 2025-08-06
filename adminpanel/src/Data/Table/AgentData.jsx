import React from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import user1 from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/3.jpg';
import user4 from '../../assets/images/user/3.png';
import user5 from '../../assets/images/user/4.jpg';
import user6 from '../../assets/images/user/5.jpg';
import user7 from '../../assets/images/user/6.jpg';
import user8 from '../../assets/images/user/7.jpg';
import user9 from '../../assets/images/user/8.jpg';
import user10 from '../../assets/images/user/9.jpg';
import user11 from '../../assets/images/user/10.jpg';
import user12 from '../../assets/images/user/11.png';
import user13 from '../../assets/images/user/12.png';

export const agenttabledata = [
  {
    id: 1,
    name: (
      <Media className="d-flex">
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: user1,
            alt: 'user1',
          }}
        />
        <Media body className="align-self-center">
          <div>Airi Satou</div>
        </Media>
      </Media>
    ),
    dob: '1995-04-27',
    phone: '9807654321',
    email: 'airi.satou@example.com',
    idProof: 'Aadhar - XXXX-XXXX-1234',
    constituency: 'Ward 12 - Trichy South',
    party: 'Democratic Alliance',
    candidate: 'John David',
    role: 'Field Agent',
    createdDate: '2023-04-10',
    lastActive: '2025-07-25',
    status: true,
  },
  {
    id: 2,
    name: (
      <Media className="d-flex">
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: user2,
            alt: 'user2',
          }}
        />
        <Media body className="align-self-center">
          <div>Thomas Taylor</div>
        </Media>
      </Media>
    ),
    dob: '1990-12-12',
    phone: '9876543210',
    email: 'thomas.taylor@example.com',
    idProof: 'Voter ID - ABX1234567',
    constituency: 'Ward 5 - Chennai North',
    party: 'People First',
    candidate: 'Ravi Kumar',
    role: 'Booth Agent',
    createdDate: '2023-06-01',
    lastActive: '2025-07-30',
    status: false,
  },
];


export const agentColumns = [
  {
    name: 'Full Name',
    selector: row => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'DOB',
    selector: row => row.dob,
    sortable: true,
    center: true,
  },
  {
    name: 'Phone',
    selector: row => row.phone,
    sortable: true,
    center: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    center: true,
  },
  {
    name: 'ID Proof',
    selector: row => row.idProof,
    sortable: true,
    center: true,
  },
  {
    name: 'Constituency',
    selector: row => row.constituency,
    sortable: true,
    center: true,
  },
  {
    name: 'Party',
    selector: row => row.party,
    sortable: true,
    center: true,
  },
  {
    name: 'Candidate',
    selector: row => row.candidate,
    sortable: true,
    center: true,
  },
  {
    name: 'Role',
    selector: row => row.role,
    sortable: true,
    center: true,
  },
  {
    name: 'Created Date',
    selector: row => row.createdDate,
    sortable: true,
    center: true,
  },
  {
    name: 'Last Active',
    selector: row => row.lastActive,
    sortable: true,
    center: true,
  },
  {
    name: 'Status',
    selector: row => (
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={row.status}
          readOnly
        />
      </div>
    ),
    sortable: true,
    center: true,
  },
];
