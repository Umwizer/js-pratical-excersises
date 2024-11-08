// he copyWithin() method copies array elements to another position in an array:
// array.copyWithin(target, start, end)

let array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3);
console.log(array); 

// With start and end

array.copyWithin(1, 3, 5);
console.log(array); 

//Using Negative Indices:

array.copyWithin(-2,0,2)
console.log(array)
