import React from "react";
import PropTypes from "prop-types";

const FeedbackSection = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    <div>{children}</div>
  </>
);

FeedbackSection.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
};

export default FeedbackSection;
