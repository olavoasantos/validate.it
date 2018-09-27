# digitsBetween:min,max

The field under validation must have a length between the given min and max.

## Options

- `min`: Minimum value
- `max`: Maximum value

## Implementation

```js
({ value }, min, max) => {
  return (
    !isNaN(value) &&
    value.toString().length > min &&
    value.toString().length < max
  );
};
```

## Default message

```
The :attribute must be between :min and :max digits.
```
