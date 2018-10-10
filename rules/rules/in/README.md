# in:foo,bar,...

The field under validation must be included in the given list of values.

## Options

- `...args`: List of allowed values separated by commas (`foo,bar,baz,...`)

## Implementation

```js
({ value }, ...oneOf) => {
  return oneOf.indexOf(value) > -1;
}
```

## Default message

```
The selected :attribute is invalid.
```

## Example

```js
import { in as inRule } from '@validate.it/rules';

/**
 * List of values
 */
const oneOf = ['Value 1', 'Value 2'];

/**
 * Validate if the value is included in the oneOf array
 * @response true
 */
inRule.check({ value: 'Value 1' }, ...oneOf);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
