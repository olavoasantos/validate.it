export default {
  message: ({ attribute }) => `The ${attribute} may only contain letters.`,
  check: ({ value, args = [] }) => {
    let pattern = 'a-zA-Z';
    if (args.indexOf('num') > -1) pattern += '0-9';
    if (args.indexOf('space') > -1) pattern += '\\s';
    if (args.indexOf('dash') > -1) pattern += '\\-\\_';

    return new RegExp(`^[${pattern}]+$`).test(value);
  },
};
