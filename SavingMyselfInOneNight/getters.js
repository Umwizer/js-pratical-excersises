const Person ={
    firstname:'ange',
    lastname:'Umwizerwa',

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    },
    set fullname(name){
        [this.firstname,this.lastname]=name.split(' ')
    }

};
console.log(Person.fullname)
Person.fullname="ruth umwizerwa"
console.log(Person.fullname)