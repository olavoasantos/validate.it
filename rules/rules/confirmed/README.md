# confirmed

The field under validation must have a matching field of `foo_confirmation`. For example, if the field under validation is `password`, a matching `password_confirmation` field must be present in the input.


## Implementation

```js
({ value, attribute, data }) => {
  return data[`${attribute}_confirmation`] === value;
}
```

## Default message

```
The :attribute confirmation does not match.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation