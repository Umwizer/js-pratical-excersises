// You own a great car website that helps people make decisions about buying the best new car for them. You decide that if you had a calculator on the website which lets people know their car's value after depreciation in a couple of years, would be a great idea!

// Write a function that takes the car's value when new (p) and return its value to 2 decimal places in the nth year (n), where n is always greater than 0.

// Yearly depreciation:

// Year 1 = 20%

// Year 2 = 20%

// Year 3+ = 10% per year (ie. after 3 years the cars value depreciates 10% every year)

// Return your answer as a string with 2 decimal places.
function car(p, n) {
  let value = p;

  for (let year = 1; year <= n; year++) {
    if (year === 1 || year === 2) {
      value *= 0.8;
    } else {
      value *= 0.9;
    }
  }

  return value.toFixed(2);
}
