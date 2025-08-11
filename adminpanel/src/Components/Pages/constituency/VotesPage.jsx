import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import ProgressCard from "./ProgressCard";

/**
 * Example VotesPage showing three progress-bar cards (Male, Female, Other)
 *
 * This example computes percentages from counts. If total is 0,
 * percentages are zero to avoid division-by-zero.
 */

const VotesPage = () => {
  // replace these with real data from props/api
  const votes = {
    male: 340,
    female: 420,
    other: 40,
  };

  // compute totals and percentages (explicit arithmetic)
  const total = votes.male + votes.female + votes.other;

  // safe percentages: if total === 0 then 0
  const malePercent = total === 0 ? 0 : Math.round((votes.male / total) * 100);
  const femalePercent = total === 0 ? 0 : Math.round((votes.female / total) * 100);
  const otherPercent = total === 0 ? 0 : Math.round((votes.other / total) * 100);

  // Fix rounding so the percentages sum to 100 when possible:
  // (adjust the largest group by the rounding difference)
  const sumPerc = malePercent + femalePercent + otherPercent;
  const diff = 100 - sumPerc;
  if (diff !== 0 && total !== 0) {
    // find largest count and add the diff
    const maxKey = Object.keys(votes).reduce((a, b) => (votes[a] >= votes[b] ? a : b));
    if (maxKey === "male") {
      // mutate local percent variables accordingly
      // NOTE: these are constants, so we'll map to a new object for rendering below
    }
  }

  // We'll build an array for rendering and apply rounding fix there
  let cards = [
    { key: "male", label: "Male", count: votes.male, percent: malePercent, color: "info" },
    { key: "female", label: "Female", count: votes.female, percent: femalePercent, color: "danger" },
    { key: "other", label: "Other", count: votes.other, percent: otherPercent, color: "secondary" },
  ];

  // Apply rounding difference to largest group to ensure total 100 (if total>0)
  if (total !== 0) {
    const currentSum = cards.reduce((s, c) => s + c.percent, 0);
    const roundingDiff = 100 - currentSum;
    if (roundingDiff !== 0) {
      // find index of largest count
      let largestIndex = 0;
      for (let i = 1; i < cards.length; i++) {
        if (cards[i].count > cards[largestIndex].count) largestIndex = i;
      }
      cards[largestIndex].percent += roundingDiff;
    }
  }

  return (
    <Container >
      <Card>
        <CardHeader>
          <h5 className="m-0">Vote Progress</h5>
        </CardHeader>
        <CardBody>
          <Row>
            {cards.map((c) => (
              <Col key={c.key} md="6">
                <ProgressCard
                  label={c.label}
                  count={c.count}
                  percentage={c.percent}
                  color={c.color}
                  smallText={`${c.count} votes`}
                />
              </Col>
            ))}
          </Row>

          <Row className="mt-3">
            <Col>
              <small className="text-muted">
                Total votes: <strong>{total}</strong>
              </small>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default VotesPage;
