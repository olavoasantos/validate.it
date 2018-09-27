# alpha

The field under validation must be entirely alphabetic characters and whitespaces.

## Implementation

```js
({ value }) => {
  return /^([a-zA-Z\s])+$/.test(value);
};
```

## Default message

```
The :attribute may only contain letters or spaces.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
