# array

The field under validation must be a JS array.

## Implementation

```js
({ value }) => {
  return Array.isArray(value);
};
```

## Default message

```text
The :attribute must be an array.
```

## Example

```js
import { array } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  list: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }],
};

/**
 * Validate if list field is an array
 * @response true
 */
array.check({ value: data.list });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
