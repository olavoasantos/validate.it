export default {
  message: attribute => `The ${attribute} may only contain letters.`,
  check: ({ value }) => {
    return /^([a-zA-Z])+$/.test(value);
  }
};
