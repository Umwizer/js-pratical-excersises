// Write a function that takes an array of objects, 
// where each object has a name (string) and an age (number) property.
//  The function should return a new array containing the names 
// of all people older than 18, transformed to uppercase.
const filterMap =(people) =>
    people.filter(({age}) => age>=18).map(({name}) =>name.toUpperCase())

    const people =[
        {
            name: "John",
            age: 20
        },
        {
            name: "Alice",
            age: 16
        },
        {
            name: "Bob",
            age: 22
        }
    ];
    console.log(filterMap(people));
