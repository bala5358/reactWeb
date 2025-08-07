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

export const Tasklistdata = [
  {
    id: 1,
    name: (
      <Media className="d-flex">
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user1, alt: 'Generic placeholder image' }} />
        <Media body className="align-self-center">
          <div>Tharun Kumar</div>
        </Media>
      </Media>
    ),
    dateAssigned: '2023/04/27',
    surveyStatus: 'Assigned',
    assignedSurvey: 'Booth 17 - Zone A',
    remarks: 'First-time assigned task',
    priority: <span className="badge badge-light-primary">High</span>,
  
  },
  {
    id: 2,
    name: (
      <Media className="d-flex">
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: user2, alt: 'Generic placeholder image' }} />
        <Media body className="align-self-center">
          <div>Thomas Taylor</div>
        </Media>
      </Media>
    ),
    dateAssigned: '2023/04/22',
    surveyStatus: 'In Progress',
    assignedSurvey: 'Booth 12 - Zone B',
    remarks: 'Requires follow-up visit',
    priority: <span className="badge badge-light-danger">Urgent</span>,
    
  }
];


export const TasklistColumns = [
  {
    name: 'Agent Name / ID',
    selector: row => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'Date Assigned',
    selector: row => row.dateAssigned,
    sortable: true,
    center: true,
  },
  {
    name: 'Survey Status',
    selector: row => row.surveyStatus,
    sortable: true,
    center: true,
  },
  {
    name: 'Assigned Survey / Booth',
    selector: row => row.assignedSurvey,
    sortable: true,
    center: true,
  },
  {
    name: 'Remarks / Notes',
    selector: row => row.remarks,
    sortable: true,
    center: true,
  },
  {
    name: 'Priority',
    selector: row => row.priority,
    sortable: true,
    center: true,
  },

];
