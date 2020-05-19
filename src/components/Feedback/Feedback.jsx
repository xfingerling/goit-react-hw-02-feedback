import React, { Component } from "react";

import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from "../../helpers/helpers";

import FeedbackNotification from "../FeedbackNotification/FeedbackNotification";
import FeedbackSection from "../FeedbackSection/FeedbackSection";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import FeedbackStatistics from "../FeedbackStatistics/FeedbackStatistics";

export default class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClick = (e) => {
    const targetBtnName = e.target.name;

    this.setState((state) => ({ [targetBtnName]: state[targetBtnName] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = countTotalFeedback(good, neutral, bad);
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage(
      good,
      totalFeedback,
    );

    return (
      <div>
        <FeedbackSection title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.handleClick} />
        </FeedbackSection>

        <FeedbackSection title={"Statistics"}>
          {!totalFeedback ? (
            <FeedbackNotification message={"No feedback given"} />
          ) : (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </FeedbackSection>
      </div>
    );
  }
}
