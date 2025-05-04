new Promise((resolve) => {
  console.log("Hit");
  resolve();
}).then(() => {
  console.log("Promise 1");
});
Promise.resolve().then(() => {});
