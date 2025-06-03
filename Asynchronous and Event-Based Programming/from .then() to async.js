//convert this promise chain to async/await
function processData() {
  return fetchUser()
    .then((user) => fetchUserPosts(user.id))
    .then((posts) => posts.filter((post) => post.published))
    .catch((error) => console.error("Error:", error));
}
//solution
async function processData() {
  try {
    const user = await fetchUser();
    const posts = await fetchUserPosts(user.id);
    return posts.filter((post) => post.published);
  } catch (error) {
    console.error(error);
  }
}
