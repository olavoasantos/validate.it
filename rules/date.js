export default {
  message: attribute => `The ${attribute} is not a valid date.`,
  check: value => {
    return !isNaN(Date.parse(value));
  }
};
