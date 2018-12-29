export default {
  message: ({ attribute, args: [date] }) =>
    `The ${attribute} must be a date after ${date}.`,
  check: ({ value, args: [date] }) => {
    return new Date(value) > new Date(date);
  },
};
