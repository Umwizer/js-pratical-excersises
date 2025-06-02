// Create a promise that rejects after 2 seconds. Handle it with .catch()
const delayedError = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Worked Perfectly");
  }, 2000);
});

delayedError
  .then((data) => console.log(data))
  .catch((error) => console.error("Promise error:", error))
  .finally(() => console.log("Operation Completed"));
