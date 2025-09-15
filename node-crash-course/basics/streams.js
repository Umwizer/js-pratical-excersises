const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log("---- New CHUNK ----");
  console.log(chunk);
  writeStream.write("\nNewChck\n");
  writeStream.write(chunk);
  //pipping
  readStream.pipe(writeStream);
});
