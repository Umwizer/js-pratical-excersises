// ✅ Nested callbacks
// Create three functions:

// washHands(callback)

// eatDinner(callback)

// goToSleep()

// Call them in order using nested callbacks (callback hell style).

function washHands(callback) {
  setTimeout(() => {
    console.log("Hands washed");
    callback();
  }, 1000);
}
function eatDinner(callback) {
  setTimeout(() => {
    console.log("Taking dinner");
    callback();
  }, 2000);
}
function goToSleep() {
  setTimeout(() => {
    console.log("Sleeping");
  }, 3000);
}
washHands(() => {
  eatDinner(() => {
    goToSleep();
  });
});
