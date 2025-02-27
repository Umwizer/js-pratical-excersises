class Parent{
 constructor(name){
    this.name = name;}
    greet(){
        console.log(`heloo ,${this.name}`);
    }}
    class Child extends Parent {
        constructor(name,age) {
        super(name)
        this.age = age;  
        }
        static info(){
            console.log("this class is about child");
        }
    }
    Child.info()
 
