// Create a promise that rejects after 2 seconds. Handle it with .catch()
const delayedError = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(reject(newError("Something went Wrong ")));
  });
});

delayedError
  .then((data) => console.log(data))
  .catch((error) => console.error("Promise error:", error));
