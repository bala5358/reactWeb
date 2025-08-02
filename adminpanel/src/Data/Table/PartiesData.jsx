import React from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import partyLogo1 from '../../assets/images/user/1.jpg';
import partyLogo2 from '../../assets/images/user/2.png';
import partyLogo3 from '../../assets/images/user/3.jpg';
export const partyTableData = [
  {
    id: 1,
    partyName: 'Democratic Alliance (DA)',
    partySymbol: '🌟',
    logo: (
      <Media className="d-flex">
        <Image attrImage={{ className: 'img-30 me-2', src: partyLogo1, alt: 'Party Logo' }} />
        <Media body className="align-self-center">DA</Media>
      </Media>
    ),
    leader: 'Jane Smith',
    ecRegId: 'EC-DA-00123',
    email: 'contact@da.org',
    phone: '+91 9876543210',
    address: '10 Downing Street, London',
    createdDate: '2024-12-12',
    status: <span className="badge badge-light-success">Active</span>,
  },
  {
    id: 2,
    partyName: 'National People’s Party (NPP)',
    partySymbol: '🦅',
    logo: (
      <Media className="d-flex">
        <Image attrImage={{ className: 'img-30 me-2', src: partyLogo2, alt: 'Party Logo' }} />
        <Media body className="align-self-center">NPP</Media>
      </Media>
    ),
    leader: 'Arun Rao',
    ecRegId: 'EC-NPP-00456',
    email: 'npp@india.org',
    phone: '+91 9123456780',
    address: 'Ashoka Road, Delhi',
    createdDate: '2023-08-15',
    status: <span className="badge badge-light-primary">Inactive</span>,
  },
  {
    id: 3,
    partyName: 'Green Earth Movement (GEM)',
    partySymbol: '🌿',
    logo: (
      <Media className="d-flex">
        <Image attrImage={{ className: 'img-30 me-2', src: partyLogo3, alt: 'Party Logo' }} />
        <Media body className="align-self-center">GEM</Media>
      </Media>
    ),
    leader: 'Priya Verma',
    ecRegId: 'EC-GEM-00789',
    email: 'gem@movement.org',
    phone: '+91 9000000000',
    address: 'Eco Towers, Bangalore',
    createdDate: '2022-05-01',
    status: <span className="badge badge-light-danger">Disqualified</span>,
  },
];
export const partyTableColumns = [
  {
    name: 'Party Name',
    selector: row => row.partyName,
    sortable: true,
    center: false,
  },
  {
    name: 'Symbol',
    selector: row => row.partySymbol,
    sortable: true,
    center: true,
  },
  {
    name: 'Logo',
    selector: row => row.logo,
    sortable: false,
    center: true,
  },
  {
    name: 'Leader Name',
    selector: row => row.leader,
    sortable: true,
    center: true,
  },
  {
    name: 'EC Registration ID',
    selector: row => row.ecRegId,
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
    name: 'Phone',
    selector: row => row.phone,
    sortable: false,
    center: true,
  },
  {
    name: 'Address',
    selector: row => row.address,
    sortable: true,
    center: false,
  },
  {
    name: 'Created Date',
    selector: row => row.createdDate,
    sortable: true,
    center: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    center: true,
  },
];
