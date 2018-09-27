export default {
  message: (attribute, { min, max }) => `The ${attribute} must be between ${min} and ${max} digits.`,
  check: (value, { min, max }) => {
    return (
      !isNaN(value) &&
      value.toString().length > min &&
      value.toString().length < max
    );
  }
};
