console.log("start");
setTimeout(() => {
  console.log("Macrotask (setimeout)");
}, 0);
Promise.resolve().then(() => {
  console.log("Microtask (Promise)");
});
console.log("end");
