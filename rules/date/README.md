# date

The field under validation must be a valid date according to the Date.parse JS function.


## Implementation

```js
export default {
  message: attribute => `The ${attribute} is not a valid date.`,
  check: value => {
    return !isNaN(Date.parse(value));
  }
};

```

## Default message

```

```
