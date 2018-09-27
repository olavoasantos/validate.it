# lessThanOrEqual:field

The field under validation must be less than or equal to the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.


## Implementation

```js
export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be less than or equal ${value}.`,
      file: `The ${attribute} must be less than or equal ${value} kilobytes.`,
      string: `The ${attribute} must be less than or equal ${value} characters.`,
      array: `The ${attribute} must not have more than ${value} items.`
    }[type])
  // check: (value, { }) => {}
};

```

## Default message

```

```
