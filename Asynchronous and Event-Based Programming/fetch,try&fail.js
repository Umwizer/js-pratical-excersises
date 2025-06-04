// ## Fetch, fail, try again

// Write a JavaScript function that
// fetches data from an API and
// retries the request a specified
// number of times if it fails.

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++)
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.warn(`Retrying attempt ${attempt + 1} for ${url}`);
    }
}
fetchWithRetry("https //training.digital skills fdn.org", 3)
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.error("Failed after retries:", error.message));

//

async function fetchDat(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
fetchDat("https:/api/models/login")
  .then((message) => console.log(message))
  .catch((err) => console.error(err));
