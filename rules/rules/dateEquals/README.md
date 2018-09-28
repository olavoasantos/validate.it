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

## Example

```js
import { dateEquals } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  today: '2018-12-25',
};


/**
 * Christmas day
 */
const christmas = '2018-12-25';

/**
 * Validate if today field is cristmas date
 * @response true
 */
dateEquals.check({ value: data.today }, christmas);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
