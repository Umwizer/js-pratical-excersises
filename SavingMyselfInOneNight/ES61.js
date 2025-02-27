// Write a function that takes an array of objects, 
// where each object has a category property and a value property (which is a number).
//  The function should return a new object where the keys are the categories and 
// the values are the sum of the value properties for that category.

const sumOfCategory = (arr) =>{
const result = {};
for (const {category,value} of arr){
    result[category] = (result[category] || 0) + value
}
return result
}
const array = [
    { category: 'fruit', value: 5 },
    { category: 'fruit', value: 10 },
    { category: 'vegetable', value: 3 },
    { category: 'vegetable', value: 7 },
    { category: 'fruit', value: 8 },
];
const aggregated = aggregatebycategory(array)
console.log(aggregated)