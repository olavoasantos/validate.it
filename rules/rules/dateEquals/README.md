# dateEquals:date

The field under validation must be equal to the given date. The dates will be passed into the JS Date function.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value }, date) => {
  return new Date(value).getTime() === new Date(date).getTime();
};
```

## Default message

```
The :attribute does not match :date.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
