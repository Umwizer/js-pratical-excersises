// Imagine you are developing a real-time news application, and
// you need to fetch posts from three different sources to provide users with the latest updates.

// The API endpoints for getting posts are:

// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create
//  a function called getFastPosts that fetches posts from these endpoints
//  simultaneously (concurrently) and only presents data from the source
// that responds the quickest, while ignoring slower or potentially unreliable sources.

// Example of how the function should be used

// // getFastPosts() code here...

// getFastPosts().then((posts) => {
//     console.log(posts)
// })

async function getFastPosts() {
  const urls = [
    "https://dummyjson.com/posts",
    //"https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
  ];
  const fetchedPromise = urls.map((url) =>
    fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`Https request incorrect  ${url}`);
      }
      return response.json();
    })
  );
  try {
    const fastData = await Promise.race(fetchedPromise);
    console.log(fastData);
  } catch (error) {
    console.error(error);
    // return null;
  }
}
getFastPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => console.log(error));
