export default {
  message: (attribute, { values }) =>
    `The ${attribute} must be a file of type: ${values}.`
  // check: (value, { }) => {}
};
