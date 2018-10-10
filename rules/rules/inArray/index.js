export default {
  message: (attribute, { other }) =>
    `The ${attribute} field does not exist in ${other}.`,
  check: ({ value, data }, key) => {
    return Array.isArray(data[key]) && data[key].indexOf(value) > -1;
  }
};
