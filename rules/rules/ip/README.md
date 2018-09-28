# ip

The field under validation must be an IP address.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} must be a valid IP address.`
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
