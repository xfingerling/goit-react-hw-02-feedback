import React from "react";
import PropTypes from "prop-types";

const FeedbackStatisticsItem = ({
  name = "default name",
  statistics = 0,
  token = "",
}) => (
  <p>
    {name}: {statistics}
    {token}
  </p>
);

FeedbackStatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  statistics: PropTypes.number.isRequired,
  token: PropTypes.string,
};

export default FeedbackStatisticsItem;
