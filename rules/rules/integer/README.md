# integer

The field under validation must be an integer.

## Implementation

```js
({ value }) => Number.isInteger(value);
```

## Default message

```text
The :attribute must be an integer.
```

## Example

```js
import { integer } from '@validate.it/rules';

/**
 * Submitted data
 */
const data = {
  yars: 18,
};

/**
 * Validate if the value of years is an integer
 * @response true
 */
inArray.check({ value: data.years });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
