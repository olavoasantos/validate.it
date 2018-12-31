export default {
  message: attribute => `The ${attribute} must be an integer.`,
  check: ({ value }) => Number.isInteger(value),
};
