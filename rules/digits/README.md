# digits:value

The field under validation must be numeric and must have an exact length of value.

## Options

- `value`: Integer determining the number of digits of the field

## Implementation

```js
({ value }, digits) => {
  return !isNaN(value) && value.toString().length === digits;
}
```

## Default message

```
The :attribute must be :digits digits.
```
