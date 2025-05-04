Promise.resolve().then(() => {
  console.log("Promise callback1");
});
Promise.resolve().then(() => {
  console.log("Promise callback2");
});
process.nextTick(() => {
  console.log("nextTick  callback1");
  process.nextTick(() => {
    console.log("nextTick callback from the callback1");
  });
});
process.nextTick(() => {
  console.log("nextTick callback2");
});
