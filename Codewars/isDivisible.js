// Create a function that checks if a number n is divisible by 
// two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n,x,y){
if(n % x === 0  && n % y === 0){
return true
}
else{
    return false;
}
}
console.log(isDivisible(12,3,4))
console.log(isDivisible(23,21,32))