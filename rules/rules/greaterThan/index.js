export default {
  message: ({ attribute, args: [field] }) => {
    if (typeof value === 'string') {
      return `The ${attribute} must be greater than ${field} characters.`;
    }
    if (Array.isArray(value)) {
      return `The ${attribute} must have more than ${field} items.`;
    }
    if (!isNaN(value)) {
      return `The ${attribute} must be greater than ${field}.`;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return `The ${attribute} must be greater than ${field} kilobytes.`;
    }
  },
  check: ({ value, data, args: [field] }) => {
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
  },
};
