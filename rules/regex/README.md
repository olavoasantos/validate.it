# regex:pattern

The field under validation must match the given regular expression.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} format is invalid.`
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
