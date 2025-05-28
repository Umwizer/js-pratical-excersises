// Use .then() to chain two tasks: multiply
//  a number by 2, then add 10.

function processNumber(num) {
  return Promise.resolve(num)
    .then((value) => value * 2)
    .then((value) => value + 10);
}
processNumber(5).then((result) => {
  console.log(result);
});
// We start the Promise with the input value 5.

// First .then() doubles it: 5 * 2 = 10.

// Second .then() adds 10: 10 + 10 = 20.

// Final result is shown via .then().
