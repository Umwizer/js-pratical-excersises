// Numbers are fun! Write a generator function fibonacciGenerator(limit) 
// that yields Fibonacci numbers up to a specified limit. Remember,
//  the first two Fibonacci numbers are 0 and 1, and each subsequent number is the sum of the previous two.

const fibonacciGenerator = (limit) =>{
    let sequence = [0,1];
    for (let i=2; sequence[i-1] + sequence[i-2] <=limit; i++){
sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
}
for (let num of fibonacciGenerator(50)){
    console.log(num)
}