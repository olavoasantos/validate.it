# Rules

Validation rules are objects containing a `message` and a `check` functions.

## Rule structure

### `message`

The message function defines the error message. It should return a `String` and it receives the following parameters:

- `attribute`: The name of the validated field
- `options`: A object containing the rules options

### `check`

This functions will validate the value. It should return a `Boolean` (`true` if passes, `false` if fails) and receives the following parameters:

- `options`: Object containing the valaidation data:

  - `attribute`: name of the field being validated
  - `value`: value of the field being validated
  - `data`: object containing all the fields being validated

- `...args`: the rest of the arguments are the validation rules options passed in order

## Available rules

- [accepted](/rules/accepted/README.md)
- [after](/rules/after/README.md)
- [afterOrEqual](/rules/afterOrEqual/README.md)
- [alpha](/rules/alpha/README.md)
- [alphaDash](/rules/alphaDash/README.md)
- [alphaNum](/rules/alphaNum/README.md)
- [array](/rules/array/README.md)
- [before](/rules/before/README.md)
- [beforeOrEqual](/rules/beforeOrEqual/README.md)
- [between](/rules/between/README.md)
- [boolean](/rules/boolean/README.md)
- [confirmed](/rules/confirmed/README.md)
- [date](/rules/date/README.md)
- [dateEquals](/rules/dateEquals/README.md)
- [dateFormat](/rules/dateFormat/README.md)
- [different](/rules/different/README.md)
- [digits](/rules/digits/README.md)
- [digitsBetween](/rules/digitsBetween/README.md)
- [distinct](/rules/distinct/README.md)
- [email](/rules/email/README.md)

#### Rules TODO

- [greatherThan](/rules/greatherThan/README.md)
- [greatherThanOrEqual](/rules/greatherThanOrEqual/README.md)
- [image](/rules/image/README.md)
- [in](/rules/in/README.md)
- [inArray](/rules/inArray/README.md)
- [integer](/rules/integer/README.md)
- [ip](/rules/ip/README.md)
- [ipv4](/rules/ipv4/README.md)
- [ipv6](/rules/ipv6/README.md)
- [json](/rules/json/README.md)
- [lessThan](/rules/lessThan/README.md)
- [lessThanOrEqual](/rules/lessThanOrEqual/README.md)
- [max](/rules/max/README.md)
- [mimetypes](/rules/mimetypes/README.md)
- [mimes](/rules/mimes/README.md)
- [min](/rules/min/README.md)
- [notIn](/rules/notIn/README.md)
- [notRegex](/rules/notRegex/README.md)
- [nullable](/rules/nullable/README.md)
- [numeric](/rules/numeric/README.md)
- [present](/rules/present/README.md)
- [regex](/rules/regex/README.md)
- [required](/rules/required/README.md)
- [requiredIf](/rules/requiredIf/README.md)
- [requiredUnless](/rules/requiredUnless/README.md)
- [requiredWith](/rules/requiredWith/README.md)
- [requiredWithAll](/rules/requiredWithAll/README.md)
- [requiredWithout](/rules/requiredWithout/README.md)
- [requiredWithoutAll](/rules/requiredWithoutAll/README.md)
- [same](/rules/same/README.md)
- [size](/rules/size/README.md)
- [string](/rules/string/README.md)
- [url](/rules/url/README.md)
