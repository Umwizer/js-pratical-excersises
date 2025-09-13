//playing with files in Js can't work without Node
//fs:mean file system
const fs = require("fs");

//reading files
//take to argument the first one is string and it's relative path to the file we want to read
//
fs.readFile("./docs/blog1.txt", (error, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
//writing files

//directories

//deleting files
