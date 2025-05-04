Promise.resolve().then(() => {
  console.log("Promise callback1");
  process.nextTick(() => {
    console.log("next callback from the promise 1");
  });
});
Promise.resolve().then(() => {
  console.log("Promise callback2");
});
process.nextTick(() => {
  console.log("nextTick callback1");
});
process.nextTick(() => {
  console.log("nextTick callback2");
});

// 🔄 Execution Order Breakdown
// In Node.js, the event loop processes:

// process.nextTick() queue → highest priority microtasks (Super VIP)

// Promise (or "microtask" queue) → regular microtasks (VIP)

// macrotasks (e.g., setTimeout, setImmediate) → less relevant here

// Step-by-step execution:
// All the then() and nextTick() are scheduled during the initial synchronous phase (top-level code).

// process.nextTick(() => console.log("nextTick callback1"))

// process.nextTick(() => console.log("nextTick callback2"))

// Two .then() callbacks (Promise microtasks) are also scheduled.

// Node.js runs the process.nextTick() queue first:

// nextTick callback1

// nextTick callback2

// Now, it processes Promise microtasks in order:

// First .then():

// Logs: Promise callback1

// Schedules a new process.nextTick() (next callback from the promise 1) — but
// this won’t run until all Promises are done.

// Second .then():

// Logs: Promise callback2

// Now, the Promise queue is empty, so the event loop goes back to check
// if any process.nextTick() callbacks were added during Promise execution:

// next callback from the promise
