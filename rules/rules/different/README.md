# different:field

The field under validation must have a different value than another specified field.

## Options

- `field`: String containing the name of another field.

## Implementation

```js
({ value, data, args: [other] }) => {
  return JSON.stringify(value) !== JSON.stringify(data[other]);
};
```

## Default message

```text
The :attribute and :other must be different.
```

## Example

```js
import { different } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  user: 'John Doe',
  target: 'Jane Doe',
};

/**
 * Validate if the user field is different from target field
 * @response true
 */
different.check({ value: data.user, args: ['target'] });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
