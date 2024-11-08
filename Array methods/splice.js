 // The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
const fruits = ['banana','orange','apple','mango']
fruits.splice(2,0,'Lemon','kiwi')
console.log(fruits)