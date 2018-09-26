export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be greater than ${value}.`,
      file: `The ${attribute} must be greater than ${value} kilobytes.`,
      string: `The ${attribute} must be greater than ${value} characters.`,
      array: `The ${attribute} must have more than ${value} items.`
    }[type])
  // check: (value, { }) => {}
};
