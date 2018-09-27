# requiredWith:foo,bar,...

The field under validation must be present and not empty only if any of the other specified fields are present.


## Implementation

```js
export default {
  message: (attribute, { values }) =>
    `The ${attribute} field is required when ${values} is present.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
