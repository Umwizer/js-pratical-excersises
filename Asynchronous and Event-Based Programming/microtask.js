Promise.resolve().then(() => {
  console.log("Promise CallBack1");
});
Promise.resolve().then(() => {
  console.log("Promise callback2");
});
process.nextTick(() => {
  console.log("nextTick Callback1");
});
process.nextTick(() => {
  console.log("nextTick Callback2");
});
