# Rules

Validation rules are objects containing a `message` and a `check` functions.

## Rule structure

```ts
{
  message: Function (attribute: string, options: Object),
  check: Function (options: Object, ...args: any)
}
```

### `message`

The message function defines the error message. It should return a `String` and it receives the following parameters:

- `attribute <String>`: The name of the validated field
- `options <Object>`: A object containing the rules options

### `check`

This functions will validate the value. It should return a `Boolean` (`true` if passes, `false` if fails) and receives the following parameters:

- `options <Object>`: Object containing the valaidation data:

  - `attribute <String>`: name of the field being validated
  - `value <Any>`: value of the field being validated
  - `data <Object>`: object containing all the fields being validated

- `...args <Any>`: the rest of the arguments are the validation rules options passed in order

## Available rules

- [accepted](./rules/accepted/)
- [after](./rules/after/)
- [afterOrEqual](./rules/afterOrEqual/)
- [alpha](./rules/alpha/)
- [alphaDash](./rules/alphaDash/)
- [alphaNum](./rules/alphaNum/)
- [array](./rules/array/)
- [before](./rules/before/)
- [beforeOrEqual](./rules/beforeOrEqual/)
- [between](./rules/between/)
- [boolean](./rules/boolean/)
- [confirmed](./rules/confirmed/)
- [date](./rules/date/)
- [dateEquals](./rules/dateEquals/)
- [dateFormat](./rules/dateFormat/)
- [different](./rules/different/)
- [digits](./rules/digits/)
- [digitsBetween](./rules/digitsBetween/)
- [distinct](./rules/distinct/)
- [email](./rules/email/)
- [greatherThan](./rules/greatherThan/)
- [greatherThanOrEqual](./rules/greatherThanOrEqual/)
- [image](./rules/image/)
- [in](./rules/in/)
- [inArray](./rules/inArray/)
- [integer](./rules/integer/)
- [ip](./rules/ip/)
- [ipv4](./rules/ipv4/)
- [ipv6](./rules/ipv6/)
- [json](./rules/json/)
- [lessThan](./rules/lessThan/)
- [lessThanOrEqual](./rules/lessThanOrEqual/)
- [max](./rules/max/)
- [mimetypes](./rules/mimetypes/)
- [mimes](./rules/mimes/)
- [min](./rules/min/)
- [notIn](./rules/notIn/)
- [notRegex](./rules/notRegex/)
- [nullable](./rules/nullable/)
- [numeric](./rules/numeric/)
- [present](./rules/present/)
- [regex](./rules/regex/)
- [required](./rules/required/)
- [requiredIf](./rules/requiredIf/)
- [requiredUnless](./rules/requiredUnless/)
- [requiredWith](./rules/requiredWith/)
- [requiredWithAll](./rules/requiredWithAll/)
- [requiredWithout](./rules/requiredWithout/)
- [requiredWithoutAll](./rules/requiredWithoutAll/)
- [same](./rules/same/)
- [size](./rules/size/)
- [string](./rules/string/)
- [url](./rules/url/)
