# notIn:foo,bar,...

The field under validation must not be included in the given list of values. The Rule::notIn method may be used to fluently construct the rule:


## Implementation

```js
export default {
  message: attribute => `The selected ${attribute} is invalid.`
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
