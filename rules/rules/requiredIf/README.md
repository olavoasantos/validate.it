# requiredif:anotherfield,value,...

The field under validation must be present and not empty if the anotherfield field is equal to any value.


## Implementation

```js
export default {
  message: (attribute, { other, value }) =>
    `The ${attribute} field is required when ${other} is ${value}.`
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
