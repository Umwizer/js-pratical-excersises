setTimeout(() => {
  console.log("Set Timeout 1");
}, 0);
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 0);
}).then(() => {
  console.log("Promise");
});
setTimeout(() => {
  console.log("setTimeout 3");
}, 0);

// the Promise callback won't be put into the Promise in
// the first check because the resolve function isn't called in this turn. This function
//  isn't called because we may see that it is put inside of the setTimeout callback.
