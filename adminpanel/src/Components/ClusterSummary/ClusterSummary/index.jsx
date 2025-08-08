// // import React, { useEffect, useState } from "react";
// // import BoothCard from "../BoothCard";
// // import { fetchClusterSummary } from "../../api/clusterApi";

// // const ClusterSummary = () => {
// //   const [booths, setBooths] = useState([]);
// //   const [filter, setFilter] = useState("all");

// //   useEffect(() => {
// //     const loadData = async () => {
// //       const data = await fetchClusterSummary();
// //       setBooths(data);
// //     };
// //     loadData();
// //   }, []);

// //   const filteredBooths = booths.filter((booth) => {
// //     if (filter === "all") return true;
// //     if (filter === "complete") return booth.voter_data_pct === 100;
// //     if (filter === "pending") return booth.voter_data_pct < 100;
// //     return true;
// //   });

// //   return (
// //     <div className="container my-4">
// //       <h2 className="mb-3">📍 Cluster Summary</h2>

// //       <div className="mb-4 d-flex gap-2 flex-wrap">
// //         <button
// //           className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
// //           onClick={() => setFilter("all")}
// //         >
// //           All Booths
// //         </button>
// //         <button
// //           className={`btn btn-sm ${filter === "complete" ? "btn-success" : "btn-outline-success"}`}
// //           onClick={() => setFilter("complete")}
// //         >
// //           Completed
// //         </button>
// //         <button
// //           className={`btn btn-sm ${filter === "pending" ? "btn-warning" : "btn-outline-warning"}`}
// //           onClick={() => setFilter("pending")}
// //         >
// //           Pending
// //         </button>
// //       </div>

// //       {filteredBooths.length === 0 ? (
// //         <p>No booths found for this filter.</p>
// //       ) : (
// //         filteredBooths.map((booth) => <BoothCard key={booth.booth_id} booth={booth} />)
// //       )}
// //     </div>
// //   );
// // };

// // export default ClusterSummary;



// // import React, { useEffect, useState } from "react";
// // import { fetchClusterSummary } from "../../api/clusterApi";
// // import { FaUser, FaClock } from "react-icons/fa";
// // import { BsPinMapFill } from "react-icons/bs";
// // const ClusterSummary = () => {
// //   const [booths, setBooths] = useState([]);
// //   const [filter, setFilter] = useState("all");

// //   useEffect(() => {
// //     const loadData = async () => {
// //       const data = await fetchClusterSummary();
// //       setBooths(data);
// //     };
// //     loadData();
// //   }, []);

// //   const filteredBooths = booths.filter((booth) => {
// //     if (filter === "all") return true;
// //     if (filter === "complete") return booth.voter_data_pct === 100;
// //     if (filter === "pending") return booth.voter_data_pct < 100;
// //     return true;
// //   });

// //   const getProgressColor = (value) => {
// //     if (value >= 90) return "#28a745"; // green
// //     if (value >= 60) return "#ffc107"; // orange
// //     return "#dc3545"; // red
// //   };

// //   return (
// //     <div className="cluster-summary-container">
// //       <style>
// //         {`
// //         .cluster-summary-container {
// //           padding: 1rem;
// //           max-width: 960px;
// //           margin: auto;
// //           font-family: sans-serif;
// //         }
// //         .heading {
// //           margin-bottom: 1rem;
// //         }
// //         .filter-buttons {
// //           display: flex;
// //           gap: 1rem;
// //           margin-bottom: 1.5rem;
// //         }
// //         .filter-btn {
// //           padding: 6px 12px;
// //           border: 1px solid #ccc;
// //           background-color: white;
// //           border-radius: 4px;
// //           cursor: pointer;
// //           font-weight: 500;
// //           transition: 0.3s ease;
// //         }
// //         .filter-btn.active {
// //           background-color: #007bff;
// //           color: white;
// //           border-color: #007bff;
// //         }
// //         .booth-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //           gap: 1.25rem;
// //         }
// //         .booth-card {
// //           background: white;
// //           border-radius: 12px;
// //           padding: 1rem;
// //           border: 1px solid #eaeaea;
// //           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
// //           transition: transform 0.2s;
// //         }
// //         .booth-card:hover {
// //           transform: translateY(-4px);
// //         }
// //         .booth-header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //         }
// //         .status-dot {
// //           width: 12px;
// //           height: 12px;
// //           border-radius: 50%;
// //         }
// //         .agent-name {
// //           font-weight: 500;
// //           margin: 0.5rem 0 1rem;
// //         }
// //         .metric label {
// //           font-size: 0.8rem;
// //           font-weight: 600;
// //           margin-bottom: 0.25rem;
// //           display: block;
// //         }
// //         .progress-bar-wrapper {
// //           width: 100%;
// //           background-color: #e9ecef;
// //           border-radius: 8px;
// //           overflow: hidden;
// //           height: 18px;
// //           position: relative;
// //         }
// //         .progress-fill {
// //           height: 100%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 0.75rem;
// //           font-weight: bold;
// //           color: white;
// //           transition: width 0.3s ease;
// //         }
// //         .last-updated {
// //           font-size: 0.75rem;
// //           color: gray;
// //           margin-top: 0.75rem;
// //         }
// //         `}
// //       </style>

// //       <h2 className="heading">📍 Cluster Summary</h2>

// //       <div className="filter-buttons">
// //         {["all", "complete", "pending"].map((type) => (
// //           <button
// //             key={type}
// //             className={`filter-btn ${filter === type ? "active" : ""}`}
// //             onClick={() => setFilter(type)}
// //           >
// //             {type.charAt(0).toUpperCase() + type.slice(1)}
// //           </button>
// //         ))}
// //       </div>

// //       <div className="booth-grid">
// //         {filteredBooths.map((booth) => (
// //           <div key={booth.booth_id} className="booth-card">
// //             <div className="booth-header">
// //               <h4>{booth.booth_name}</h4>
// //               <span
// //                 className="status-dot"
// //                 style={{ backgroundColor: getProgressColor(booth.voter_data_pct) }}
// //               />
// //             </div>
// //             <p className="agent-name">👤 {booth.agent}</p>

// //             {["voter_data_pct", "turnout_pct", "survey_pct"].map((key) => (
// //               <div className="metric" key={key}>
// //                 <label>{key.replace("_pct", "").replace("_", " ").toUpperCase()}</label>
// //                 <div className="progress-bar-wrapper">
// //                   <div
// //                     className="progress-fill"
// //                     style={{
// //                       width: `${booth[key]}%`,
// //                       backgroundColor: getProgressColor(booth[key]),
// //                     }}
// //                   >
// //                     {booth[key]}%
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //             <p className="last-updated">
// //               ⏱️ Last Updated: {new Date(booth.last_updated).toLocaleString()}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ClusterSummary;



// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardBody,
//   Nav,
//   NavItem,
//   NavLink,
//   TabContent,
//   TabPane,
//   Col,
// } from "reactstrap";
// import { FaUser, FaClock } from "react-icons/fa";
// import { BsPinMapFill } from "react-icons/bs";
// import { fetchClusterSummary } from "../../api/clusterApi";
// import HeaderCard from "../Common/Component/HeaderCard";

// const ClusterTabs = () => {
//   const [activeTab, setActiveTab] = useState("1");
//   const [booths, setBooths] = useState([]);
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetchClusterSummary();
//       setBooths(data);
//     };
//     loadData();
//   }, []);

//   const filteredBooths = booths.filter((booth) => {
//     if (filter === "all") return true;
//     if (filter === "complete") return booth.voter_data_pct === 100;
//     if (filter === "pending") return booth.voter_data_pct < 100;
//     return true;
//   });

//   const getProgressColor = (value) => {
//     if (value >= 90) return "#28a745"; // green
//     if (value >= 60) return "#ffc107"; // orange
//     return "#dc3545"; // red
//   };

//   return (
//     <Col lg="12" xl="12">
//       <Card>
//         <HeaderCard title="Cluster Module" />
//         <CardBody>
//           <div className="tabbed-card">
//             <Nav tabs>
//               <NavItem>
//                 <NavLink
//                   className={activeTab === "1" ? "active" : ""}
//                   onClick={() => setActiveTab("1")}
//                 >
//                   📍 Cluster Summary
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   className={activeTab === "2" ? "active" : ""}
//                   onClick={() => setActiveTab("2")}
//                 >
//                   📊 Agent Performance
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   className={activeTab === "3" ? "active" : ""}
//                   onClick={() => setActiveTab("3")}
//                 >
//                   🚩 Issues
//                 </NavLink>
//               </NavItem>
//             </Nav>
//             <TabContent activeTab={activeTab} className="mt-3">
//               <TabPane tabId="1">
//                 {/* Cluster Summary UI */}
//                 <div className="filter-buttons mb-3 d-flex gap-2">
//                   {["all", "complete", "pending"].map((type) => (
//                     <button
//                       key={type}
//                       className={`btn btn-sm ${
//                         filter === type ? "btn-primary" : "btn-outline-secondary"
//                       }`}
//                       onClick={() => setFilter(type)}
//                     >
//                       {type.charAt(0).toUpperCase() + type.slice(1)}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="booth-grid">
//                   {filteredBooths.map((booth) => (
//                     <div key={booth.booth_id} className="booth-card">
//                       <div className="booth-header">
//                         <h5>{booth.booth_name}</h5>
//                         <span
//                           className="status-dot"
//                           style={{
//                             backgroundColor: getProgressColor(
//                               booth.voter_data_pct
//                             ),
//                           }}
//                         />
//                       </div>
//                       <p className="agent-name">
//                         <FaUser /> {booth.agent}
//                       </p>
//                       {["voter_data_pct", "turnout_pct", "survey_pct"].map(
//                         (key) => (
//                           <div className="metric" key={key}>
//                             <label>
//                               {key
//                                 .replace("_pct", "")
//                                 .replace("_", " ")
//                                 .toUpperCase()}
//                             </label>
//                             <div className="progress-bar-wrapper">
//                               <div
//                                 className="progress-fill mb-2"
//                                 style={{
//                                   width: `${booth[key]}%`,
//                                   backgroundColor: getProgressColor(booth[key]),
//                                 }}
//                               >
//                                 {booth[key]}%
//                               </div>
//                             </div>
//                           </div>
//                         )
//                       )}
//                       <p className="last-updated">
//                         <FaClock />{" "}
//                         {new Date(booth.last_updated).toLocaleString()}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </TabPane>

//               <TabPane tabId="2">
//                 <p>Agent Performance tab – coming soon!</p>
//               </TabPane>

//               <TabPane tabId="3">
//                 <p>Issue Feed tab – coming soon!</p>
//               </TabPane>
//             </TabContent>
//           </div>
//         </CardBody>
//       </Card>

//       {/* Inline Styles */}
//       <style>
//         {`
//           .booth-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//             gap: 1.25rem;
//           }
//           .booth-card {
//             background: white;
//             border-radius: 12px;
//             padding: 1rem;
//             border: 1px solid #eaeaea;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
//             transition: transform 0.2s;
//           }
//           .booth-card:hover {
//             transform: translateY(-4px);
//           }
//           .booth-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//           }
//           .status-dot {
//             width: 12px;
//             height: 12px;
//             border-radius: 50%;
//           }
//           .agent-name {
//             font-weight: 500;
//             margin: 0.5rem 0 1rem;
//             display: flex;
//             align-items: center;
//             gap: 0.5rem;
//           }
//           .metric label {
//             font-size: 0.8rem;
//             font-weight: 600;
//             margin-bottom: 0.25rem;
//             display: block;
//           }
//           .progress-bar-wrapper {
//             width: 100%;
//             background-color: #e9ecef;
//             border-radius: 8px;
//             overflow: hidden;
//             height: 18px;
//             position: relative;
//           }
//           .progress-fill {
//             height: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 0.75rem;
//             font-weight: bold;
//             color: white;
//             transition: width 0.3s ease;
//           }
//           .last-updated {
//             font-size: 0.75rem;
//             color: gray;
//             margin-top: 0.75rem;
//             display: flex;
//             align-items: center;
//             gap: 0.4rem;
//           }
//         `}
//       </style>
//     </Col>
//   );
// };

// export default ClusterTabs;



import React, { useEffect, useState } from "react";
import { fetchClusterSummary } from "../../api/clusterApi"; // Replace with real API

const ClusterSummary = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSummary = async () => {
      const res = await fetchClusterSummary();
      setData(res);
      setLoading(false);
    };
    loadSummary();
  }, []);

  const getTotalSubmissions = (sub) =>
    (sub.voter || 0) + (sub.turnout || 0) + (sub.survey || 0);

  const getCompletionPct = (sub, target) => {
    const total = getTotalSubmissions(sub);
    return target > 0 ? Math.round((total / target) * 100) : 0;
  };

  const getProgressColor = (pct) => {
    if (pct >= 90) return "bg-success";
    if (pct >= 60) return "bg-warning";
    return "bg-danger";
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4 fw-bold">📊 Cluster Summary Overview</h3>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" />
          <p className="mt-2">Loading cluster data...</p>
        </div>
      ) : (
        <div className="row g-4">
          {data.map((booth, idx) => {
            const total = getTotalSubmissions(booth.submissions);
            const pct = getCompletionPct(booth.submissions, booth.target);
            const progressColor = getProgressColor(pct);

            return (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-2 text-primary">
                      🏷️ {booth.booth_name}
                    </h5>

                    <div className="mb-3">
                      <small className="text-muted">Agents</small>
                      <div className="d-flex flex-wrap gap-2 mt-1">
                        {booth.agents.map((a, i) => (
                          <span
                            key={i}
                            className="badge bg-light text-dark border"
                          >
                            👤 {a.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted">Submissions</small>
                      <ul className="list-unstyled mb-0">
                        <li>🧾 Voter: <strong>{booth.submissions.voter || 0}</strong></li>
                        <li>📌 Turnout: <strong>{booth.submissions.turnout || 0}</strong></li>
                        <li>📊 Survey: <strong>{booth.submissions.survey || 0}</strong></li>
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="d-flex justify-content-between text-muted small mb-1">
                        <span>Target: <strong>{booth.target}</strong></span>
                        <span>Total: <strong>{total}</strong></span>
                      </div>
                      <div className="progress" style={{ height: "8px" }}>
                        <div
                          className={`progress-bar ${progressColor}`}
                          style={{ width: `${pct}%` }}
                          role="progressbar"
                        ></div>
                      </div>
                      <div className="text-end mt-1">
                        <small className={`fw-bold ${progressColor.replace('bg-', 'text-')}`}>
                          {pct}% Completed
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ClusterSummary;
