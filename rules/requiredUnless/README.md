# requiredUnless:anotherfield,value,...

The field under validation must be present and not empty unless the anotherfield field is equal to any value.


## Implementation

```js
export default {
  message: (attribute, { other, values }) =>
    `The ${attribute} fieldis required unless ${other} is in ${values}.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
