import React from 'react';
import { AbsoluteStyle, BorderBottom, BorderColorState, BorderLeft, BorderRight, BorderTop, ColorState, DragBothTitleCard, DragOnlyCard, DragOnlyContent } from '../../../../Constant';
import { Book, Briefcase, Droplet, Heart, MapPin } from 'react-feather';

export const CarouselsData = [
    {
        id: 1,
        img: require('../../../../assets/images/slider/1.jpg')
    },
    {
        id: 2,
        img: require('../../../../assets/images/slider/2.jpg')
    },
    {
        id: 3,
        img: require('../../../../assets/images/slider/3.jpg')
    },
    {
        id: 4,
        img: require('../../../../assets/images/slider/4.jpg')
    },
    {
        id: 5,
        img: require('../../../../assets/images/slider/5.jpg')
    },
    {
        id: 6,
        img: require('../../../../assets/images/slider/7.jpg')
    },
    {
        id: 7,
        img: require('../../../../assets/images/slider/8.jpg')
    },
    {
        id: 8,
        img: require('../../../../assets/images/slider/9.jpg')
    },
    {
        id: 9,
        img: require('../../../../assets/images/slider/10.jpg')
    },
    {
        id: 10,
        img: require('../../../../assets/images/slider/11.jpg')
    },
    {
        id: 11,
        img: require('../../../../assets/images/slider/6.jpg')
    }
];

export const BasicSweetalrtData = [
    {
        id: 1,
        color: 'primary',
        class: 'sweet-1',
        name: 'basic',
        title: 'Basic'
    },
    {
        id: 2,
        color: 'primary',
        class: 'sweet-2',
        name: 'basictitlealert',
        title: 'WithTitleAlert'
    },
    {
        id: 3,
        color: 'success',
        class: 'sweet-3',
        name: 'basicsuccessalert',
        title: 'SuccessAlert'
    },
    {
        id: 4,
        color: 'info',
        class: 'sweet-4',
        name: 'basicinfoalert',
        title: 'InfoAlert'
    },
    {
        id: 5,
        color: 'warning',
        class: 'sweet-5',
        name: 'basicwarningalert',
        title: 'WarningAlert'
    }
];
export const AlertSweetalertData = [
    {
        id: 1,
        color: 'success',
        class: 'sweet-8',
        name: 'alertSuccess',
        title: 'Success'
    },
    {
        id: 2,
        color: 'danger',
        class: 'sweet-7',
        name: 'alertDanger',
        title: 'Danger'
    },
    {
        id: 3,
        color: 'info',
        class: 'sweet-9',
        name: 'alertInfo',
        title: 'Information'
    },
    {
        id: 4,
        color: 'warning',
        class: 'sweet-6',
        name: 'alertWarning',
        title: 'Warning'
    },
];

export const AdvancedData = [
    {
        id: 1,
        color: 'danger',
        class: 'sweet-11',
        name: 'advanceDanger',
        title: 'Danger'
    },
    {
        id: 2,
        color: 'info',
        class: 'sweet-13',
        name: 'advanceInfo',
        title: 'Information'
    },
    {
        id: 3,
        color: 'warning',
        class: 'sweet-10',
        name: 'advanceWarning',
        title: 'Warning'
    },
];
// export const RibbonData = [
//   {
//     id: 1,
//     serial: 101,
//     section: 1,
//     part: 1,
//     voterId: 'RIV1000001',
//     name: 'Ponnammal / பொன்னம்மாள்',
//     relationType: 'Husband',
//     relationName: 'Ramachandra / ராமச்சந்திரா',
//     door: 'Door No 15/A 14',
//     age: 89,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 2,
//     serial: 102,
//     section: 1,
//     part: 1,
//     voterId: 'RIV1000002',
//     name: 'Venkatakrishnan / வெங்கடகிருஷ்ணன்',
//     relationType: 'Father',
//     relationName: 'Mangala / மங்களா',
//     door: 'Door No 28 A',
//     age: 73,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 3,
//     serial: 103,
//     section: 1,
//     part: 1,
//     voterId: 'RIV1000003',
//     name: 'Lakshmi / லக்ஷ்மி',
//     relationType: 'Husband',
//     relationName: 'Kumar / குமார்',
//     door: 'Door No 45 B',
//     age: 55,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 4,
//     serial: 104,
//     section: 1,
//     part: 2,
//     voterId: 'RIV1000004',
//     name: 'Ravi / ரவி',
//     relationType: 'Father',
//     relationName: 'Shankar / சங்கர்',
//     door: 'Door No 46 B',
//     age: 65,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 5,
//     serial: 105,
//     section: 1,
//     part: 2,
//     voterId: 'RIV1000005',
//     name: 'Anita / அனிதா',
//     relationType: 'Husband',
//     relationName: 'Suresh / சுரேஷ்',
//     door: 'Door No 47 C',
//     age: 45,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 6,
//     serial: 106,
//     section: 2,
//     part: 1,
//     voterId: 'RIV1000006',
//     name: 'Vikram / விக்ரம்',
//     relationType: 'Father',
//     relationName: 'Raj / ராஜ்',
//     door: 'Door No 48 D',
//     age: 38,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 7,
//     serial: 107,
//     section: 2,
//     part: 1,
//     voterId: 'RIV1000007',
//     name: 'Meena / மீனா',
//     relationType: 'Husband',
//     relationName: 'Ramesh / ரமேஷ்',
//     door: 'Door No 49 E',
//     age: 29,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 8,
//     serial: 108,
//     section: 2,
//     part: 2,
//     voterId: 'RIV1000008',
//     name: 'Sathish / சதீஷ்',
//     relationType: 'Father',
//     relationName: 'Murthy / மூர்த்தி',
//     door: 'Door No 50 F',
//     age: 41,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 9,
//     serial: 109,
//     section: 2,
//     part: 2,
//     voterId: 'RIV1000009',
//     name: 'Kala / களா',
//     relationType: 'Husband',
//     relationName: 'Prabhu / பிரபு',
//     door: 'Door No 51 G',
//     age: 36,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 10,
//     serial: 110,
//     section: 2,
//     part: 2,
//     voterId: 'RIV1000010',
//     name: 'Mani / மணि',
//     relationType: 'Father',
//     relationName: 'Balu / பாலு',
//     door: 'Door No 52 H',
//     age: 52,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 11,
//     serial: 111,
//     section: 3,
//     part: 1,
//     voterId: 'RIV1000011',
//     name: 'Divya / திவ்யா',
//     relationType: 'Husband',
//     relationName: 'Arun / அருண்',
//     door: 'Door No 53 I',
//     age: 27,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 12,
//     serial: 112,
//     section: 3,
//     part: 1,
//     voterId: 'RIV1000012',
//     name: 'Mohan / மோகன்',
//     relationType: 'Father',
//     relationName: 'Selva / செல்வா',
//     door: 'Door No 54 J',
//     age: 61,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 13,
//     serial: 113,
//     section: 3,
//     part: 2,
//     voterId: 'RIV1000013',
//     name: 'Radha / ராதா',
//     relationType: 'Husband',
//     relationName: 'Karthik / கார்த்திக்',
//     door: 'Door No 55 K',
//     age: 43,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 14,
//     serial: 114,
//     section: 3,
//     part: 2,
//     voterId: 'RIV1000014',
//     name: 'Dinesh / தினேஷ்',
//     relationType: 'Father',
//     relationName: 'Ganesh / கணேஷ்',
//     door: 'Door No 56 L',
//     age: 34,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 15,
//     serial: 115,
//     section: 3,
//     part: 2,
//     voterId: 'RIV1000015',
//     name: 'Saranya / சரண்யா',
//     relationType: 'Husband',
//     relationName: 'Manoj / மனோஜ்',
//     door: 'Door No 57 M',
//     age: 48,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 16,
//     serial: 116,
//     section: 4,
//     part: 1,
//     voterId: 'RIV1000016',
//     name: 'Kiran / கிரண்',
//     relationType: 'Father',
//     relationName: 'Arvind / அரவிந்த்',
//     door: 'Door No 58 N',
//     age: 50,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 17,
//     serial: 117,
//     section: 4,
//     part: 1,
//     voterId: 'RIV1000017',
//     name: 'Priya / பிரியா',
//     relationType: 'Husband',
//     relationName: 'Vijay / விஜய்',
//     door: 'Door No 59 O',
//     age: 62,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 18,
//     serial: 118,
//     section: 4,
//     part: 2,
//     voterId: 'RIV1000018',
//     name: 'Karthi / கார்த்தி',
//     relationType: 'Father',
//     relationName: 'Deva / தேவா',
//     door: 'Door No 60 P',
//     age: 66,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 19,
//     serial: 119,
//     section: 4,
//     part: 2,
//     voterId: 'RIV1000019',
//     name: 'Latha / லதா',
//     relationType: 'Husband',
//     relationName: 'Saravanan / சரவணன்',
//     door: 'Door No 61 Q',
//     age: 40,
//     gender: 'Female',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   },
//   {
//     id: 20,
//     serial: 120,
//     section: 4,
//     part: 2,
//     voterId: 'RIV1000020',
//     name: 'Ajay / அஜய்',
//     relationType: 'Father',
//     relationName: 'Nagaraj / நாகராஜ்',
//     door: 'Door No 62 R',
//     age: 39,
//     gender: 'Male',
//     image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
//   }
// ];

export const RibbonData = [
  // Family 1
  {
    id: 1,
    serial: 101,
    section: 1,
    part: 1,
    voterId: 'RIV1000001',
    name: 'Ponnammal / பொன்னம்மாள்',
    relationType: 'Husband',
    relationName: 'Ramachandra / ராமச்சந்திரா',
    door: 'Door No 15/A 14',
    age: 89,
    gender: 'Female',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },
  {
    id: 2,
    serial: 102,
    section: 1,
    part: 1,
    voterId: 'RIV1000002',
    name: 'Ramachandra / ராமச்சந்திரா',
    relationType: 'Wife',
    relationName: 'Ponnammal / பொன்னம்மாள்',
    door: 'Door No 15/A 14',
    age: 92,
    gender: 'Male',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },
  {
    id: 3,
    serial: 103,
    section: 1,
    part: 1,
    voterId: 'RIV1000003',
    name: 'Kannan / கண்ணன்',
    relationType: 'Father',
    relationName: 'Ramachandra / ராமச்சந்திரா',
    door: 'Door No 15/A 14',
    age: 60,
    gender: 'Male',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },

  // Family 2
  {
    id: 4,
    serial: 104,
    section: 1,
    part: 2,
    voterId: 'RIV1000004',
    name: 'Lakshmi / லக்ஷ்மி',
    relationType: 'Husband',
    relationName: 'Kumar / குமார்',
    door: 'Door No 20/B 5',
    age: 55,
    gender: 'Female',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },
  {
    id: 5,
    serial: 105,
    section: 1,
    part: 2,
    voterId: 'RIV1000005',
    name: 'Kumar / குமார்',
    relationType: 'Wife',
    relationName: 'Lakshmi / லக்ஷ்மி',
    door: 'Door No 20/B 5',
    age: 58,
    gender: 'Male',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },
  {
    id: 6,
    serial: 106,
    section: 1,
    part: 2,
    voterId: 'RIV1000006',
    name: 'Ravi / ரவி',
    relationType: 'Son',
    relationName: 'Kumar / குமார்',
    door: 'Door No 20/B 5',
    age: 25,
    gender: 'Male',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },

  // Family 3
  {
    id: 7,
    serial: 107,
    section: 2,
    part: 1,
    voterId: 'RIV1000007',
    name: 'Meena / மீனா',
    relationType: 'Husband',
    relationName: 'Ramesh / ரமேஷ்',
    door: 'Door No 25/C 1',
    age: 40,
    gender: 'Female',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },
  {
    id: 8,
    serial: 108,
    section: 2,
    part: 1,
    voterId: 'RIV1000008',
    name: 'Ramesh / ரமேஷ்',
    relationType: 'Wife',
    relationName: 'Meena / மீனா',
    door: 'Door No 25/C 1',
    age: 45,
    gender: 'Male',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },
  {
    id: 9,
    serial: 109,
    section: 2,
    part: 1,
    voterId: 'RIV1000009',
    name: 'Priya / பிரியா',
    relationType: 'Daughter',
    relationName: 'Ramesh / ரமேஷ்',
    door: 'Door No 25/C 1',
    age: 18,
    gender: 'Female',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  }
];

export const BasicCardData = [
    {
        id: 1,
        title: 'Basic Card',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.'
    },
    {
        id: 2,
        title: 'Flat Card',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.'
    },
    {
        id: 3,
        title: 'Without Shadow Card',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.'
    },
    {
        id: 4,
        icon: <i className="icofont icofont-truck me-2"></i>,
        title: 'Icon In Heading',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.'
    },
    {
        id: 5,
        title: 'Card Sub Title',
        span: 'Using the card component, you can extend the default collapse behavior to create an accordion.',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.'
    },
    {
        id: 6,
        title: 'Card With Footer',
        pare: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the the industrys standard dummy text ever.',
        footer: 'Card Footer'
    },
    {
        id: 7,
        title: 'Primary Color Card',
        colorClass: 'bg-primary border-bottom',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        footer: 'Card Footer',
        settingIcon: true
    },
    {
        id: 8,
        title: 'Secondary Color Card',
        colorClass: 'bg-secondary border-bottom',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        footer: 'Card Footer',
        settingIcon: true
    },
    {
        id: 9,
        title: 'Success Color Card',
        colorClass: 'bg-success border-bottom',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        footer: 'Card Footer',
        settingIcon: true
    },
    {
        id: 10,
        title: 'Primary Color Header',
        colorClass: 'bg-danger border-bottom',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        footer: 'Card Footer',
        settingIcon: true
    },
    {
        id: 11,
        title: 'Warning Color Footer',
        bodyClass: 'bg-primary',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        footer: 'Card Footer',
        settingIcon: true,
        settingPrimary: true
    },
    {
        id: 12,
        title: 'Warning Color Footer',
        footerClass: 'bg-primary',
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        footer: 'Card Footer',
        settingIcon: true,
        settingPrimary: true
    }
];

export const CreativeCardData = [
    {
        id: '1',
        title: BorderLeft,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-primary'
    },
    {
        id: '2',
        title: BorderRight,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-r-secondary'
    },
    {
        id: '3',
        title: BorderTop,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-t-success'
    },
    {
        id: '4',
        title: BorderBottom,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-b-info'
    },
    {
        id: '5',
        title: BorderColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-warning'
    },
    {
        id: '6',
        title: BorderColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-danger'
    },
    {
        id: '7',
        title: BorderColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-dark'
    },
    {
        id: '8',
        title: BorderColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-primary'
    },
    {
        id: '9',
        title: BorderColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-secondary border-2'
    },
    {
        id: '10',
        title: BorderColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'b-l-primary border-3'
    },
    {
        id: '11',
        cardClass: 'card-absolute',
        title: AbsoluteStyle,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'bg-primary'
    },
    {
        id: '12',
        cardClass: 'card-absolute',
        title: ColorState,
        pare: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        headerClass: 'bg-secondary'
    }
];

export const TabCardData = [
    {
        pare1: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.',
        pare2: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s.',
        pare3: 'Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
        navClass: 'pull-right  nav-pills nav-primary',
        state: 'activeTab'
    },
];

export const dragData = [
    {
        title: DragBothTitleCard,
        bordType: 'initialBoard',
        board: {
            columns: [
                {
                    id: 1,
                    title: 'Backlog',
                    cards: [
                        {
                            id: 1,
                            title: 'Add card',
                            description: 'Add capability to add a card in a column'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Doing',
                    cards: [
                        {
                            id: 2,
                            title: 'Drag-n-drop support',
                            description: 'Move a card between the columns'
                        },
                    ]
                }
            ]
        }
    },
    {
        title: DragOnlyCard,
        bordType: 'disableCardDrag',
        board: {
            columns: [
                {
                    id: 1,
                    title: 'Backlog',
                    cards: [
                        {
                            id: 1,
                            title: 'Add card',
                            description: 'Add capability to add a card in a column'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Doing',
                    cards: [
                        {
                            id: 2,
                            title: 'Drag-n-drop support',
                            description: 'Move a card between the columns'
                        },
                    ]
                }
            ]
        }

    },
    {
        title: DragOnlyContent,
        bordType: 'DragOnlyContent',
        board: {
            columns: [
                {
                    id: 1,
                    title: 'Backlog',
                    cards: [
                        {
                            id: 1,
                            title: 'Add card',
                            description: 'Add capability to add a card in a column'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Doing',
                    cards: [
                        {
                            id: 2,
                            title: 'Drag-n-drop support',
                            description: 'Move a card between the columns'
                        },
                    ]
                }
            ]
        }
    }
];

export const FriendsData = [
    {
        id: 1,
        img: require('../../../../assets/images/user/3.jpg'),
        title: 'Jason Borne'
    },
    {
        id: 2,
        img: require('../../../../assets/images/user/5.jpg'),
        title: 'Anna Mull'
    },
    {
        id: 3,
        img: require('../../../../assets/images/user/2.png'),
        title: 'Dion Cast'
    },
    {
        id: 4,
        img: require('../../../../assets/images/user/3.jpg'),
        title: 'Karlene Lex'
    },
    {
        id: 5,
        img: require('../../../../assets/images/user/6.jpg'),
        title: 'Vella Chism'
    },
    {
        id: 6,
        img: require('../../../../assets/images/user/10.jpg'),
        title: 'Wai Schalk'
    },
];

export const LatestPhotosData = [
    {
        id: 1,
        img: require('../../../../assets/images/social-app/post-1.png')
    },
    {
        id: 2,
        img: require('../../../../assets/images/social-app/post-2.png')
    },
    {
        id: 3,
        img: require('../../../../assets/images/social-app/post-3.png')
    },
    {
        id: 4,
        img: require('../../../../assets/images/social-app/post-4.png')
    },
    {
        id: 5,
        img: require('../../../../assets/images/social-app/post-5.png')
    },
    {
        id: 6,
        img: require('../../../../assets/images/social-app/post-6.png')
    },
    {
        id: 7,
        img: require('../../../../assets/images/social-app/post-7.png')
    },
    {
        id: 8,
        img: require('../../../../assets/images/social-app/post-8.png')
    }
];

export const AboutMeData = [
    {
        id: 1,
        icon: <Briefcase />,
        designation: 'UX desginer at Pixelstrap',
        place: 'banglore - 2021'
    },
    {
        id: 2,
        icon: <Book />,
        designation: 'studied computer science',
        place: 'at london univercity - 2015'
    },
    {
        id: 3,
        icon: <Heart />,
        designation: 'relationship status',
        place: 'single'
    },
    {
        id: 4,
        icon: <MapPin />,
        designation: 'lived in london',
        place: 'last 5 year'
    },
    {
        id: 5,
        icon: <Droplet />,
        designation: 'blood group',
        place: 'O+ positive'
    }
];
export const FollowingsData = [
    {
        id: 1,
        img: require('../../../../assets/images/user/3.png'),
        name: 'Sarah Loren'
    },
    {
        id: 2,
        img: require('../../../../assets/images/user/2.png'),
        name: 'Bucky Barnes'
    },
    {
        id: 3,
        img: require('../../../../assets/images/user/10.jpg'),
        name: 'Comeren Diaz'
    },
    {
        id: 4,
        img: require('../../../../assets/images/user/11.png'),
        name: 'Jason Borne'
    },
    {
        id: 5,
        img: require('../../../../assets/images/user/3.png'),
        name: 'Andew Jon'
    }
];
export const FollowersData = [
    {
        id: 1,
        img: require('../../../../assets/images/user/2.png'),
        name: 'Bucky Barnes'
    },
    {
        id: 2,
        img: require('../../../../assets/images/user/3.png'),
        name: 'Sarah Loren'
    },
    {
        id: 3,
        img: require('../../../../assets/images/user/4.jpg'),
        name: 'Jason Borne'
    },
    {
        id: 4,
        img: require('../../../../assets/images/user/10.jpg'),
        name: 'Comeren Diaz'
    },
    {
        id: 5,
        img: require('../../../../assets/images/user/11.png'),
        name: 'Andew Jon'
    }
];