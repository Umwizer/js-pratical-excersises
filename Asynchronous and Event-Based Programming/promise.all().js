const getUser = fetch("api/user");
const getPosts = fetch("api/posts");
const getComments = fetch("/api/comments");

Promise.all([getUser, getPosts, getComments])
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then(([user, posts, comments]) => {
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("One request failed", error);
  });
