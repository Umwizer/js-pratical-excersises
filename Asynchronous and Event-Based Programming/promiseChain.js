// The Promise chain is an awesome feature.
// It can escape us from the callback hell.
// But it’s also a nice trap in asynchronous exercises

Promise.resolve()
  .then(() => {
    console.log("a");
  })
  .then(() => {
    console.log("b");
  });
//the code above is the same as this code:
Promise.resolve().then(() => {
  console.log("a");
  Promise.resolve().then(() => {
    console.log("b");
  });
});

// It means when the Promise is complete and we see have many then functions.
// These functions are executed one by one. We can't put all of them into the queue in the same turn.

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });
Promise.resolve().then(() => {
  console.log("Promise 3");
});
