import React, { useEffect, useState } from "react";
import { fetchClusterSummary } from "../../api/clusterApi";

const ClusterSummary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadSummary = async () => {
      const res = await fetchClusterSummary();
      setData(res);
    };
    loadSummary();
  }, []);

  const getTotalSubmissions = (sub) =>
    (sub.voter || 0) + (sub.turnout || 0) + (sub.survey || 0);

  const getCompletionPct = (sub, target) => {
    const total = getTotalSubmissions(sub);
    return target > 0 ? Math.round((total / target) * 100) : 0;
  };

  const getBadge = (pct) => {
    if (pct >= 90)
      return <span className="badge bg-success">✅ {pct}% Completed</span>;
    if (pct >= 60)
      return <span className="badge bg-warning text-dark">⚠️ {pct}% In Progress</span>;
    return <span className="badge bg-danger">⛔ {pct}% Low</span>;
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">📊 Cluster Summary View</h2>

      {data.length === 0 ? (
        <p>Loading cluster data...</p>
      ) : (
        <div className="row g-4">
          {data.map((booth, idx) => {
            const total = getTotalSubmissions(booth.submissions);
            const pct = getCompletionPct(booth.submissions, booth.target);

            return (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-2">{booth.booth_name}</h5>

                    <div className="mb-2">
                      <strong>👥 Agents:</strong>
                      <ul className="ps-3 mb-0 small text-muted">
                        {booth.agents.map((a, i) => (
                          <li key={i}>{a.name}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="my-2">
                      <strong>📋 Submissions:</strong>
                      <ul className="ps-3 mb-0">
                        <li>🧾 Voter Entries: {booth.submissions.voter || 0}</li>
                        <li>📌 Turnout Reports: {booth.submissions.turnout || 0}</li>
                        <li>📊 Survey Responses: {booth.submissions.survey || 0}</li>
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                          🎯 <strong>Target:</strong> {booth.target}
                          <br />
                          📦 <strong>Total:</strong> {total}
                        </div>
                        <div>{getBadge(pct)}</div>
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
