// Promise in JavaScript : is an object that represents the eventual  completion or failure of asynchronous
//operation and it's operating value

// state of promise 
// 1. Pending : The initial state ,operation is still in progress
// 2. Fulfilled : The operation completed successfully and result is available
// 3. Rejected : The operation failed and error reason is available


const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an operation
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful "); 
        } else {
            reject("Operation Failed "); 
        }
    }, 2000); // Simulates a delay of 2 seconds
});
myPromise
    .then(result => console.log(result)) 
    .catch(error => console.error(error)) 
    .finally(() => console.log("Promise settled.")); // Runs regardless


