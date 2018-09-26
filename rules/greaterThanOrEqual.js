export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be greater than or equal ${value}.`,
      file: `The ${attribute} must be greater than or equal ${value} kilobytes.`,
      string: `The ${attribute} must be greater than or equal ${value} characters.`,
      array: `The ${attribute} must have ${value} items or more.`
    }[type])
  // check: (value, { }) => {}
};
