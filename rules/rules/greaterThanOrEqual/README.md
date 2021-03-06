# greaterThanOrEqual:min

The field under validation must be greater than or equal to the given value. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

## Implementation

```js
({ value, args: [min] }) => {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length >= min;
  }
  if (!isNaN(value)) {
    return value >= min;
  }
  if (
    typeof value === 'File' ||
    (value.constructor && value.constructor.name === 'Blob')
  ) {
    return value.size >= min;
  }
};
```

## Default message

```text
// If type is numeric:
The :attribute must be greater than or equal :min.

// If type is file:
The :attribute must be greater than or equal :min kilobytes.

// If type is string:
The :attribute must be greater than or equal :min characters.

// If type is array:
The :attribute must have :min items or more.
```

## Example

```js
import { greaterThanOrEqual } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  projects: 2,
  password: 'MYSECRET',
  file: File, // size=1024
  tasks: ['Create tests'],
};

/**
 * Minimum values
 */
const minProjects = 1;
const minPasswordLength = 8;
const minFileSize = 500;
const minTasks = 1;

/**
 * Numeric type
 * Validate if the projects field is greater than 1
 * @response true
 */
greaterThanOrEqual.check({ value: data.projects, args: [minProjects] });

/**
 * File type
 * Validate if the file size in the file field is greater than 500
 * @response true
 */
greaterThanOrEqual.check({ value: data.file, args: [minFileSize] });

/**
 * String type
 * Validate if the password length is greater than 8
 * @response true
 */
greaterThanOrEqual.check({ value: data.password, args: [minPasswordLength] });

/**
 * Array type
 * Validate if the overduedTasks list length is greater than 1
 * @response true
 */
greaterThanOrEqual.check({ value: data.tasks, args: [minTasks] });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
