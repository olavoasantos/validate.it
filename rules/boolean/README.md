# boolean

The field under validation must be able to be cast as a boolean. Accepted input are `true`, `false`, `1`, `0`, `'1'`, and `'0'`.

## Implementation

```js
({ value }) => {
  return (
    value === 0 ||
    value === 1 ||
    value === '0' ||
    value === '1' ||
    typeof value === 'boolean'
  );
};
```

## Default message

```
The :attribute field must be true or false.
```
