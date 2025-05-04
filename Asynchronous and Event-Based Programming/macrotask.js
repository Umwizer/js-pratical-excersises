console.log("start");
setTimeout(() => console.log("setTimeout_1"), 0);
setTimeout(() => console.log("setTimeout_2"));

process.nextTick(() => {
  console.log("process nextTick_1");
});
process.nextTick(() => {
  console.log("Process nextTick_2");
});
process.nextTick(() => {
  console.log("Process nextTick_3");
});

process.nextTick(() => {
  console.log("process.nextTick_4");
});
Promise.resolve().then(() => console.log("Promise.resolve_3"));
setTimeout(() => console.log("setTimeout_3"), 0);
console.log("End");
