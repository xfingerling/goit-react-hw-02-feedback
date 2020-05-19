const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

const countPositiveFeedbackPercentage = (good, totalFeedback) => {
  const percent = Math.floor((100 * good) / totalFeedback);

  return percent ? percent : 0;
};

export { countTotalFeedback, countPositiveFeedbackPercentage };
