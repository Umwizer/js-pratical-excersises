// Write a function that filters words longer than 5 characters.

function filterLongWords(arr){
    return arr.filter(word => word.length > 5)
}

const wordList = ['hello','world','Javascript','amazing']
const filteredWords = filterLongWords(wordList)
console.log(filterLongWords(filteredWords))