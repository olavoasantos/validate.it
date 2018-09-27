# before:date

The field under validation must be a value preceding the given date. The dates will be passed into the JS Date function.

## Options

- `date`: should be a valid JS Date string

## Implementation

```js
({ value }, date) => {
  return new Date(value) < new Date(date);
};
```

## Default message

```
The :attribute must be a date before :date.
```
