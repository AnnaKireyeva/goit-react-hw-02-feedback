import React, { Component } from 'react';

import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

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
    let total = this.countTotalFeedback();
    let positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onGood={this.handleOnGood}
            onNeutral={this.handleOnNeutral}
            onBad={this.handleOnBad}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
