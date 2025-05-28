// Convert a callback-based function
//  into a Promise-based function.

function convertToPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Recieved");
    }, 1000);
  });
}
convertToPromise().then((data) => {
  console.log(data);
});
// The old function expected
//  a callback function like getData(cb).

// In the new version, we return a Promise and call resolve(...)
// instead of using a callback.

// The .then() handles the response.
