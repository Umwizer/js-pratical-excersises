const numbers = [2,12,32,1,3]
const evenNumbers = numbers.filter((num) => num % 2 == 0)
const oddNumbers = numbers.filter((num) => num % 2 !== 0)
console.log(evenNumbers)
console.log(oddNumbers)