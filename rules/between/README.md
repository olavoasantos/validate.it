# between:type,min,max

The field under validation must have a size between the given min and max. Strings, numerics, arrays, and files are evaluated in the same fashion as the size rule.

## Options

- `type`: A string which must be either `numeric`, `file`, `string` or `array`
- `min`: Minimum value
- `max`: Maximum value

## Implementation

```js
({ value }, type, min, max) => {
  return {
    numeric: () => value > min && value < max,
    file: () => value.size > min && value.size < max,
    string: () => value.length > min && value.length < max,
    array: () => value.length > min && value.length < max
  }[type]();
}
```

## Default message

```jsx
// If type is numeric:
The :attribute must be between :min and :max.

// If type is file:
The :attribute must be between :min and :max kilobytes.

// If type is string:
The :attribute must be between :min and :max characters.

// If type is array:
The :attribute must have between :min and :max items.
```
