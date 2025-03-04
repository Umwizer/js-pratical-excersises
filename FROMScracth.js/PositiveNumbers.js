// Create a function that filters out negative numbers from an array.
function  positiveNumber(arr){
    return arr.filter(num=>num>0)
}
const numbers = [1,-1,-3,-4 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]
console.log(positiveNumber(numbers))