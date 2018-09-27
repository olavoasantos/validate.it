# string

The field under validation must be a string. If you would like to allow the field to also be null, you should assign the nullable rule to the field.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} must be a string.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
