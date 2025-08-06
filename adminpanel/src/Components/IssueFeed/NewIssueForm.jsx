import React, { useState } from "react";
import { submitNewIssue } from "../../api/clusterApi"; // Create this function in your API file

const NewIssueForm = () => {
  const [formData, setFormData] = useState({
    issue_type: "",
    booth_name: "",
    agent: "",
    description: "",
    media_file: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, media_file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (val) payload.append(key, val);
    });

    try {
      await submitNewIssue(payload);
      setSuccess(true);
      setFormData({
        issue_type: "",
        booth_name: "",
        agent: "",
        description: "",
        media_file: null,
      });
    } catch (err) {
      alert("Failed to submit issue. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm p-4 my-4">
      <h4 className="mb-3">📋 Report New Issue</h4>
      {success && <div className="alert alert-success">Issue submitted successfully!</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Issue Type</label>
          <select
            name="issue_type"
            value={formData.issue_type}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select issue type</option>
            <option value="Voter mismatch">Voter mismatch</option>
            <option value="Missing names">Missing names</option>
            <option value="Duplicate entry">Duplicate entry</option>
            <option value="Invalid address">Invalid address</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Booth Name / Number</label>
          <input
            type="text"
            name="booth_name"
            className="form-control"
            value={formData.booth_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Agent Name</label>
          <input
            type="text"
            name="agent"
            className="form-control"
            value={formData.agent}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Attach Media (optional)</label>
          <input
            type="file"
            name="media_file"
            className="form-control"
            accept="image/*,audio/*"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Issue"}
        </button>
      </form>
    </div>
  );
};

export default NewIssueForm;
