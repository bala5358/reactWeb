// import React, { useEffect, useState } from "react";
// import { fetchAgentPerformance } from "../../api/clusterApi";

// const AgentPerformance = () => {
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetchAgentPerformance(); // mock/fake API
//       setAgents(res);
//     };
//     getData();
//   }, []);

//   const getColor = (pct) => {
//     if (pct >= 90) return "success";
//     if (pct >= 60) return "warning";
//     return "danger";
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="mb-4">🧑‍💼 Agent Performance Tracker</h2>

//       {agents.length === 0 ? (
//         <p>Loading agents...</p>
//       ) : (
//         agents.map((agent) => (
//           <div className="card mb-4 shadow-sm" key={agent.agent_id}>
//             <div className="card-body">
//               <h5 className="card-title">{agent.name}</h5>
//               <p className="mb-2">
//                 📍 <strong>Booth:</strong> {agent.booth_name}
//               </p>

//               <div className="mb-2">
//                 📝 <strong>Submissions Today:</strong> {agent.submissions_today}
//               </div>

//               <div className="mb-2">
//                 🎯 <strong>Target:</strong> {agent.daily_target}
//               </div>

//               <div className="progress mb-2">
//                 <div
//                   className={`progress-bar bg-${getColor(agent.completion_pct)}`}
//                   style={{ width: `${agent.completion_pct}%` }}
//                 >
//                   {agent.completion_pct}%
//                 </div>
//               </div>

//               {agent.alert && (
//                 <div className="alert alert-danger p-2 mt-2">
//                   ⚠️ {agent.alert}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AgentPerformance;



import React, { useEffect, useState } from "react";
import { fetchAgentPerformance } from "../../api/clusterApi";

const AgentPerformance = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchAgentPerformance(); // mock/fake API
      setAgents(res);
    };
    getData();
  }, []);

  const getColor = (pct) => {
    if (pct >= 90) return "#28a745";     // Green
    if (pct >= 60) return "#ffc107";     // Yellow
    return "#dc3545";                    // Red
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4"><i className="icofont icofont-user-alt-3"></i> Agent Performance Tracker</h2>

      {agents.length === 0 ? (
        <p>Loading agents...</p>
      ) : (
        <div className="row g-4">
          {agents.map((agent) => (
            <div className="col-md-6 col-lg-4" key={agent.agent_id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f0f0f0",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className="icofont icofont-boy"></i>
                    </div>
                    <div>
                      <h5 className="mb-0">{agent.name}</h5>
                      <small className="text-muted">Booth: {agent.booth_name}</small>
                    </div>
                  </div>

                  <div className="mb-2">
                    <i className="icofont icofont-tasks"></i> <strong>Submissions Today:</strong> {agent.submissions_today}
                  </div>
                  <div className="mb-2">
                    🎯 <strong>Target:</strong> {agent.daily_target}
                  </div>

                  <div className="mt-auto">
                    <div className="text-center mb-2">
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          border: `6px solid ${getColor(agent.completion_pct)}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          margin: "0 auto",
                        }}
                      >
                        {agent.completion_pct}%
                      </div>
                      <small className="text-muted">Completion</small>
                    </div>

                    {agent.alert && (
                      <div className="alert alert-danger p-2 mt-3 text-center">
                        ⚠️ {agent.alert}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AgentPerformance;
