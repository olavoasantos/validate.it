export default {
  message: attribute => `The ${attribute} field must have a value.`,
  check: value => {
    return value !== undefined;
  }
};
