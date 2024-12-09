// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increase frequency
function solve (arr){
    return arr.sort ((a,b)=>{ 
      
        var  countA = arr.filter(x=> x ===a).length
        var countB = arr.filter(x=> x ===b).length
    if(countA != countB){
        return countB - countA;
    }
    return a-b
})}
console.log(solve([2,34,21]))
console.log(solve([3, 3, 1, 2, 2,3, 1,5, 1, 2, 3]));