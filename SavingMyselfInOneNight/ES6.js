// Write a function that takes an array of objects, where each object has an id and a name property. 
// The function should 
// return a new object where the keys are the id values and the values are the corresponding name values.

const mapObject = (arr) =>{
    let result = {}
    for (const item of arr){
        result[item.id] = item.name
    }
    return result;
}
const identity = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
]
console.log(mapObject(identity))