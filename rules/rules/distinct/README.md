# distinct:?key

When working with arrays, the field under validation must not have any duplicate values.

## Options

- `key`: (optional) Should a key of the contained in list of objects

## Implementation

```js
({ value, args }) => {
  const [key] = args ? args : [];
  return value.reduce((isDistinct, item) => {
    if (!isDistinct) return isDistinct;

    return !key
      ? value.filter(data => data === item).length < 2
      : value.filter(data => data[key] === item[key]).length < 2;
  }, true);
};
```

## Default message

```text
The :attribute field has a duplicate value.
```

## Example

```js
import { distinct } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  list: ['apples', 'lemons', 'oranges'],
  users: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Doe' },
  ],
};

/**
 * Unique field
 */
const uniqueField = 'id';

/**
 * Validate if the users field contains only items
 * with unique IDs
 * @response true
 */
distinct.check({ value: data.users, args: [uniqueField] });

/**
 * Validate if the list field contains only unique items
 * @response true
 */
distinct.check({ value: data.list });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
