# Validate it

## Disclaimer

Still a work in progress. Soon the first version will be released. Also, this was largely based on Laravel's validation rules.

## Rules

### accepted

The field under validation must be `'yes'`, `'on'`, `1`, or `true`. This is useful for validating "Terms of Service" acceptance.

### after:date

The field under validation must be a value after a given date. The dates will be passed into the JS Date function.

### afterOrEqual:date

The field under validation must be a value after or equal to the given date. For more information, see the after rule.

### alpha

The field under validation must be entirely alphabetic characters.

### alphaDash

The field under validation may have alpha-numeric characters, as well as dashes and underscores.

### alphaNum

The field under validation must be entirely alpha-numeric characters.

### array

The field under validation must be a JS array.

### before:date

The field under validation must be a value preceding the given date. The dates will be passed into the JS Date function.

### beforeOrEqual:date

The field under validation must be a value preceding or equal to the given date. The dates will be passed into the JS Date function.

### between:min,max

The field under validation must have a size between the given min and max. Strings, numerics, arrays, and files are evaluated in the same fashion as the size rule.

### boolean

The field under validation must be able to be cast as a boolean. Accepted input are `true`, `false`, `1`, `0`, `'1'`, and `'0'`.

### confirmed

The field under validation must have a matching field of `foo_confirmation`. For example, if the field under validation is `password`, a matching `password_confirmation` field must be present in the input.

### date

The field under validation must be a valid date according to the Date.parse JS function.

### dateEquals:date

The field under validation must be equal to the given date. The dates will be passed into the JS Date function.

### dateFormat:format

The field under validation must match the given format. You should use either date or date_format when validating a field, not both.

### different:field

The field under validation must have a different value than field.

### digits:value

The field under validation must be numeric and must have an exact length of value.

### digitsBetween:min,max

The field under validation must have a length between the given min and max.

### distinct

When working with arrays, the field under validation must not have any duplicate values.

### email

The field under validation must be formatted as an e-mail address.

### filled

The field under validation must not be empty when it is present.

## Rules TODO

### greatherThan:field

The field under validation must be greater than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

### greatherThanOrEqual:field

The field under validation must be greater than or equal to the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

### image

The file under validation must be an image (jpeg, png, bmp, gif, or svg)

### in:foo,bar,...

The field under validation must be included in the given list of values. Since this rule often requires you to implode an array, the Rule::in method may be used to fluently construct the rule.

### inArray:anotherfield

The field under validation must exist in anotherfield's values.

### integer

The field under validation must be an integer.

### ip

The field under validation must be an IP address.

### ipv4

The field under validation must be an IPv4 address.

### ipv6

The field under validation must be an IPv6 address.

### json

The field under validation must be a valid JSON string.

### lowerThan:field

The field under validation must be less than the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

### lowerThanOrEqual:field

The field under validation must be less than or equal to the given field. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the size rule.

### max:value

The field under validation must be less than or equal to a maximum value. Strings, numerics, arrays, and files are evaluated in the same fashion as the size rule.

### mimetypes:text/plain,...

The file under validation must match one of the given MIME types

### mimes:foo,bar,...

The file under validation must have a MIME type corresponding to one of the listed extensions.

### min:value

The field under validation must have a minimum value. Strings, numerics, arrays, and files are evaluated in the same fashion as the size rule.

### notIn:foo,bar,...

The field under validation must not be included in the given list of values. The Rule::notIn method may be used to fluently construct the rule:

### notRegex:pattern

The field under validation must not match the given regular expression.

### nullable

The field under validation may be null. This is particularly useful when validating primitive such as strings and integers that can contain null values.

### numeric

The field under validation must be numeric.

### present

The field under validation must be present in the input data but can be empty.

### regex:pattern

The field under validation must match the given regular expression.

### required

The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:

- The value is null.
- The value is an empty string.
- The value is an empty array or empty Countable object.
- The value is an uploaded file with no path.

### requiredIf:anotherfield,value,...

The field under validation must be present and not empty if the anotherfield field is equal to any value.

### requiredUnless:anotherfield,value,...

The field under validation must be present and not empty unless the anotherfield field is equal to any value.

### requiredWith:foo,bar,...

The field under validation must be present and not empty only if any of the other specified fields are present.

### requiredWithAll:foo,bar,...

The field under validation must be present and not empty only if all of the other specified fields are present.

### requiredWithout:foo,bar,...

The field under validation must be present and not empty only when any of the other specified fields are not present.

### requiredWithoutAll:foo,bar,...

The field under validation must be present and not empty only when all of the other specified fields are not present.

### same:field

The given field must match the field under validation.

### size:value

The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value. For an array, size corresponds to the count of the array. For files, size corresponds to the file size in kilobytes.

### string

The field under validation must be a string. If you would like to allow the field to also be null, you should assign the nullable rule to the field.

### url

The field under validation must be a valid URL.
