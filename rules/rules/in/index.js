export default {
  message: ({ attribute }) => `The selected ${attribute} is invalid.`,
  check: ({ value, args: [...oneOf] }) => {
    return oneOf.indexOf(value) > -1;
  },
};
