# required

The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:

- The value is null.
- The value is an empty string.
- The value is an empty array or empty Countable object.
- The value is an uploaded file with no path.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} field is required.`
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
