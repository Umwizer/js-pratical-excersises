// Why is resolve not simply the opposite of reject?
// Definition: resolve means the promise is settled successfully, but the value it resolves with can still be a rejected promise.

// Arguments: Any value (including errors or rejected promises).

// Returns: A fulfilled Promise (but may contain rejection if you pass a rejected promise).

// Methods:
Promise.resolve(
  Promise.reject("oops").then(
    (val) => console.log("resolved with", val),
    (err) => console.log("error", err)
  )
);
