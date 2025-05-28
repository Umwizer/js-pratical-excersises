// Create a delay(ms) function that returns a Promise.

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
delay(2000).then(() => {
  console.log("Executed after 2 minutes");
});
