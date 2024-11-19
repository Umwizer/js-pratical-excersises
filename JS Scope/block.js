// Block Scope
// Block scope allows us to create variables and functions only available inside a code block.
// A code block is any time you use curly braces, for example:
// if (true) {
// this is a code block 
// } else {
// this is also a code block
// } 
function blockI(){
let a=8;
if(a>1){
    return true
}
else{
    return false
}
}
console.log(blockI())