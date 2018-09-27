# distinct:key?

When working with arrays, the field under validation must not have any duplicate values.

## Options

- `key`: (optional) Should a key of the contained in list of objects

## Implementation

```js
({ value }, key) => {
  return value.reduce((isDistinct, item) => {
    if (!isDistinct) return isDistinct;

    if (!!key) {
      return value.filter(data => data[key] === item[key]).length < 2;
    }

    return value.filter(data => data === item).length < 2;
  }, true);
};
```

## Default message

```
The :attribute field has a duplicate value.
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
