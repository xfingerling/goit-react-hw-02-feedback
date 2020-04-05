import React from "react";
import PropTypes from "prop-types";

const FeedbackNotification = ({ message }) => <p>{message}</p>;

FeedbackNotification.propTypes = {
  message: PropTypes.string,
};

export default FeedbackNotification;
