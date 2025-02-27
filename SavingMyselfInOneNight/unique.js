// Write a function that takes a nested array of numbers and returns a new array that is flattened 
// (one level deep) and contains only the unique numbers, in ascending order.
const uniqueArray = (nestedArray) => {
    const flatenn = nestedArray.flat(1)
    const uniqueValues =[...new Set(flatenn)]
    return uniqueValues.sort ((a,b)=>(a-b))
}
const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
console.log(uniqueArray(nestedArray))