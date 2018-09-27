export default {
  message: (attribute, { date }) =>
    `The ${attribute} does not match ${date}.`,
  check: ({ value }, date) => {
    return new Date(value).getTime() === new Date(date).getTime();
  }
};
