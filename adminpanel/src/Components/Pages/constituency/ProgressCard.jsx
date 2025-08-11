import React from "react";
import { Card, CardBody, CardTitle, Progress } from "reactstrap";

/**
 * ProgressCard
 * Props:
 *  - label: string ("Male")
 *  - count: number (e.g. 120)
 *  - percentage: number (0-100)
 *  - color: string (reactstrap progress color or css color)
 *  - smallText: string (optional subtitle)
 */
const ProgressCard = ({ label, count, percentage, color = "primary", smallText }) => {
  return (
    <Card className="mb-3">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <CardTitle tag="h6" className="mb-0">
            {label}
          </CardTitle>
          <div className="text-end">
            {/* <div className="fw-bold">{count}</div> */}
            {smallText && <small className="text-muted">{smallText}</small>}
          </div>
        </div>

        <Progress value={percentage} style={{ height: "10px" }} color={color} />
        <div className="d-flex justify-content-end mt-1">
          <small className="text-muted">{percentage}%</small>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProgressCard;
