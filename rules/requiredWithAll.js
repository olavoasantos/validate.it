export default {
  message: (attribute, { values }) =>
    `The ${attribute} field is required when ${values} is present.`
  // check: (value, { }) => {}
};
