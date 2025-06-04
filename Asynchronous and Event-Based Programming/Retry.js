// Write a JavaScript function that fetches data from an API and retries
// the request a specified number of times if it fails.
//  You should log to the console “Retrying….” when retrying the request.

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++)
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      if (attempt === maxRetries) {
        console.error(error);
      } else {
        console.log("Retrying");
      }
    }
}
fetchWithRetry("https://jsonplaceholder.ypicode.com/todos/1");
