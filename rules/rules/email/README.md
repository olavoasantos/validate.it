# email

The field under validation must be formatted as an e-mail address.

## Implementation

```js
({ value }) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(value);
};
```

## Default message

```text
The :attribute must be a valid email address.
```

## Example

```js
import { email } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  email: 'john@example.com',
};

/**
 * Validate if the email field is a valid e-mail
 * @response true
 */
email.check({ value: data.email });
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
