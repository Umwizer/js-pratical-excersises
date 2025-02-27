// Write a function that takes an array of objects, 
// where each object has a type property. 
// The function should return an object where the keys are the unique type values,
//  and the values are the number of occurrences of that type in the input array.

const countByType = (arr) => {
    // const result = {};
    // for (const {type} of arr){
    //     result[type] = (result[type] || 0)+1;
    // }
    // return result;
    const values = array.map(obj => obj.type)
    return values.find(type => values.indexOf(type) == values.lastIndexOf(type))[0];
}
const items =[
    {type:'fruit'},
    {type:'vegetable'},
    {type:'vegetable'},
    {type:'apple'},
    {type:'apple'},

]
console.log(countByType(items))