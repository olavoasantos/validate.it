export default {
  message: attribute =>
    `The ${attribute} may only contain letters and numbers.`,
  check: ({ value }) => {
    return /^([a-zA-Z0-9\s])+$/.test(value);
  }
};
