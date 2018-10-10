export default {
  message: attribute => `The selected ${attribute} is invalid.`,
  check: ({ value }, ...oneOf) => {
    return oneOf.indexOf(value) > -1;
  }
};
