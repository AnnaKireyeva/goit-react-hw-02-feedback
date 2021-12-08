import React from 'react';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  // <h3>Statistics</h3>
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positiveFeedback}%</li>
  </ul>
);
export default Statistics;
