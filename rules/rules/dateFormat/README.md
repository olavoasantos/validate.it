# dateFormat:format

The field under validation must match the given format. You should use either date or date_format when validating a field, not both.

## Options

- `format`: Should be a string containing:

  - `YYYY`: for year
  - `MM`: for month
  - `DD`: for day
  - `HH`: for hour
  - `mm`: for minutes

## Implementation

```js
({ value }, format) => {
  const pattern = format
    .replace('mm', '([0-5][0-9])')
    .replace('MM', '(0[1-9]|1[0-2])')
    .replace('HH', '([0-1][0-9]|2[0-3])')
    .replace('DD', '(0[1-9]|1[0-9]|2[0-9]|3[0-1])')
    .replace('YYYY', '(20[0-9][0-9]|1[8-9][0-9][0-9])');

  return new RegExp(`^${pattern}$`).test(value);
};
```

## Default message

```
The :attribute does not match the format :format.
```

## Example

```js
import { dateFormat } from '@validate.it/rules';

/**
 * Submitted form data
 */
const data = {
  date: '29/09/2018'
};

/**
 * Date format
 */
const format = 'DD/MM/YYYY';

/**
 * Validate if the date field has the specified format
 * @response true
 */
dateFormat.check({ value: data.date }, format);
```

## Progress

- [x] Tests
- [x] Response message
- [x] Validation logic
- [x] Documentation
