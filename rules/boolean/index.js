export default {
  message: attribute => `The ${attribute} field must be true or false.`,
  check: value => {
    return typeof value === 'boolean';
  }
};
