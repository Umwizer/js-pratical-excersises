// The factorial function is defined as follows:

// 0! = 1
// n! = 1 * 2 * 3 * 4 * ... * n-2 * n-1 * n
// Usually, the factorials of large numbers will have trailing zeroes. Your task is to create a function which returns the number of trailing zeroes of num! in a given base.

// Here's two examples to get you started:

// (num = 15, base = 10) => 3
// # 15! = 1307674368000, which has 3 trailing 0's

// (num = 7, base = 2) => 4
// # 7! = 5040 = 0b1001110110000, which has 4 trailing 0's
// Your code should be able to handle some very large numbers.

// Note:

// num >= 0
// base >= 2
// HINT: Should you not make any headway after trying a long time, you should try this kata first.
function trailingZeros(num, base) {
    // Helper function to perform prime factorization of a number
    function primeFactorize(n) {
      const factors = {};
      let divisor = 2n; // Use BigInt for large numbers
  
      // Find factors of 2 first
      while (n % divisor === 0n) {
        factors[divisor] = (factors[divisor] || 0n) + 1n;
        n = n / divisor;
      }
      divisor = 3n;
  
      // Find odd factors up to square root of n
      while (divisor * divisor <= n) {
        while (n % divisor === 0n) {
          factors[divisor] = (factors[divisor] || 0n) + 1n;
          n = n / divisor;
        }
        divisor += 2n;
      }
  
      // If n is prime and greater than 2, add it to the factors
      if (n > 1n) {
        factors[n] = (factors[n] || 0n) + 1n;
      }
  
      return factors;
    }
  
    // Helper function to count multiples of a prime in factorial
    function countMultiples(n, prime) {
      let count = 0n;
      let power = prime;
  
      while (n >= power) {
        count += n / power;
        power *= prime;
      }
  
      return count;
    }
  
    // Convert num and base to BigInt
    num = BigInt(num);
    base = BigInt(base);
  
    // Step 1: Prime factorize the base
    const primeFactors = primeFactorize(base);
  
    // Step 2: Calculate trailing zeroes for each prime factor
    let minZeroes = null;
    for (const [prime, power] of Object.entries(primeFactors)) {
      const primeBigInt = BigInt(prime);
      const totalMultiples = countMultiples(num, primeBigInt);
      const trailingZeroes = totalMultiples / BigInt(power);
  
      // Find the minimum
      if (minZeroes === null || trailingZeroes < minZeroes) {
        minZeroes = trailingZeroes;
      }
    }
  
    return minZeroes;
  }
  
  // Example Usage:
  console.log(trailingZeros(15, 10)); // Output: 3n
  console.log(trailingZeros(7, 2));   // Output: 4n
  