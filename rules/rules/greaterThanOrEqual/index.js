export default {
  message: ({ attribute, value, args: [field] }) => {
    if (typeof value === 'string') {
      return `The ${attribute} must be greater than or equal ${value} characters.`;
    }
    if (Array.isArray(value)) {
      return `The ${attribute} must have ${value} items or more.`;
    }
    if (!isNaN(value)) {
      return `The ${attribute} must be greater than or equal ${value}.`;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return `The ${attribute} must be greater than or equal ${value} kilobytes.`;
    }
  },
  check: ({ value, data, args: [field] }) => {
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
  },
};
