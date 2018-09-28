export default {
  message: (attribute, { other, values }) =>
    `The ${attribute} fieldis required unless ${other} is in ${values}.`
  // check: (value, { }) => {}
};
