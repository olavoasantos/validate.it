# digitsBetween:min,max

The field under validation must have a length between the given min and max.

## Options

- `min`: Minimum value
- `max`: Maximum value

## Implementation

```js
({ value }, min, max) => {
  return (
    !isNaN(value) &&
    value.toString().length > min &&
    value.toString().length < max
  );
};
```

## Default message

```
The :attribute must be between :min and :max digits.
```

## Example

```js
import { digitsBetween } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  price: 1000
};

/**
 * Minimum number of digits
 */
const min = 3;

/**
 * Maximum number of digits
 */
const min = 5;

/**
 * Validate if the price field has 4 digits
 * @response true
 */
digitsBetween.check({ value: data.price }, min, max);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
