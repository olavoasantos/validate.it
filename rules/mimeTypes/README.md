# mimeTypes:foo,bar,...

The file under validation must have a MIME type corresponding to one of the listed extensions.


## Implementation

```js
export default {
  message: (attribute, { values }) =>
    `The ${attribute} must be a file of type: ${values}.`
  // check: (value, { }) => {}
};

```

## Default message

```

```
