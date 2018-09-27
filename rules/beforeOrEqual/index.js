export default {
  message: (attribute, { date }) =>
    `The ${attribute} must be a date before or equal to ${date}.`,
  check: ({ value }, date) => {
    return new Date(value) <= new Date(date);
  }
};
