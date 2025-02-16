// Write a JavaScript function named isPrime that checks whether a given number is prime. 
// The function should return true if the number is prime and false otherwise.

function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
const number = 29
console.log(`${number} is prime : ${isPrime(number)}`)