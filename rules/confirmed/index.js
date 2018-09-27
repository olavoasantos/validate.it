export default {
  message: attribute => `The ${attribute} confirmation does not match.`,
  check: ({ value, name, data }) => {
    return data[`${name}_confirmation`] === value;
  }
};
