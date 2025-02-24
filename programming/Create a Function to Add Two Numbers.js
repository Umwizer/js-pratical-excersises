// Write a JavaScript function named add that takes two numbers as
//  parameters and returns their sum. The function should display a prompt asking the user to input two numbers, 
// and then return and display the sum of those two numbers

function add(a,b){
    return a+b
}
const num1 = parseFloat(prompt("Enter the first numer"))
const num2 = parseFloat(prompt("Enter the second numer"))

const sum = add(num1,num2)
 console.log("The sum of " + num1 + " and " + num2 + " is " + sum)

// Test the function with the following inputs: add(3, 5) and add(10, 20)