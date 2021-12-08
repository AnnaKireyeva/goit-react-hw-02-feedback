import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul className={styles.statisticList}>
    <li className={styles.statisticItem}>Good: {good}</li>
    <li className={styles.statisticItem}>Neutral: {neutral}</li>
    <li className={styles.statisticItem}>Bad: {bad}</li>
    <li className={styles.statisticItem}>Total: {total}</li>
    <li className={styles.statisticItem}>
      Positive feedback: {positiveFeedback}%
    </li>
  </ul>
);

export default Statistics;
