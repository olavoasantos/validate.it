# size:value

The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value. For an array, size corresponds to the count of the array. For files, size corresponds to the file size in kilobytes.


## Implementation

```js
export default {
  message: (attribute, { size, type }) =>
    ({
      numeric: `The ${attribute} must be ${size}.`,
      file: `The ${attribute} must be ${size} kilobytes.`,
      string: `The ${attribute} must be ${size} characters.`,
      array: `The ${attribute} must contain ${size} items.`
    }[type])
  // check: (value, { }) => {}
};

```

## Default message

```

```
