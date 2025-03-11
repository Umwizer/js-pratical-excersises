// You are working as a software engineer in a financial firm, and your team is developing a system to display large monetary values in a readable format. To improve clarity for accountants and financial analysts, the company has decided to use numeric separators (_) in both integer and decimal parts of the number.

// Your task is to create a function that takes a number as input and returns a formatted version using _ as a separator for both the integer and decimal parts.

// Task: Write a function numberFormater(n) that takes a number n as input and returns a string where:

// Thousands are separated using _ in the integer part.

// Every 3 digits in the decimal part are also separated using _.
// The _ separator should not appear at the beginning or end of the number.
// If there is no decimal part, format only the integer part.
// The number is provided as a string
// If the number is less than 1000 and has no decimal, return it as is (e.g., 987 → "987").
// numberFormater('1234567')  
// // Output: "1_234_567"

// numberFormater('9876543210.56789')  
// // Output: "9_876_543_210.567_89"

// numberFormater('1000')  
// // Output: "1_000"

// numberFormater('123.456789')  
// // Output: "123.456_789"

// numberFormater('567890123.123456789')  
// // Output: "567_890_123.123_456_789"

// numberFormater('999.99')  
// // Output: "999.99"

// numberFormater('0.123456')  
// // Output: "0.123_456"
const numberFormater = (n) => {
    let [intPart, decPart] = n.split('.');

    intPart = intPart
        .split("")
        .reverse()
        .map((digit, index) => (index % 3 === 0 && index !== 0 ? digit + "_" : digit))
        .reverse()
        .join("");

    if (decPart) {
        decPart = decPart
            .split("")
            .map((digit, index) => ((index + 1) % 3 === 0 && index !== decPart.length - 1 ? digit + "_" : digit))
            .join("");
    }

    return decPart ? `${intPart}.${decPart}` : intPart;
};
