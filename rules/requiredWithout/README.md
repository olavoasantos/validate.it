# requiredWithout:foo,bar,...

The field under validation must be present and not empty only when any of the other specified fields are not present.


## Implementation

```js
export default {
  message: (attribute, { values }) =>
    `The ${attribute} field is required when ${values} is not present.`
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
