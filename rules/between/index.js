export default {
  message: (attribute, { min, max, type }) =>
    ({
      numeric: `The ${attribute} must be between ${min} and ${max}.`,
      file: `The ${attribute} must be between ${min} and ${max} kilobytes.`,
      string: `The ${attribute} must be between ${min} and ${max} characters.`,
      array: `The ${attribute} must have between ${min} and ${max} items.`
    }[type]),
  check: ({ value }, type, min, max) => {
    return {
      numeric: () => value > min && value < max,
      file: () => value.size > min && value.size < max,
      string: () => value.length > min && value.length < max,
      array: () => value.length > min && value.length < max
    }[type]();
  }
};
