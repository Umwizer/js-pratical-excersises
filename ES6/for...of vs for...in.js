// for..of loops : loops through values in array , string ,sets etc
// for..in loops : loops through key in object 


// Caution: for..in also works on arrays
// , but it iterates over indexes instead of values, which is usually not what you want.
const nums = [10, 20, 30];

for (const index in nums) {
  console.log(index, nums[index]); // Output: 0 10, 1 20, 2 30
}
