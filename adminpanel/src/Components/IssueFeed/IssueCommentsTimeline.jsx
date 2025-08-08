import React, { useEffect, useState } from 'react';
import { Card, CardBody, Input, Button, Media } from 'reactstrap';
import { H5 } from '../../AbstractElements';

// 🔧 Mock API
const fetchIssueWithComments = async (issueId) => {
  return {
    id: issueId,
    booth: 'Booth 9 - Central Ward',
    issue: 'Tablet not syncing',
    comments: [
      { by: 'Agent Rahul', time: '2025-08-08 09:30', content: 'Issue reported from field' },
      { by: 'Supervisor Meena', time: '2025-08-08 10:00', content: 'Investigating connectivity' },
    ]
  };
};

const postComment = async (issueId, comment) => {
  console.log(`Posted comment to issue ${issueId}:`, comment);
  return true;
};

const IssueCommentsTimeline = ({ issueId }) => {
  const [issue, setIssue] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await fetchIssueWithComments(issueId);
      setIssue(data);
    };
    load();
  }, [issueId]);

  const handlePost = async () => {
    if (!newComment.trim()) return;
    setPosting(true);

    const commentObj = {
      by: 'You',
      content: newComment,
      time: new Date().toLocaleString()
    };

    await postComment(issueId, commentObj);
    setIssue((prev) => ({
      ...prev,
      comments: [...prev.comments, commentObj]
    }));
    setNewComment('');
    setPosting(false);
  };

  return (
    <Card className="shadow-sm">
      <CardBody>
        <H5 className="mb-3">🗂️ Comments Timeline</H5>

        {issue?.comments?.length === 0 && <p className="text-muted">No comments yet.</p>}

        <div className="timeline p-2 mb-4">
          {issue?.comments.map((c, idx) => (
            <div key={idx} className="d-flex mb-4">
              <div className="me-3">
                <i className="fa fa-comment bg-light p-2 rounded-circle text-primary"></i>
              </div>
              <div>
                <strong>{c.by}</strong> <small className="text-muted ms-2">{c.time}</small>
                <p className="mb-1 ms-2">{c.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Form */}
        <div className="d-flex gap-2">
          <Input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={posting}
          />
          <Button color="primary" onClick={handlePost} disabled={posting}>
            {posting ? 'Posting...' : 'Post'}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default IssueCommentsTimeline;
