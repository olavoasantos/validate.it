# beforeOrEqual:date

The field under validation must be a value preceding or equal to the given date. The dates will be passed into the JS Date function.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value, args: [date] }) => {
  return new Date(value) <= new Date(date);
};
```

## Default message

```text
The :attribute must be a date before or equal to :date.
```

## Example

```js
import { beforeOrEqual } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  today: '2018-09-29',
};

/**
 * Deadline
 */
const deadline = '2018-09-29';

/**
 * Validate if today field is before or equal the deadline
 * @response true
 */
beforeOrEqual.check({ value: data.today }, deadline);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
