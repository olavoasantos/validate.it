# greaterThanOrEqual:field

The field under validation must be greater than or equal to the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

## Implementation

```js
({ value, data, args: [field] }) => {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length >= data[field];
  }
  if (!isNaN(value)) {
    return value >= data[field];
  }
  if (
    typeof value === 'File' ||
    (value.constructor && value.constructor.name === 'Blob')
  ) {
    return value.size >= data[field];
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
  minProjects: 1,

  password: 'MYSECRET',
  minPasswordLength: 8,

  file: File, // size=1024
  minFileSize: 500,

  tasks: ['Create tests']
  minTasks: 1,
};

/**
 * Numeric type
 * Validate if the projects field is greater than 1
 * @response true
 */
greaterThanOrEqual.check({ value: data.projects, data, args: ['minProjects'] });

/**
 * File type
 * Validate if the file size in the file field is greater than 500
 * @response true
 */
greaterThanOrEqual.check({ value: data.file, data, args: ['minFileSize'] });

/**
 * String type
 * Validate if the password length is greater than 8
 * @response true
 */
greaterThanOrEqual.check({ value: data.password, data, args: ['minPasswordLength'] });

/**
 * Array type
 * Validate if the overduedTasks list length is greater than 1
 * @response true
 */
greaterThanOrEqual.check({ value: data.tasks, data, args: ['minTasks'] });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
