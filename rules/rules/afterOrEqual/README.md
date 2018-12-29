# afterOrEqual:date

The field under validation must be a value after or equal to the given date. For more information, see the after rule.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value, args: [date] }) => {
  return new Date(value) >= new Date(date);
};
```

## Default message

```text
The :attribute must be a date after or equal to :date.
```

## Example

```js
import { afterOrEqual } from '@validate.it/rules';
/**
 * Submitted form data
 */
const data = {
  date: '2018-09-29',
};

/**
 * Release date
 */
const releaseDate = '2018-09-29';

/**
 * Validate if date field is after or equal the releaseDate
 * @response true
 */
afterOrEqual.check({ value: data.date, args: [releaseDate] });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
