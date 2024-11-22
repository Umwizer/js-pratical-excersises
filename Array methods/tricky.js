// Instructions
// Output
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
function reverseWords(str) {
  
    let res = str.split(" ").map(a => a.split("").reverse().join("")).join(" ");
     
      return res;
    }