export default {
  message: (attribute, { values }) =>
    `The ${attribute} field is required when none of ${values} are present.`
  // check: (value, { }) => {}
};
