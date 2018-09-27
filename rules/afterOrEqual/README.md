# afterOrEqual:date

The field under validation must be a value after or equal to the given date. For more information, see the after rule.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value }, date) => {
  return new Date(value) >= new Date(date);
};
```

## Default message

```
The :attribute must be a date after or equal to :date.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
