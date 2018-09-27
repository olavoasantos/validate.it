# json

The field under validation must be a valid JSON string.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} must be a valid JSON string.`
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
