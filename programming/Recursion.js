// Write a JavaScript function named sumToN that uses recursion to calculate the sum of all numbers from 1 to n.
//  The function should take a number n as input and return the sum.

function sumToN(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumToN(n - 1);
    }
}
const n=10;
console.log(`The sum of numbers  from 1 to ${n} is: ${sumToN(n)}`);