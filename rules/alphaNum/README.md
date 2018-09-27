# alphaNum

The field under validation must be entirely alpha-numeric characters.

## Implementation

```js
({ value }) => {
  return /^([a-zA-Z0-9\s])+$/.test(value);
};
```

## Default message

```
The :attribute may only contain letters and numbers.
```
