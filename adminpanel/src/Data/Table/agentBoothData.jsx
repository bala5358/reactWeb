import React from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import user1 from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/6.jpg';
import user4 from '../../assets/images/user/3.png';
import user5 from '../../assets/images/user/5.jpg';

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
    dob: '1990-02-14',
    phone: '9807654321',
    email: 'nila@example.com',
    idProof: 'Aadhar - 1234 5678 9012',
    constituency: 'Constituency A',
    party: 'Party X',
    candidate: 'Candidate Alpha',
    role: 'Booth Agent',
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
    dob: '1985-09-23',
    phone: '9876543210',
    email: 'bala@example.com',
    idProof: 'Voter ID - XY1234567',
    constituency: 'Constituency B',
    party: 'Party Y',
    candidate: 'Candidate Beta',
    role: 'Polling Supervisor',
    status: false,
  },
  {
    id: 3,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user5, alt: 'user3' }} />
        <Media body className="align-self-center">
          <div>Tharun</div>
        </Media>
      </Media>
    ),
    dob: '1992-06-05',
    phone: '9123456789',
    email: 'tharun@example.com',
    idProof: 'Aadhar - 9876 5432 1098',
    constituency: 'Constituency C',
    party: 'Party Z',
    candidate: 'Candidate Gamma',
    role: 'Observer',
    status: true,
  },
  {
    id: 4,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user4, alt: 'user4' }} />
        <Media body className="align-self-center">
          <div>Yuga</div>
        </Media>
      </Media>
    ),
    dob: '1995-11-18',
    phone: '9988776655',
    email: 'yuga@example.com',
    idProof: 'Driving License - DL0987654321',
    constituency: 'Constituency D',
    party: 'Party W',
    candidate: 'Candidate Delta',
    role: 'Assistant Booth Agent',
    status: false,
  },
  {
    id: 5,
    name: (
      <Media className='d-flex'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user3, alt: 'user5' }} />
        <Media body className="align-self-center">
          <div>Ananth</div>
        </Media>
      </Media>
    ),
    dob: '1988-04-02',
    phone: '9090909090',
    email: 'ananth@example.com',
    idProof: 'PAN - ABCDE1234F',
    constituency: 'Constituency E',
    party: 'Party V',
    candidate: 'Candidate Epsilon',
    role: 'Polling Officer',
    status: true,
  },
];

export const boothColumns = [
  { name: 'Name', selector: row => row.name, sortable: true },
  { name: 'DOB', selector: row => row.dob, sortable: true },
  { name: 'Phone', selector: row => row.phone, sortable: true },
  { name: 'Email', selector: row => row.email, sortable: true },
  { name: 'ID Proof', selector: row => row.idProof },
  { name: 'Constituency', selector: row => row.constituency, sortable: true },
  { name: 'Party', selector: row => row.party, sortable: true },
  { name: 'Candidate', selector: row => row.candidate, sortable: true },
  { name: 'Role', selector: row => row.role, sortable: true },
  {
    name: 'Status',
    cell: row => (
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
  },
];
