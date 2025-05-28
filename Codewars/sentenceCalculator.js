// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string
function lettersToNumbers(s) {
  let total = 0;

  for (let char of s) {
    if (char >= "a" && char <= "z") {
      // Lowercase: a = 1, ..., z = 26
      total += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else if (char >= "A" && char <= "Z") {
      // Uppercase: A = 2, B = 4, ..., Z = 52
      total += (char.charCodeAt(0) - "A".charCodeAt(0) + 1) * 2;
    } else if (char >= "0" && char <= "9") {
      // Digits: numeric value
      total += parseInt(char);
    }
    // Other characters: 0 (ignored)
  }

  return total;
}
