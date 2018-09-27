# date

The field under validation must be a valid date according to the Date.parse JS function.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value }) => {
  return !isNaN(Date.parse(value));
};
```

## Default message

```
The :attribute is not a valid date.
```
