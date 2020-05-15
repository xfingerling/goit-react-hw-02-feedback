import React from "react";
import PropTypes from "prop-types";

import FeedbackButton from "../FeedbackButton/FeedbackButton";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(({ name, text }) => {
    return (
      <FeedbackButton
        key={name}
        name={name}
        text={text}
        handleClick={onLeaveFeedback}
      />
    );
  });

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
