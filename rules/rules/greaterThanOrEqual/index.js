export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be greater than or equal ${value}.`,
      file: `The ${attribute} must be greater than or equal ${value} kilobytes.`,
      string: `The ${attribute} must be greater than or equal ${value} characters.`,
      array: `The ${attribute} must have ${value} items or more.`
    }[type]),
  check: ({ value, data }, field) => {
    if (Array.isArray(value) || typeof value === 'string') {
      return value.length >= data[field];
    }
    if (!isNaN(value)) {
      return value >= data[field];
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return value.size >= data[field];
    }
  }
};
