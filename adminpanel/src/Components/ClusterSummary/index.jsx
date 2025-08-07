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
