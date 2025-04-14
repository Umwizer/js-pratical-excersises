// Numbers are fun! Write a generator function
// fibonacciGenerator(limit) that yields Fibonacci
// umbers up to a specified limit. Remember, the first two
// Fibonacci numbers are 0 and 1, and each subsequent number is the sum of the previous two.

function fibonacciUpTo(limit) {
  let a = 0;
  let b = 1;

  while (a <= limit) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacciUpTo(50);
