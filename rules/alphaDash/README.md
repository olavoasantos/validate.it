# alphaDash

The field under validation may have alpha-numeric characters, as well as dashes and underscores.

## Implementation

```js
({ value }) => {
  return /^([a-zA-Z0-9\-\_\s])+$/.test(value);
};
```

## Default message

```
The :attribute may only contain letters, numbers, whitespaces, dashes and underscores.
```
