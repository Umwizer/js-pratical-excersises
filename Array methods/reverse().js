//mutable reverse
let str = 'umwizerwa'
let reversestr=str.split('').reverse('').join('')
console.log(reversestr)

//non-mutable reverse
let arr = [1,2,3,45,43]
let reversedArr = [...arr].reverse()
console.log(reversedArr)

