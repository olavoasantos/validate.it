# alpha

The field under validation must be entirely alphabet characters.

## Implementation

```js
({ value }) => {
  return /^([a-zA-Z])+$/.test(value);
};
```

## Default message

```
The :attribute may only contain letters or spaces.
```

## Example

```js
import { alpha } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  name: 'John',
};

/**
 * Validate if name field has only alphabet characters
 * @response true
 */
alpha.check({ value: data.name });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
