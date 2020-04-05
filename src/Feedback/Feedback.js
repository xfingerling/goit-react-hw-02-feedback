import React, { Component } from "react";

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

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const percent = Math.floor(
      (100 * this.state.good) / this.countTotalFeedback(),
    );

    return percent ? percent : 0;
  }

  render() {
    return (
      <div>
        <FeedbackSection title={"Please leave feedback"}>
          <FeedbackOptions
            options={[
              { name: "good", text: "Good" },
              { name: "neutral", text: "Neutral" },
              { name: "bad", text: "Bad" },
            ]}
            onLeaveFeedback={this.handleClick}
          />
        </FeedbackSection>

        <FeedbackSection title={"Statistics"}>
          {!this.countTotalFeedback() ? (
            <FeedbackNotification message={"No feedback given"} />
          ) : (
            <FeedbackStatistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </FeedbackSection>
      </div>
    );
  }
}
