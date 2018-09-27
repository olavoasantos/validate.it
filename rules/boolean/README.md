# boolean

The field under validation must be able to be cast as a boolean. Accepted input are `true`, `false`, `1`, `0`, `'1'`, and `'0'`.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} field must be true or false.`,
  check: value => {
    return typeof value === 'boolean';
  }
};

```

## Default message

```

```
