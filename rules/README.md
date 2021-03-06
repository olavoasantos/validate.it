# @validate.it/rules

![version](https://img.shields.io/npm/v/@validate.it/rules.svg)
![issues](https://img.shields.io/github/issues/olavoasantos/validate.it/@rules.svg)
![issues](https://img.shields.io/github/issues-pr/olavoasantos/validate.it/@rules.svg)
![completed rules](https://img.shields.io/badge/finished%20rules-43%25-blue.svg)

## Installation

```bash
// If you are using npm
npm install --save @validate.it/rules

// If you are using yarn
yarn add @validate.it/rules
```

## Rule structure

Validation rules are JS objects containing a `message` and a `check` functions.

```ts
{
  message: Function (options: Object),
  check: Function (options: Object)
}
```

Each of these methods accepts an options object containing:

- `value <Any>`: value of the field being validated
- `attribute <String>`: The name of the validated field
- `data <Object>`: object containing all the fields being validated
- `args <Array>`: An array containing the options passed to the validation rules in order

## Available rules

- [accepted](/rules/rules/accepted/)
- [after](/rules/rules/after/)
- [afterOrEqual](/rules/rules/afterOrEqual/)
- [alpha](/rules/rules/alpha/)
- [array](/rules/rules/array/)
- [before](/rules/rules/before/)
- [beforeOrEqual](/rules/rules/beforeOrEqual/)
- [between](/rules/rules/between/)
- [boolean](/rules/rules/boolean/)
- [confirmed](/rules/rules/confirmed/)
- [date](/rules/rules/date/)
- [dateEquals](/rules/rules/dateEquals/)
- [dateFormat](/rules/rules/dateFormat/)
- [different](/rules/rules/different/)
- [digits](/rules/rules/digits/)
- [digitsBetween](/rules/rules/digitsBetween/)
- [distinct](/rules/rules/distinct/)
- [email](/rules/rules/email/)
- [greaterThan](/rules/rules/greaterThan/)
- [greaterThanOrEqual](/rules/rules/greaterThanOrEqual/)
- [inArray](/rules/rules/inArray/)
- [integer](/rules/rules/integer/)
- [ip](/rules/rules/ip/)
- [ipv4](/rules/rules/ipv4/)
- [ipv6](/rules/rules/ipv6/)
- [json](/rules/rules/json/)
- [lessThan](/rules/rules/lessThan/)
- [lessThanOrEqual](/rules/rules/lessThanOrEqual/)
- [max](/rules/rules/max/)
- [mimetypes](/rules/rules/mimetypes/)
- [mimes](/rules/rules/mimes/)
- [min](/rules/rules/min/)
- [notIn](/rules/rules/notIn/)
- [notRegex](/rules/rules/notRegex/)
- [nullable](/rules/rules/nullable/)
- [numeric](/rules/rules/numeric/)
- [oneOf](/rules/rules/oneOf/)
- [present](/rules/rules/present/)
- [regex](/rules/rules/regex/)
- [required](/rules/rules/required/)
- [requiredIf](/rules/rules/requiredIf/)
- [requiredUnless](/rules/rules/requiredUnless/)
- [requiredWith](/rules/rules/requiredWith/)
- [requiredWithAll](/rules/rules/requiredWithAll/)
- [requiredWithout](/rules/rules/requiredWithout/)
- [requiredWithoutAll](/rules/rules/requiredWithoutAll/)
- [same](/rules/rules/same/)
- [size](/rules/rules/size/)
- [string](/rules/rules/string/)
- [url](/rules/rules/url/)

## Version log

- **v0.0.x**:

  - Initial commits
  - Created first rules

## Author

- [Olavo Amorim Santos](https://github.com/olavoasantos/)
