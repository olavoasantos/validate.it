export default {
  message: (attribute, { other }) =>
    `The ${attribute} and ${other} must be different.`,
  check: (value, { other }) => {
    return JSON.stringify(value) !== JSON.stringify(other);
  }
};
