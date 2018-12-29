export default {
  message: ({ attribute }) => `The ${attribute} field has a duplicate value.`,
  check: ({ value, args }) => {
    const [key] = args ? args : [];
    return value.reduce((isDistinct, item) => {
      if (!isDistinct) return isDistinct;

      return !key
        ? value.filter(data => data === item).length < 2
        : value.filter(data => data[key] === item[key]).length < 2;
    }, true);
  },
};
