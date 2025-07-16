// Instructions
// Output
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index, arr) => {
      let placeValue = Math.pow(10, arr.length - index - 1);
      return digit !== "0" ? digit * placeValue : null;
    })
    .filter(Boolean)
    .join(" + ");
}
console.log(expandedForm(12)); // "10 + 2"
console.log(expandedForm(45)); // "40 + 5"
console.log(expandedForm(70304)); // "70000 + 300 + 4"
