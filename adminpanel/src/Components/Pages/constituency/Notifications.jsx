// import React from "react";
// import { Link } from "react-router-dom";
// import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
// import { Image, H5, P } from "../../../AbstractElements";
// import { DailyDropdown } from "../../../Constant";
// import { NotificationsData } from "./constituencyData";
// import DropdownCommon from "../../Common/Dropdown";

// const Notifications = () => {
//   return (
//     <Col xxl="12" md="6" className="appointment-sec box-col-6">
//       <div className="appointment">
//         <Card>
//           <CardHeader className="card-no-border">
//   <div className="header-top">
//     <H5 attrH5={{ className: "m-0" }}>Notifications</H5>
//     <div className="card-header-right-icon">
//       <DropdownCommon
//         icon={false}
//         options={DailyDropdown} // now contains real election years
//         btn={{ caret: true }}
//       />
//     </div>
//   </div>
// </CardHeader>
//           <CardBody className="pt-0">
//             <div className="appointment-table">
//               <Table borderless responsive>
//                 <tbody>
//                   {NotificationsData.map((item, i) => (
//                     <tr key={i}>
//                       <td>
//                         <Image
//                           attrImage={{
//                             className: "img-fluid img-40 rounded-circle",
//                             src: require(`../../../assets/images/dashboard/user/${item.image}`),
//                             alt: "user",
//                           }}
//                         />
//                       </td>
//                       <td className="img-content-box">
//                         <Link
//                           className="d-block f-w-500"
//                           to={`${process.env.PUBLIC_URL}/profile`}
//                         >
//                           {item.title}
//                         </Link>
//                         <span className="f-light">{item.subTitle}</span>
//                       </td>
//                       <td className="text-end">
//                         <P
//                           attrPara={{
//                             className: `m-0 ${
//                               item.badge.includes("-")
//                                 ? "font-danger"
//                                 : "font-success"
//                             }`,
//                           }}
//                         >
//                           {item.badge}
//                         </P>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//           </CardBody>
//         </Card>
//       </div>
//     </Col>
//   );
// };

// export default Notifications;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import { Image, H5, P } from "../../../AbstractElements";
import { DailyDropdown } from "../../../Constant";
import { NotificationsData } from "./constituencyData";
import DropdownCommon from "../../Common/Dropdown";

const Notifications = () => {
  const [selectedYear, setSelectedYear] = useState(DailyDropdown[0]); // Default to first year

  // Filter data based on selected year
  const filteredNotifications = NotificationsData.filter(
    (item) => String(item.year) === String(selectedYear)
  );

  return (
    <Col xxl="12" md="12" className="appointment-sec box-col-12">
      <div className="appointment">
        <Card>
          <CardHeader className="card-no-border">
            <div className="header-top">
              <H5 attrH5={{ className: "m-0" }}>Notifications</H5>
              <div className="card-header-right-icon">
                <DropdownCommon
                  icon={false}
                  options={DailyDropdown}
                  btn={{ caret: true }}
                  onSelect={(year) => setSelectedYear(year)} // Pass year back
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="appointment-table">
              <Table borderless responsive>
                <tbody>
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <Image
                            attrImage={{
                              className: "img-fluid img-40 rounded-circle",
                              src: require(`../../../assets/images/party/${item.image}`),
                              alt: "user",
                            }}
                          />
                        </td>
                        <td className="img-content-box">
                          <Link
                            className="d-block f-w-500"
                            to={`${process.env.PUBLIC_URL}/profile`}
                          >
                            {item.title}
                          </Link>
                          <span className="f-light">{item.subTitle}</span>
                        </td>
                        <td className="text-end">
                          <P
                            attrPara={{
                              className: `m-0 ${
                                item.badge.includes("-")
                                  ? "font-danger"
                                  : "font-success"
                              }`,
                            }}
                          >
                            {item.badge}
                          </P>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">
                        No notifications for {selectedYear}
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default Notifications;
