# inArray:anotherfield

The field under validation must exist in anotherfield's values.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} field does not exist in :other.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
