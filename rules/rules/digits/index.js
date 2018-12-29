export default {
  message: ({ attribute, args: [digits] }) =>
    `The ${attribute} must be ${digits} digits.`,
  check: ({ value, args: [digits] }) => {
    return !isNaN(value) && value.toString().length === digits;
  },
};
