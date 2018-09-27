# lessThan:field

The field under validation must be less than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.


## Implementation

```js
export default {
  message: (attribute, { value, type }) =>
    ({
      numeric: `The ${attribute} must be less than ${value}.`,
      file: `The ${attribute} must be less than ${value} kilobytes.`,
      string: `The ${attribute} must be less than ${value} characters.`,
      array: `The ${attribute} must have less than ${value} items.`
    }[type])
  // check: (value, { }) => {}
};

```

## Default message

```

```
