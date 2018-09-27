# present

The field under validation must be present in the input data but can be empty.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} field must be present.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
