import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <ul>
    <li>
      <button type="button" onClick={onGood}>
        Good
      </button>
    </li>
    <li>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
    </li>
    <li>
      <button type="button" onClick={onBad}>
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
