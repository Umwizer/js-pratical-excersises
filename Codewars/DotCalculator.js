// Dot Calculator
// You have to write a calculator that receives strings for input.
//  The dots will represent the number in the equation. 
//  There will be dots on one side, an operator, and dots again after the operator. 
//  The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots,
//  as many the equation returns. If the result is 0, 
//  return the empty string. When it comes to subtraction, 
//  the first number will always be greater than or equal to the second number.
function dotCalculator(equation){
    const [left,equation,right] = equation.split(' ');
    const leftCount =left.length;
    const rightCount = right.length;
    let result;
    switch(operator){
        case '+':
            result = leftCount + rightCount;
            break;
        case '-':
            result = leftCount >= rightCount? leftCount - rightCount : 0;
            break;
        case '*':
            result = leftCount * rightCount;
            break;
        case '//':
            result = Math.floor(leftCount / rightCount);
            break;
    }

}