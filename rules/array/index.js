export default {
  message: attribute => `The ${attribute} must be an array.`,
  check: ({ value }) => {
    return Array.isArray(value);
  }
};
