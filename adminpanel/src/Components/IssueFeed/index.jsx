// import React, { useEffect, useState } from "react";
// import { fetchIssueFeed, resolveIssue, escalateIssue } from "../../api/clusterApi";

// const IssueFeed = () => {
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     const loadIssues = async () => {
//       const data = await fetchIssueFeed();
//       setIssues(data);
//     };
//     loadIssues();
//   }, []);

//   const handleResolve = async (id) => {
//     await resolveIssue(id);
//     setIssues((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, status: "resolved" } : i))
//     );
//   };

//   const handleEscalate = async (id) => {
//     await escalateIssue(id);
//     setIssues((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, status: "escalated" } : i))
//     );
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="mb-4">🚨 Issue Feed</h2>

//       {issues.length === 0 ? (
//         <p>No reported issues.</p>
//       ) : (
//         issues.map((issue) => (
//           <div className="card mb-4 shadow-sm" key={issue.id}>
//             <div className="card-body">
//               <h5 className="card-title">{issue.issue_type}</h5>
//               <p className="text-muted mb-1">📍 Booth: {issue.booth_name}</p>
//               <p className="text-muted">👤 Agent: {issue.agent}</p>
//               <p>📝 <strong>Description:</strong> {issue.description}</p>

//               {issue.media_url && (
//                 <div className="mb-3">
//                   {issue.media_type === "image" ? (
//                     <img
//                       src={issue.media_url}
//                       alt="Issue"
//                       className="img-fluid rounded"
//                       style={{ maxWidth: "100%", maxHeight: "200px" }}
//                     />
//                   ) : (
//                     <audio controls src={issue.media_url} />
//                   )}
//                 </div>
//               )}

//               <p className="badge bg-secondary me-2">Status: {issue.status}</p>
//               <div className="mt-3 d-flex gap-2 flex-wrap">
//                 {issue.status === "open" && (
//                   <>
//                     <button className="btn btn-sm btn-success" onClick={() => handleResolve(issue.id)}>
//                       ✅ Mark as Resolved
//                     </button>
//                     <button className="btn btn-sm btn-danger" onClick={() => handleEscalate(issue.id)}>
//                       ⬆️ Escalate
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default IssueFeed;


import React, { useEffect, useState } from "react";
import { fetchIssueFeed, resolveIssue, escalateIssue } from "../../api/clusterApi";

const IssueFeed = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const loadIssues = async () => {
      const data = await fetchIssueFeed();
      setIssues(data);
    };
    loadIssues();
  }, []);

  const handleResolve = async (id) => {
    await resolveIssue(id);
    setIssues((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: "resolved" } : i))
    );
  };

  const handleEscalate = async (id) => {
    await escalateIssue(id);
    setIssues((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: "escalated" } : i))
    );
  };

  return (
    <div className="container my-4">
      <h2 className="mt-4 mb-4">🚨 Issue Feed</h2>

      {issues.length === 0 ? (
        <p>No reported issues.</p>
      ) : (
        issues.map((issue) => (
          <div className="card shadow-sm mb-5 p-4" key={issue.id}>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-8 border-end pe-4">
                <h4 className="mb-2">{issue.issue_type}</h4>
                <p className="text-muted mb-2">
                  Reported by <strong>{issue.agent} (Agent)</strong> at booth <strong>{issue.booth_name}</strong>
                </p>
                <p className="mb-4">{issue.description}</p>

                <h6>Activity</h6>
                {/* <div className="d-flex align-items-start mb-3">
                  <img
                    src="/avatar1.jpg" // Replace with actual agent avatar path
                    alt="Agent"
                    className="rounded-circle me-2"
                    width="36"
                    height="36"
                  />
                  <div>
                    <strong>{issue.agent}</strong> commented at {issue.created_at}
                    <div className="bg-light border rounded p-2 mt-1">
                      Flagged during door-to-door verification.
                    </div>
                  </div>
                </div> */}

<div className="d-flex align-items-start mb-3">
  <div
    className="rounded-circle d-flex align-items-center justify-content-center me-2"
    style={{ width: "36px", height: "36px", fontSize: "1.2rem" }}
  >
    <i className="icofont icofont-boy"></i>
  </div>
  <div>
    <strong>{issue.agent}</strong> commented at {issue.created_at}
    <div className="border rounded p-2 mt-1">
      Flagged during door-to-door verification.
    </div>
  </div>
</div>

<div className="d-flex align-items-start mt-3">
  <div
    className="rounded-circle d-flex align-items-center justify-content-center me-2"
    style={{ width: "36px", height: "36px", fontSize: "1.2rem" }}
  >
    <i className="icofont icofont-boy"></i>
  </div>
  <textarea
    rows="2"
    placeholder="Add a comment..."
    className="form-control me-2"
    style={{ resize: "none" }}
  ></textarea>
  <button className="btn btn-primary ms-2">Comment</button>
</div>


                {/* <div className="d-flex align-items-start mt-3">
                  <img
                    src="/avatar2.jpg" // Replace with current user/avatar path
                    alt="You"
                    className="rounded-circle me-2"
                    width="36"
                    height="36"
                  />
                  <textarea
                    rows="2"
                    placeholder="Add a comment..."
                    className="form-control me-2"
                    style={{ resize: "none" }}
                  ></textarea>
                  <button className="btn btn-primary ms-2">Comment</button>
                </div> */}
              </div>

              {/* Right Column */}
              <div className="col-md-4 ps-4">
                <h5 className="mb-3">Issue Details</h5>
                <p><strong>📌 Type:</strong> {issue.issue_type}</p>
                <p><strong>⏳ Status:</strong> {issue.status}</p>
                <p><strong>📅 Date:</strong> {issue.date}</p>

                {issue.status === "open" && (
                  <>
                    <button
                      className="btn btn-block btn-primary w-100 mb-2"
                      onClick={() => handleResolve(issue.id)}
                    >
                      Mark as Resolved
                    </button>
                    <button
                      className="btn btn-block btn-outline-primary w-100"
                      onClick={() => handleEscalate(issue.id)}
                    >
                      Escalate Issue
                    </button>
                  </>
                )}

                {issue.media_url && (
                  <div className="mt-4">
                    {issue.media_type === "image" ? (
                      <img
                        src={issue.media_url}
                        alt="Issue"
                        className="img-fluid rounded border"
                      />
                    ) : (
                      <audio controls src={issue.media_url} className="w-100" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default IssueFeed;
