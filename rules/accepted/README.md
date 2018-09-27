# accepted

## Description

The field under validation must be `'yes'`, `'on'`, `1`, or `true`. This is useful for validating "Terms of Service" acceptance.

## Implementation

```js
({ value }) => {
  return value === true || value === 1 || value === 'on' || value === 'yes';
};
```

## Default message

```
The :attribute must be accepted.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
