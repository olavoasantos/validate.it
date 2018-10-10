# inArray:anotherfield

The field under validation must exist in anotherfield's values.

## Options

- `anotherfield`: name of another field (an Array) which should include the value

## Implementation

```js
({ value, data }, key) => {
  return Array.isArray(data[key]) && data[key].indexOf(value) > -1;
}
```

## Default message

```
The :attribute field does not exist in :anotherfield.
```

## Example

```js
import { inArray } from '@validate.it/rules';

/**
 * Submitted data
 */
const data = {
  color: '#ff0000',
  colors: ['#ff0000', '#00ff00', '#0000ff']
};

/**
 * Validate if the value of color exists in the colors array
 * @response true
 */
inArray.check({ value: data.color }, 'colors');
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
