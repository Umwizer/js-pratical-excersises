// Write a function toUpperCaseArr that converts an array of names to uppercase and adds their length.

function toUpperCaseArr(arr){
    return arr
    .map(name => ({ name: name.toUpperCase(), length: name.length })) // Convert & store length
    .sort((a, b) => a.length - b.length) // Sort by length (ascending)
    .map(item => item.name + item.length); // Convert back to the desired format
}

console.log(toUpperCaseArr(['umwizerwa','ange','ineza']))