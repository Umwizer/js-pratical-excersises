// When the variable name matches the object key, we can omit the key-value pair.

 const names ="ruth"
 const age ="22";
 // BEFORE ES6
 const person1 = { names:names, age:age }
//After ES6 
const person ={names,age }
console.log(person)
console.log(person1)
