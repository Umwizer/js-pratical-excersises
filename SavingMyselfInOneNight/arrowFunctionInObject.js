const user  ={
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    greet(){
  return `hello , ${this.name}`
    }
    }
    console.log(user.greet());