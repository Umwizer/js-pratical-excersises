// Regular Function (this depends on how it's called)
const obj = {
    name: "Ruth",
    greet: function () {
      console.log(this.name);
    },
  };
  
  obj.greet(); // "Ruth" (this refers to `obj`)
//   let's see what happens when we extract the function:

const sayHello = obj.greet; // Assigning the function to a new variable
sayHello(); // undefined (or error in strict mode)

// Arrow Function (this is inherited from the surrounding scope)
const obj2 = {
    name: "Ruth",
    greet: () => {
      console.log(this.name);
    },
  };
  
  obj2.greet(); // undefined
  
//   When Arrow Functions Shine
// One of the best use cases for arrow functions is inside setTimeout or when dealing with callbacks:

javascript
Copy
Edit
const obj3 = {
  name: "Ruth",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj3.greet(); // "Ruth" (after 1 second)
// 🔹 Here, the arrow function inherits this from greet(), which means this still refers to obj3.
// 🔹 If we had used a regular function inside setTimeout, this would refer to window, breaking our code.