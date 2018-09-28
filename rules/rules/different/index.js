export default {
  message: (attribute, { other }) =>
    `The ${attribute} and ${other} must be different.`,
  check: ({ value, data }, other) => {
    return JSON.stringify(value) !== JSON.stringify(data[other]);
  }
};
