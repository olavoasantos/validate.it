# greaterThan:field

The field under validation must be greater than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

## Implementation

```js
({ value }, type, min) => {
  return {
    numeric: () => value > min,
    file: () => value.size > min,
    string: () => value.length > min,
    array: () => value.length > min
  }[type]();
};
```

## Default message

```jsx
// If type is numeric:
The :attribute must be greater than :min.

// If type is file:
The :attribute must be greater than :min kilobytes.

// If type is string:
The :attribute must be greater than :min characters.

// If type is array:
The :attribute must have more than :min items.
```

## Example

```js
import { greaterThan } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  projects: 2,
  password: 'MY_SECRET',
  file: File, // size=1024
  overduedTasks: ['Create tests', 'Document functions']
};

/**
 * Numeric type
 * Validate if the projects field is greater than 1
 * @response true
 */
greaterThan.check({ value: data.projects }, 'numeric', 1);

/**
 * File type
 * Validate if the file size in the file field is greater than 500
 * @response true
 */
greaterThan.check({ value: data.file }, 'file', 500);

/**
 * String type
 * Validate if the password length is greater than 8
 * @response true
 */
greaterThan.check({ value: data.password }, 'string', 8);

/**
 * Array type
 * Validate if the overduedTasks list length is greater than 0
 * @response true
 */
greaterThan.check({ value: data.overduedTasks }, 'array', 0);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
