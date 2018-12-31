export default {
  message: ({ attribute, args: [min] }) => {
    if (typeof value === 'string') {
      return `The ${attribute} must be greater than ${min} characters.`;
    }
    if (Array.isArray(value)) {
      return `The ${attribute} must have more than ${min} items.`;
    }
    if (!isNaN(value)) {
      return `The ${attribute} must be greater than ${min}.`;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return `The ${attribute} must be greater than ${min} kilobytes.`;
    }
  },
  check: ({ value, args: [min] }) => {
    if (Array.isArray(value) || typeof value === 'string') {
      return value.length > min;
    }
    if (!isNaN(value)) {
      return value > min;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return value.size > min;
    }
  },
};
