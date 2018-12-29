# after:date

The field under validation must be a value after a given date. The dates will be passed into the JS Date function.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value, args: [date] }) => {
  return new Date(value) > new Date(date);
};
```

## Default message

```text
The :attribute must be a date after :date.
```

## Example

```js
import { after } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  today: '2018-09-29',
};

/**
 * Release date
 */
const releaseDate = '2018-09-01';

/**
 * Validate if today field is after the release date
 * @response true
 */
after.check({ value: data.today, args: [releaseDate] });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
