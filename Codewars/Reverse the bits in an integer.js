// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

function reverseBits(n){
    const binaryRepresentation = n.toString(2)
    const reversedBinary = binaryRepresentation.split('').reverse().join('')
    return parseInt(reversedBinary, 2)
}

console.log(reverseBits(417)) 