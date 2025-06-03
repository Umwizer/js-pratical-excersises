// Predict the output and explain the execution order:
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");
//solution
//3,4,1,4,2

// follow up quetion

async function test() {
  console.log("1");
  await Promise.resolve().then(() => console.log("I am resolved"));
  console.log("2");
}

console.log("3");
test();
console.log("4");
//solution
//3,1,4,Im resolved,2
