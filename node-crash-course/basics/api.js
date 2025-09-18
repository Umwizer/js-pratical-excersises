//http server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

//readfile
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});

//random number generator api
const express = require("express");
const app = express();

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.json({ number: randomNum });
});

app.listen(3000, () => {
  console.log("Random API running on http://localhost:3000/random");
});
