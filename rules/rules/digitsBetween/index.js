export default {
  message: ({ attribute, args: [min, max] }) =>
    `The ${attribute} must be between ${min} and ${max} digits.`,
  check: ({ value, args: [min, max] }) => {
    return (
      !isNaN(value) &&
      value.toString().length > min &&
      value.toString().length < max
    );
  },
};
