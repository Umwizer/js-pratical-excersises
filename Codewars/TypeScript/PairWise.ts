// // Total Pairwise Absolute Difference
// The Disparity of Numeria
// In the Kingdom of Numeria, every citizen is known by a number. King Numerus, always fascinated by numbers, wanted to measure the “disparity” among his subjects. He defined it as the sum of absolute differences between every pair of citizens' numbers.

// At first, his advisors attempted a slow, pair-by-pair approach, but it took far too long. Then, the brilliant mathematician Arithmo found a hidden pattern that allowed him to compute the total disparity much more efficiently.

// Can you uncover Arithmo’s secret and calculate the total disparity in an optimal way?

// Your task is to write a function that takes a list of citizen numbers and returns the sum of all absolute differences between every pair of numbers.

// Good luck discovering the secret to Numeria’s harmony!

export function totalPairwiseAbsoluteDifference(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i] * (2 * i - (n - 1));
  }
  return total;
}
