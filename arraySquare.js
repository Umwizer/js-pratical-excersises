function oddSq(arr1){
return arr1.filter(num => num % 2 !==0).map(num => num * num)
}
const numbers = [1,2,3,4,5]
console.log(oddSq(numbers));