export default {
  message: (attribute, { date }) =>
    `The ${attribute} must be a date before ${date}.`,
  check: (value, { date }) => {
    return new Date(value) < new Date(date);
  }
};
