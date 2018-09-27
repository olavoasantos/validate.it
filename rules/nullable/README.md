# nullable

The field under validation may be null. This is particularly useful when validating primitive such as strings and integers that can contain null values.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} must be a number.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
