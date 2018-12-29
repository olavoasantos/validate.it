# alpha:?num,?space,?dash

The field under validation must be entirely alphabet characters.

## Options

- `num`: (optional) string can contain alphabet characters and numbers
- `space`: (optional) string can contain alphabet characters and spaces
- `dash`: (optional) string can contain alphabet characters, dashes and underscores.

## Implementation

```js
({ value, args = [] }) => {
  let pattern = 'a-zA-Z';
  if (args.indexOf('num') > -1) pattern += '0-9';
  if (args.indexOf('space') > -1) pattern += '\\s';
  if (args.indexOf('dash') > -1) pattern += '\\-\\_';

  return new RegExp(`^[${pattern}]+$`).test(value);
};
```

## Default message

```text
The :attribute may only contain letters.
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
