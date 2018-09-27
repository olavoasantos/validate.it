export default {
  message: attribute => `The ${attribute} field must be true or false.`,
  check: ({ value }) => {
    return (
      value === 0 ||
      value === 1 ||
      value === '0' ||
      value === '1' ||
      typeof value === 'boolean'
    );
  }
};
