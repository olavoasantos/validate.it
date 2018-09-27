# confirmed

The field under validation must have a matching field of `foo_confirmation`. For example, if the field under validation is `password`, a matching `password_confirmation` field must be present in the input.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} confirmation does not match.`,
  check: (value, { name, data }) => {
    return data[`${name}_confirmation`] === value;
  }
};

```

## Default message

```

```
