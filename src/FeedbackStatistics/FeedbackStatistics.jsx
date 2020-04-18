import React from "react";
import PropTypes from "prop-types";

import FeedbackStatisticsItem from "../FeedbackStatisticsItem/FeedbackStatisticsItem";

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <FeedbackStatisticsItem name={"Good"} statistics={good} />
    <FeedbackStatisticsItem name={"Neutral"} statistics={neutral} />
    <FeedbackStatisticsItem name={"Bad"} statistics={bad} />
    <FeedbackStatisticsItem name={"Total"} statistics={total} />
    <FeedbackStatisticsItem
      name={"Positive feedback"}
      statistics={positivePercentage}
      token={"%"}
    />
  </>
);

FeedbackStatistics.defaultProps = {};

FeedbackStatistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default FeedbackStatistics;
