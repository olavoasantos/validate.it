# boolean

The field under validation must be able to be cast as a boolean. Accepted input are `true`, `false`, `1`, `0`, `'1'`, and `'0'`.

## Implementation

```js
({ value }) => {
  return (
    value === 0 ||
    value === 1 ||
    value === '0' ||
    value === '1' ||
    typeof value === 'boolean'
  );
};
```

## Default message

```
The :attribute field must be true or false.
```

## Example

```js
import { boolean } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  rememberMe: false,
};

/**
 * Validate if rememberMe field is a boolean
 * @response true
 */
boolean.check({ value: data.rememberMe });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
