export default {
  message: (attribute, { max, type }) =>
    ({
      numeric: `The ${attribute} may not be greater than ${max}.`,
      file: `The ${attribute} may not be greater than ${max} kilobytes.`,
      string: `The ${attribute} may not be greater than ${max} characters.`,
      array: `The ${attribute} may not have more than ${max} items.`
    }[type])
  // check: (value, { }) => {}
};
