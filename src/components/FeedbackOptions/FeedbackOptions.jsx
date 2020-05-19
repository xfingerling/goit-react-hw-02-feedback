import React from "react";
import PropTypes from "prop-types";

// import FeedbackButton from "../FeedbackButton/FeedbackButton";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button name="good" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
