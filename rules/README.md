# Rules

Validation rules are objects containing a `message` and a `check` functions.

## `message`

The message function defines the error message. It should return a `String` and it receives the following parameters:

- `attribute`: The name of the validated field
- `options`: A object containing the rules options

## `check`

This functions will validate the value. It should return a `Boolean` (`true` if passes, `false` if fails) and receives the following parameters:

- `options`: Object containing the valaidation data:

  - `attribute`: name of the field being validated
  - `value`: value of the field being validated
  - `data`: object containing all the fields being validated

- `...args`: the rest of the arguments are the validation rules options passed in order