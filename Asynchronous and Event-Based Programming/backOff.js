// Implement a function that retries a failed async operation up to 3 times with exponential backoff.

// ```jsx
// // Your implementation here
// async function retryOperation(operation, maxRetries = 3) {
//     // Complete this function
// }

// ```

async function retryOperation(operation, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) throw error;
    }
    const delay = Math.pow(2, attempt) * 100;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
