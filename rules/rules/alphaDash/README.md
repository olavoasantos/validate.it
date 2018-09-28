# alphaDash

The field under validation may have alpha-numeric characters, as well as dashes and underscores.

## Implementation

```js
({ value }) => {
  return /^([a-zA-Z0-9\-\_])+$/.test(value);
};
```

## Default message

```
The :attribute may only contain letters, numbers, dashes and underscores.
```

## Example

```js
import { alphaDash } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  slug: 'John_Doe-123',
};

/**
 * Validate if slug field has only alphanumeric, dashes and underscores characters
 * @response true
 */
alphaDash.check({ value: data.slug });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
