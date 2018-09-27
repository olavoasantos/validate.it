export default {
  message: (attribute, { digits }) =>
    `The ${attribute} must be ${digits} digits.`,
  check: ({ value }, digits) => {
    return !isNaN(value) && value.toString().length === digits;
  }
};
