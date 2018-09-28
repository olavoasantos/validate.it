export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be less than ${value}.`,
      file: `The ${attribute} must be less than ${value} kilobytes.`,
      string: `The ${attribute} must be less than ${value} characters.`,
      array: `The ${attribute} must have less than ${value} items.`
    }[type])
  // check: (value, { }) => {}
};
