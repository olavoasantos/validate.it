# accepted

## Description

The field under validation must be `'yes'`, `'on'`, `1`, or `true`. This is useful for validating "Terms of Service" acceptance.

## Implementation

```js
({ value }) => {
  return value === true || value === 1 || value === 'on' || value === 'yes';
};
```

## Default message

```
The :attribute must be accepted.
```

## Example

```js
import { accepted } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  termsOfService: true
};

/**
 * Validate if termsOfService field was accepted
 * @response true
 */
accepted.check({ value: data.termsOfService });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
