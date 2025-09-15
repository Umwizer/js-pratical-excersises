//playing with files in Js can't work without Node
//fs:mean file system
const fs = require("fs");

//reading files
//take to argument the first one is string and it's relative path to the file we want to read
//
fs.readFile("./docs/blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
console.log("last line");
//writing files
fs.writeFile("./docs/blog1.txt", "hello,world", () => {
  console.log("file was written");
});
fs.writeFile("./docs/blog1.txt", "hello,again", () => {
  console.log("file was written");
});
//directories

//deleting files
