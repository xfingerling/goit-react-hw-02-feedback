import React from "react";
import PropTypes from "prop-types";

import FeedbackButton from "../FeedbackButton/FeedbackButton";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((el) => {
      return (
        <FeedbackButton
          key={el.name}
          name={el.name}
          text={el.text}
          handleClick={onLeaveFeedback}
        />
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
