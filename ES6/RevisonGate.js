// let person = { name : "Ruth" , age:20 }
// let {name,age} = person 
// console.log(person)

// speard and rest parameters

let  numbers = [1,2,3]
let newNumbers = [...numbers, 4,5]
function sum(...args) { // Rest operator
   return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(...numbers))

function greet(name = 'Guest'){
    console.log(`hello , ${name}!`)
}
greet('Ruth');
greet()


class Person {
    constructor(name){
        this.name = name;
    }
    greet (){
        console.log(`hello , my name is ${this.name}`)
    }
}
const person1 = new Person("Alice");
person1.greet()