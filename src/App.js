import React, { Component } from 'react';

import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleOnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleOnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercent = 0;
    if (this.state.good !== 0) {
      positiveFeedbackPercent = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100,
      );
    }
    return positiveFeedbackPercent;
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          {/* <h2>Please leave feedback</h2> */}
          <FeedbackOptions
            onGood={this.handleOnGood}
            onNeutral={this.handleOnNeutral}
            onBad={this.handleOnBad}
          />
        </Section>
        {/* <ul>
          <li>
            <button type="button" onClick={this.handleOnGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleOnNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleOnBad}>
              Bad
            </button>
          </li>
        </ul> */}
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        {/* <h3>Statistics</h3>
        <ul>
          <li>
            <span>Good: {this.state.good}</span>
          </li>
          <li>
            <span>Neutral: {this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: {this.state.bad}</span>
          </li>
          <li>
            <span>Total: {this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </span>
          </li>
        </ul> */}
      </div>
    );
  }
}
