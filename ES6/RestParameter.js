// // // Rest Parameter (...) vs Spread Operator (...)
// // - **Spread (`...`)** expands values **out**
// // - **Rest (`...`)** collects values **in**
// The rest parameter is used in function arguments to collect multiple values into an array.

// The rest parameter is used in function arguments to collect multiple values into an array.

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

function sum1(...number){
    return numbers.reduce((total,num)=>total+num)
}
console.log(1,2,3,4)