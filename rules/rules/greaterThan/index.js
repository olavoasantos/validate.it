export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be greater than ${value}.`,
      file: `The ${attribute} must be greater than ${value} kilobytes.`,
      string: `The ${attribute} must be greater than ${value} characters.`,
      array: `The ${attribute} must have more than ${value} items.`
    }[type]),
  check: ({ value, data }, field) => {
    if (Array.isArray(value) || typeof value === 'string') {
      return  value.length > data[field];
    }
    if (!isNaN(value)) {
      return  value > data[field];
    }
    if (typeof value === 'File' || (value.constructor && value.constructor.name === 'Blob')) {
      return value.size > data[field];
    }
  }
};
