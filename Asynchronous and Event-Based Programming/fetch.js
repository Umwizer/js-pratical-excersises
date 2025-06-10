// Write a function that takes a URL and fetches
//  data from that URL but aborts when the request takes
// more than 10ms

async function fetchWithhTimeout(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    const data = await response.json();
    console.log("Data fetched", data);
  } catch (error) {
    if ((error.name = "AbortError")) {
      console.error("Request took too long aborted!");
    } else {
      console.error(error);
    }
  }
}
fetchWithhTimeout("https://jsonplaceholder.typicode.com/todos/1");

async function fetchWithTimeout(url) {}
