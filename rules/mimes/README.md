# mimes:text/plain,...

The file under validation must match one of the given MIME types


## Implementation

```js
export default {
  message: attribute => `The ${attribute} must be a file of type: :values.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
