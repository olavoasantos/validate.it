export default {
  message: attribute => `The ${attribute} confirmation does not match.`,
  check: ({ attribute, data }) => {
    return data[`${attribute}_confirmation`] === data[attribute];
  }
};
