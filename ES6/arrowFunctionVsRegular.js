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
  