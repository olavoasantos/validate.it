export default {
  message: ({ attribute, args: [date] }) =>
    `The ${attribute} does not match ${date}.`,
  check: ({ value, args: [date] }) => {
    return new Date(value).getTime() === new Date(date).getTime();
  },
};
