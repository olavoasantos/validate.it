export default {
  message: attribute => `The ${attribute} field has a duplicate value.`,
  check: ({ value }, key) => {
    return value.reduce((isDistinct, item) => {
      if (!isDistinct) return isDistinct;

      if (!!key) {
        return value.filter(data => data[key] === item[key]).length < 2;
      }

      return value.filter(data => data === item).length < 2;
    }, true);
  }
};
