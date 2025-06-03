// Analyze this complex code and explain what happens step by step:

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => {
  console.log("Promise 3");
});

console.log("End");
//solution
// start,end,promise1,promise2,promise 3,timeout 1,timeout 2
