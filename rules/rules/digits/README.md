# digits:value

The field under validation must be numeric and must have an exact length of value.

## Options

- `value`: Integer determining the number of digits of the field

## Implementation

```js
({ value, args: [digits] }) => {
  return !isNaN(value) && value.toString().length === digits;
};
```

## Default message

```text
The :attribute must be :digits digits.
```

## Example

```js
import { digits } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  price: 1000,
};

/**
 * Number of digits
 */
const numberOfDigits = 4;

/**
 * Validate if the price field has 4 digits
 * @response true
 */
digits.check({ value: data.price, args: [numberOfDigits] });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
