export default {
  message: (attribute, { size, type }) =>
    ({
      numeric: `The ${attribute} must be ${size}.`,
      file: `The ${attribute} must be ${size} kilobytes.`,
      string: `The ${attribute} must be ${size} characters.`,
      array: `The ${attribute} must contain ${size} items.`
    }[type])
  // check: (value, { }) => {}
};
