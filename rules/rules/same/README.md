# same:field

The given field must match the field under validation.


## Implementation

```js
export default {
  message: (attribute, { other }) =>
    `The ${attribute} and ${other} must match.`
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
