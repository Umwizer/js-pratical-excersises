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
    clearImmediate(timeoutId);
    if (!response.ok) {
      throw new Error(`https request error,${response}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name == "Abort Error") {
      console.log("Fetch error");
    } else {
      console.log(error.message);
    }
    throw error;
  }
}
fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 5)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
