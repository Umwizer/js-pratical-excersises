// Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down),
//  these numbers remain the same. To clarify, if we write them down on a paper and
//  turn the paper upside down, the numbers will be the same. Try it and see! Some numbers
//   such as 2 or 5 don't yield numbers when rotated.
// Given a range, return the count of upside down numbers within that range.
// For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.
// More examples in the test cases.
// Good luck!
// If you like this Kata, please try
// Simple Prime Streaming
// Life without primes

// Approach
// 1. Numbers which are valid when rotated 180:
// 0=>0
// 1=>1
// 6=>9
// 8=>8
// 9=>6
// 2. Loop through each number form x to y-1

function solve(x, y) {
  const validDigits = ["0", "1", "6", "8", "9"];
  const rotateMap = { 0: "0", 1: "1", 6: "9", 8: "8", 9: "6" };
  let count = 0;

  for (let i = x; i < y; i++) {
    const str = i.toString();
    // Check if all digits are valid
    if ([...str].every((d) => validDigits.includes(d))) {
      // Rotate the number by reversing and mapping
      const rotated = [...str]
        .reverse()
        .map((d) => rotateMap[d])
        .join("");
      if (rotated === str) {
        count++;
      }
    }
  }

  return count;
}
