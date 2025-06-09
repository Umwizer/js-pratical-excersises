// mplement a timeout for an asynchronous fetch request.
// If the request takes longer than(5 milliseconds), it should be aborted.

// https://jsonplaceholder.typicode.com/users

async function fetchWithTimeout(urls, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);
  try {
    const response = await fetch(urls, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`https request status is incorrect ${urls}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error(`Fetch request time error`);
    } else {
      console.log(error.message);
    }
    throw error;
  }
}
fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 50)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
