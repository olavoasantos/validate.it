# alphaNum

The field under validation must be entirely alpha-numeric characters.

## Implementation

```js
({ value }) => {
  return /^([a-zA-Z0-9])+$/.test(value);
};
```

## Default message

```
The :attribute may only contain letters and numbers.
```

## Example

```js
import { alphaNum } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  slug: 'JohnDoe123',
};

/**
 * Validate if slug field has only alphanumeric characters
 * @response true
 */
alphaNum.check({ value: data.slug });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
