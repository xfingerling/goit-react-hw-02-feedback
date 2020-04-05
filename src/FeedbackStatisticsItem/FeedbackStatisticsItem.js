import React from "react";
import PropTypes from "prop-types";

const FeedbackStatisticsItem = ({ name, statistics, token }) => (
  <p>
    {name}: {statistics}
    {token}
  </p>
);

FeedbackStatisticsItem.defaultProps = {
  name: "default name",
  statistics: 0,
  token: "",
};

FeedbackStatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistics: PropTypes.number.isRequired,
  token: PropTypes.string,
};

export default FeedbackStatisticsItem;
