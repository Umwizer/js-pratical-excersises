// isNaN doesn't work very well. We want it to tell us whether the value or object
// we're dealing with is a number or not. Instead, it tells us if the value is
//  equal to the NaN value it has on-record.

// So let's make a proper function, called isAN, for is A Number.
// If you pass it a value, it will return true if a value is a valid
// primitive number or Number object, and false if not.
function isAN(value) {
  return (
    (typeof value === "number" && !Number.isNaN(value)) ||
    (value instanceof Number && !Number.isNaN(value.valueOf()))
  );
}
console.log(isAN(42));
console.log(isAN(new Number(42)));
console.log(isAN(NaN));
console.log(isAN("42"));
console.log(isAN(undefined));
console.log(isAN(null));
