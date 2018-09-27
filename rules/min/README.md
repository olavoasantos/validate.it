# min:value

The field under validation must have a minimum value. Strings, numerics, arrays, and files are evaluated in the same fashion as the size rule.


## Implementation

```js
export default {
  message: (attribute, { min, type }) =>
    ({
      numeric: `The ${attribute} must be at least ${min}.`,
      file: `The ${attribute} must be at least ${min} kilobytes.`,
      string: `The ${attribute} must be at least ${min} characters.`,
      array: `The ${attribute} must have at least ${min} items.`
    }[type])
  // check: (value, { }) => {}
};

```

## Default message

```

```

## Progress

- [ ] Tests
- [x] Response message
- [ ] Validation logic
- [ ] Documentation
