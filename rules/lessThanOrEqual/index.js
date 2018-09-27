export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be less than or equal ${value}.`,
      file: `The ${attribute} must be less than or equal ${value} kilobytes.`,
      string: `The ${attribute} must be less than or equal ${value} characters.`,
      array: `The ${attribute} must not have more than ${value} items.`
    }[type])
  // check: (value, { }) => {}
};
