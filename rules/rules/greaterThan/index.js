export default {
  message: (attribute, { value }) => {
    if (typeof value === 'string') {
      return `The ${attribute} must be greater than ${value} characters.`;
    }
    if (Array.isArray(value)) {
      return `The ${attribute} must have more than ${value} items.`;
    }
    if (!isNaN(value)) {
      return `The ${attribute} must be greater than ${value}.`;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return `The ${attribute} must be greater than ${value} kilobytes.`;
    }
  },
  check: ({ value, data }, field) => {
    if (Array.isArray(value) || typeof value === 'string') {
      return value.length > data[field];
    }
    if (!isNaN(value)) {
      return value > data[field];
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return value.size > data[field];
    }
  }
};
