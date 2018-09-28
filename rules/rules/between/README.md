# between:type,min,max

The field under validation must have a size between the given min and max. Strings, numerics, arrays, and files are evaluated in the same fashion as the size rule.

## Options

- `type`: A string which must be either `numeric`, `file`, `string` or `array`
- `min`: Minimum value
- `max`: Maximum value

## Implementation

```js
({ value }, type, min, max) => {
  return {
    numeric: () => value > min && value < max,
    file: () => value.size > min && value.size < max,
    string: () => value.length > min && value.length < max,
    array: () => value.length > min && value.length < max
  }[type]();
}
```

## Default message

```jsx
// If type is numeric:
The :attribute must be between :min and :max.

// If type is file:
The :attribute must be between :min and :max kilobytes.

// If type is string:
The :attribute must be between :min and :max characters.

// If type is array:
The :attribute must have between :min and :max items.
```

## Example

```js
import { between } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  projects: 2,
  password: 'MY_SECRET',
  file: File, // size=1024
  overduedTasks: [
    'Create tests',
    'Document functions',
  ],
};

/**
 * Numeric type
 * Validate if the projects field is between 1 and 3.
 * @response true
 */
between.check({ value: data.projects }, 'numeric', 1, 3);

/**
 * File type
 * Validate if the file size in the file field
 * is between 500 and 5000.
 * @response true
 */
between.check({ value: data.file }, 'file', 500, 5000);

/**
 * String type
 * Validate if the password length is between 8 and 13.
 * @response true
 */
between.check({ value: data.password }, 'string', 8, 13);

/**
 * Array type
 * Validate if the overduedTasks list length is between 0 and 3.
 * @response true
 */
between.check({ value: data.overduedTasks }, 'array', 0, 3);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
