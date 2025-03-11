// Write a function called filterPrimeNumbers that filters prime numbers from an array.
//  A prime number is only divisible by 1 and itself.
function filterPrimeNumbers(arr) {
    return arr.filter(num => {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      });
  
  }