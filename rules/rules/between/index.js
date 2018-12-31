export default {
  message: (attribute, { min, max }) => {
    if (typeof value === 'number')
      return `The ${attribute} must be between ${min} and ${max}.`;
    if (Array.isArray(value))
      return `The ${attribute} must have between ${min} and ${max} items.`;
    if (typeof value === 'string')
      return `The ${attribute} must be between ${min} and ${max} characters.`;
    if (value instanceof File || value instanceof Blob)
      return `The ${attribute} must be between ${min} and ${max} kilobytes.`;
  },
  check: ({ value, args: [min, max] }) => {
    if (typeof value === 'number') return value > min && value < max;
    if (Array.isArray(value)) return value.length > min && value.length < max;
    if (typeof value === 'string')
      return value.length > min && value.length < max;
    if (value instanceof File || value instanceof Blob)
      return value.size > min && value.size < max;
  },
};
