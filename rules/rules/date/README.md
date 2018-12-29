# date

The field under validation must be a valid date according to the Date.parse JS function.

## Implementation

```js
({ value }) => {
  return !isNaN(Date.parse(value));
};
```

## Default message

```text
The :attribute is not a valid date.
```

```js
import { date } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  publishedAt: '2018-10-01',
};

/**
 * Validate if the publishedAt field is a valid date
 * @response true
 */
date.check({ value: data.publishedAt });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
