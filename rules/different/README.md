# different:field

The field under validation must have a different value than field.


## Implementation

```js
export default {
  message: (attribute, { other }) =>
    `The ${attribute} and ${other} must be different.`,
  check: (value, { other }) => {
    return JSON.stringify(value) !== JSON.stringify(other);
  }
};

```

## Default message

```

```
