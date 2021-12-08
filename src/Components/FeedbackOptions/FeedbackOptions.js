import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <ul className={styles.feedbackBtnList}>
    <li className={styles.feedbackBtnItem}>
      <button className={styles.btn} type="button" onClick={onGood}>
        Good
      </button>
    </li>
    <li className={styles.feedbackBtnItem}>
      <button className={styles.btn} type="button" onClick={onNeutral}>
        Neutral
      </button>
    </li>
    <li className={styles.feedbackBtnItem}>
      <button className={styles.btn} type="button" onClick={onBad}>
        Bad
      </button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};

export default FeedbackOptions;
