import React from "react";
import PropTypes from "prop-types";

const FeedbackButton = ({ name, text, handleClick }) => (
  <button name={name} type="button" onClick={handleClick}>
    {text}
  </button>
);

FeedbackButton.defaultProps = { name: "default name" };

FeedbackButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default FeedbackButton;
