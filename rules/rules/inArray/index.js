export default {
  message: ({ attribute, args: [other] }) =>
    `The ${attribute} field does not exist in ${other}.`,
  check: ({ value, data, args: [key] }) => {
    return Array.isArray(data[key]) && data[key].indexOf(value) > -1;
  },
};
