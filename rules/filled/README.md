# filled

The field under validation must not be empty when it is present.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} field must have a value.`,
  check: value => {
    return value !== undefined;
  }
};

```

## Default message

```

```
