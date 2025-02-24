Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))  // All promises succeed
  .catch(error => console.log("One failed", error));  // Fails if any one fails
