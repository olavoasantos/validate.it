# array

The field under validation must be a JS array.

## Implementation

```js
({ value }) => {
  return Array.isArray(value);
};
```

## Default message

```
The :attribute must be an array.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
