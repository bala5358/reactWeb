// import React, { Fragment } from 'react';
// import { Col, Container, Row } from 'reactstrap';
// import { Breadcrumbs } from '../../../AbstractElements';
// import { SmallWidgetsData, SocialWidgetData } from '../../../Data/Social';

// import AllCampaigns from './AllCampaigns';
// import FacebookCampaign from './FacebookCampaign';
// import FollowerGender from './FollowerGender';
// import InstagramSubscription from './InstagramSubscription';
// import MobileAppCard from './MobileAppCard';
// import SmallWidgets from './SmallWidgets';
// import SocialProfileCard from './SocialProfileCard';
// import SocialWidget from '../../Common/CommonWidgets/SocialWidget';
// import Views from './Views';

// const Social = () => {
//   return (
//     <Fragment>
//       <Breadcrumbs mainTitle='Social' parent='Dashboard' title='Social' />
//       <Container fluid={true}>
//         <Row>
//           <Col xxl='3' xl='4' className='col-ed-4 box-col-4'>
//             <Row>
//               <Col xl='12' md='6'>
//                 <SocialProfileCard />
//               </Col>
//               <Col xl='12' md='6'>
//                 <MobileAppCard />
//               </Col>
//             </Row>
//           </Col>
//           <Col xxl='6' xl='8' className='col-ed-8 box-col-8e'>
//             <Row>
//               {SocialWidgetData.map((item, i) => (
//                 <Col md='4' sm='6' key={i}>
//                   <SocialWidget data={item} />
//                 </Col>
//               ))}
//               <Col md='8'>
//                 <InstagramSubscription />
//               </Col>
//               <Col md='4'>
//                 <Row>
//                   {SmallWidgetsData.map((item, i) => (
//                     <Col md='12' sm='6' key={i}>
//                       <SmallWidgets data={item} />
//                     </Col>
//                   ))}
//                 </Row>
//               </Col>
//             </Row>
//           </Col>
//           <Col xl='3' className='col-ed-none d-xxl-block d-lg-none box-col-none'>
//             <Row>
//               <Col lg='12' sm='6'>
//                 <FollowerGender />
//               </Col>
//               <Col lg='12' sm='6'>
//                 <FacebookCampaign />
//               </Col>
//             </Row>
//           </Col>
//           <Col xl='7'>
//             <AllCampaigns />
//           </Col>
//           <Col xl='5'>
//             <Views />
//           </Col>
//         </Row>
//       </Container>
//     </Fragment>
//   );
// };

// export default Social;




import React, { useState } from "react";
import { Row, Col, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/election/sample1.jpg";
import img2 from "../../../assets/images/election/sample2.jpg";
import img3 from "../../../assets/images/election/sample3.png";

import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardBody, CardHeader } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import { HoverEffect } from '../../../Constant';


const allItems = [
  { label: "Volunteer Manager", icon: "fa fa-user", slug: "cadre" },
  { label: "Voter Directory", icon: "fa fa-check-square", slug: "voter" },
  { label: "Family Directory", icon: "fa fa-users", slug: "family" },
  { label: "Field Survey Hub", icon: "fa fa-list-alt", slug: "survey" },
  { label: "Booth Agent", icon: "fa fa-desktop", slug: "booth" },
  // { label: "Birthday", icon: "fa fa-birthday-cake", slug: "birthday" },
  // { label: "Star", icon: "fa fa-star", slug: "star" },
  { label: "80 Above", icon: "fa fa-blind", slug: "above80" },
  { label: "New", icon: "fa fa-child", slug: "new" },
  { label: "Transgender", icon: "fa fa-transgender", slug: "transgender" },
  { label: "Fatherless", icon: "fa fa-user-times", slug: "fatherless" },
  { label: "Guardian", icon: "fa fa-shield", slug: "guardian" },
  // { label: "Overseas", icon: "fa fa-globe", slug: "overseas" },
];

// const topItems = ["Cadre Manager", "Voter Manager", "Family Manager", "Survey Manager"];
const topItems = ["Volunteer Manager", "Voter Directory", "Family Directory", "Field Survey Hub"];





const imageData = [
  {
    src: img1,
    title: "Voter Awareness",
    tags: ["Campaign", "Awareness"],
    date: "2025-07-01",
  },
  {
    src: img2,
    title: "Election Day",
    tags: ["Polling", "India"],
    date: "2025-07-05",
  },
  {
    src: img3,
    title: "Results Declared",
    tags: ["Results", "Celebration"],
    date: "2025-07-08",
  },
];

export default function Election() {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const fixedCards = allItems.filter((item) => topItems.includes(item.label));
  const searchableItems = allItems.filter((item) => !topItems.includes(item.label));
  const filteredItems = searchableItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  const openModal = (img) => {
    setModalImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  const renderTopCard = (item, idx) => (
  <Col key={idx} xs="12" sm="6" md="4" xl="3" className="mb-4 d-flex justify-content-center">
    <div
      className="position-relative text-center"
      style={{
        width: "100%",
        minHeight: "185px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #7366FF, #6FC1FF)",
        color: "#fff",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 16px",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/manager/${item.slug}`)}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div>
        <i className={item.icon} style={{ fontSize: "2rem" }}></i>
        <h5 style={{ marginTop: "10px", marginBottom: "16px" }}>{item.label}</h5>
      </div>

      {/* Button Wrapper with Bottom Margin */}
      <div style={{ marginBottom: "16px" }}>
        <button
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "none",
            background: "#fff",
            color: "#7366FF",
            fontSize: "1.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <i className="fa fa-external-link"></i>
        </button>
      </div>
    </div>
  </Col>
);



  const renderCard = (item, idx) => (
    <Col key={idx} xs="6" sm="4" md="3" lg="2" className="mb-4 d-flex justify-content-center">
      <div
        className="text-center p-4 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
        style={{
          border: "1px solid transparent",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.border = "1px solid #7366FF";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(115, 102, 255, 0.25)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.border = "1px solid transparent";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
        }}
      >
        <i className={`${item.icon}`} style={{ fontSize: "2rem", color: "#7366FF" }}></i>
        <div className="mt-3 text-dark fw-semibold" style={{ fontSize: "0.95rem" }}>
          {item.label}
        </div>
      </div>
    </Col>
  );

  return (
    <div className="p-4">
      <Row className="mb-4">{fixedCards.map(renderTopCard)}</Row>

      <Row className="mb-5 justify-content-center">
  <Col md={8} lg={6}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        padding: "10px 16px",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(115, 102, 255, 0.3)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <i
        className="fa fa-search"
        style={{
          fontSize: "1.2rem",
          color: "#7366FF",
          marginRight: "10px",
        }}
      ></i>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by label..."
        style={{
          border: "none",
          boxShadow: "none",
          fontSize: "1rem",
        }}
      />
    </div>
  </Col>
</Row>


      <Row>
        {filteredItems.length > 0 ? (
          filteredItems.map(renderCard)
        ) : (
          <Col xs="12" className="text-center text-muted">
            No results found.
          </Col>
        )}
      </Row>

      <Row>
                      <Col sm="12">
                          <Card>
                              {/* <CardHeader>
                                  <H5>{HoverEffect} <span className="digits">{'1'}</span></H5>
                              </CardHeader> */}
                              <CardBody>
                                  <div id="aniimated-thumbnials" className="row my-gallery gallery">
                                      <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                          <div className="">
                                              <Image attrImage={{
                                                  className: 'img-fluid', src: `${require('../../../assets/images/election/sample1.jpg')}`, itemProp: 'thumbnail', alt: ''
                                              }} />
                                          </div>
                                      </figure>
                                      <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                          <div className="">
                                              <Image attrImage={{
                                                  className: 'img-fluid', src: `${require('../../../assets/images/election/sample2.jpg')}`, itemProp: 'thumbnail', alt: ''
                                              }} />
                                          </div>
                                      </figure>
                                      <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                          <div className="">
                                              <Image attrImage={{
                                                  className: 'img-fluid', src: `${require('../../../assets/images/election/sample1.jpg')}`, itemProp: 'thumbnail', alt: ''
                                              }} />
                                          </div>
                                      </figure>
                                      <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                          <div className="">
                                              <Image attrImage={{
                                                  className: 'img-fluid', src: `${require('../../../assets/images/election/sample2.jpg')}`, itemProp: 'thumbnail', alt: ''
                                              }} />
                                          </div>
                                      </figure>
                                  </div>
                              </CardBody>
                          </Card>
                      </Col>
                  </Row>
    </div>
  );
}
