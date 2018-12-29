# confirmed

The field under validation must have a matching field of `foo_confirmation`. For example, if the field under validation is `password`, a matching `password_confirmation` field must be present in the input.

## Implementation

```js
({ attribute, data }) => {
  return data[`${attribute}_confirmation`] === data[attribute];
};
```

## Default message

```text
The :attribute confirmation does not match.
```

## Example

```js
import { confirmed } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  password: 'MY_SECRET',
  password_confirmation: 'MY_SECRET',
};

/**
 * Validate if the password field correctly confirmed
 * @response true
 */
confirmed.check({ attribute: 'password', data });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
