export default {
  message: ({ attribute, args: [other] }) =>
    `The ${attribute} and ${other} must be different.`,
  check: ({ value, data, args: [other] }) => {
    return JSON.stringify(value) !== JSON.stringify(data[other]);
  },
};
