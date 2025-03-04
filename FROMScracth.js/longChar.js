// Write a function that filters words longer than 5 characters.
function RemoveLongWords(words){
    return words.filter(word => word.length <=5)
}
const wordList = ["apple", "banana", "cat", "elephant", "dog", "grape"];
console.log(RemoveLongWords(wordList));