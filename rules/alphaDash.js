export default {
  message: attribute =>
    `The ${attribute} may only contain letters, numbers, dashes and underscores.`,
  check: value => {
    return /^([a-zA-Z0-9\-\_\s])+$/.test(value);
  }
};
