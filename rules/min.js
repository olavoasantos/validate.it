export default {
  message: (attribute, { min, type }) =>
    ({
      numeric: `The ${attribute} must be at least ${min}.`,
      file: `The ${attribute} must be at least ${min} kilobytes.`,
      string: `The ${attribute} must be at least ${min} characters.`,
      array: `The ${attribute} must have at least ${min} items.`
    }[type])
  // check: (value, { }) => {}
};
