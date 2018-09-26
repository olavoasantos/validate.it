export default {
  message: (attribute, { other, value }) =>
    `The ${attribute} field is required when ${other} is ${value}.`
  // check: (value, { }) => {}
};
