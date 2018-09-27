# digits:value

The field under validation must be numeric and must have an exact length of value.


## Implementation

```js
export default {
  message: (attribute, { digits }) =>
    `The ${attribute} must be ${digits} digits.`,
  check: (value, { digits }) => {
    return !isNaN(value) && value.toString().length === digits;
  }
};

```

## Default message

```

```
