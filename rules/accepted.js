export default {
  message: (attribute) => `The ${attribute} must be accepted.`,
  check: (value) => {
    return value === true || value === 1 || value === 'on' || value === 'yes';
  }
};
