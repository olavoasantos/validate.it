# greaterThan:field

The field under validation must be greater than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

## Implementation

```js
export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be greater than ${value}.`,
      file: `The ${attribute} must be greater than ${value} kilobytes.`,
      string: `The ${attribute} must be greater than ${value} characters.`,
      array: `The ${attribute} must have more than ${value} items.`
    }[type])
  // check: (value, { }) => {}
};
```

## Default message

```

```
