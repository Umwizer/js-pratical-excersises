// Debug this code. Why might it not work as expected?
async function fetchMultiple() {
  const urls = ["url1", "url2", "url3"];
  const results = [];

  for (let url of urls) {
    results.push(await fetch(url));
  }

  return results;
}
//solution
async function fetchMultiple() {
  const urls = ["url1", "url2", "url3"];
  const results = await Promise.all(urls.map((url) => fetch(url)));
  return results;
}
