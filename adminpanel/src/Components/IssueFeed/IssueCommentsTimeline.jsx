// IssueCommentsTimeline.jsx
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, Input, Button } from 'reactstrap';

const fetchComments = async () => {
  return [
    {
      issueId: 1,
      booth: 'Booth 7',
      comments: [
        { text: 'Need technician visit', time: '2025-08-06 10:15' },
        { text: 'Escalated to district', time: '2025-08-06 12:00' }
      ]
    }
  ];
};

const IssueCommentsTimeline = () => {
  const [data, setData] = useState([]);
  const [newComments, setNewComments] = useState({});

  useEffect(() => {
    const load = async () => {
      const res = await fetchComments();
      setData(res);
    };
    load();
  }, []);

  const handleAddComment = (id) => {
    const text = newComments[id]?.trim();
    if (!text) return;
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");
    setData((prev) =>
      prev.map((item) =>
        item.issueId === id
          ? { ...item, comments: [...item.comments, { text, time: now }] }
          : item
      )
    );
    setNewComments((prev) => ({ ...prev, [id]: '' }));
  };

  return (
    <Card>
      <CardHeader><h5>💬 Issue Comments (Timeline)</h5></CardHeader>
      <CardBody>
        {data.map((issue) => (
          <div key={issue.issueId} className="mb-4 border-start ps-3">
            <h6 className="mb-2">📌 {issue.booth}</h6>
            <ul className="timeline list-unstyled">
              {issue.comments.map((c, i) => (
                <li key={i} className="mb-2">
                  <small className="text-muted">{c.time}</small>
                  <div>{c.text}</div>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-2 mt-2">
              <Input
                placeholder="Add comment..."
                value={newComments[issue.issueId] || ''}
                onChange={(e) =>
                  setNewComments((prev) => ({
                    ...prev,
                    [issue.issueId]: e.target.value
                  }))
                }
              />
              <Button size="sm" onClick={() => handleAddComment(issue.issueId)}>Add</Button>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default IssueCommentsTimeline;
