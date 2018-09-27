# different:field

The field under validation must have a different value than another specified field.

## Options

- `field`: String containing the name of another field.

## Implementation

```js
({ value, data }, other) => {
  return JSON.stringify(value) !== JSON.stringify(data[other]);
};
```

## Default message

```
The :attribute and :other must be different.
```
