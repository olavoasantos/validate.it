# ipv6

The field under validation must be an IPv6 address.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} must be a valid IPv6 address.`
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
