export default {
  message: ({ attribute, value, args: [min] }) => {
    if (typeof value === 'string') {
      return `The ${attribute} must be greater than or equal ${min} characters.`;
    }
    if (Array.isArray(value)) {
      return `The ${attribute} must have ${min} items or more.`;
    }
    if (!isNaN(value)) {
      return `The ${attribute} must be greater than or equal ${min}.`;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return `The ${attribute} must be greater than or equal ${min} kilobytes.`;
    }
  },
  check: ({ value, args: [min] }) => {
    if (Array.isArray(value) || typeof value === 'string') {
      return value.length >= min;
    }
    if (!isNaN(value)) {
      return value >= min;
    }
    if (
      typeof value === 'File' ||
      (value.constructor && value.constructor.name === 'Blob')
    ) {
      return value.size >= min;
    }
  },
};
