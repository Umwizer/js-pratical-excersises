// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.



    const binaryToString = binary =>
        binary.replace(/.{8}/g,e=>String.fromCharCode(parseInt(e,2)))

//     . binary.replace(/.{8}/g, ...)
// /.{8}/g is a regular expression that matches every group of 8 characters.

// . means "any character".

// {8} means "exactly 8 times".

// g is the "global" flag, meaning it matches all 8-character chunks in the binary string.

// Example: "0100100001100101011011000110110001101111" gets split into:

// "01001000"

// "01100101"

// "01101100"

// "01101100"

// "01101111"

// 2. e => String.fromCharCode(parseInt(e, 2))
// e is each 8-bit binary string.

// parseInt(e, 2) converts binary to a decimal number.

// Example: parseInt("01001000", 2) → 72

// String.fromCharCode(...) converts a character code to its act