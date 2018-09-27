export default {
  message: attribute => `The ${attribute} confirmation does not match.`,
  check: ({ value, attribute, data }) => {
    return data[`${attribute}_confirmation`] === value;
  }
};
