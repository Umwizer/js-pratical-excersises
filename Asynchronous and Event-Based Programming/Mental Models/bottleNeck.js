async function fetchData() {
  let user = await getUser();
  let orders = await getOrders(user.id);
  let recommendations = await getRecommendations(user.id);
  console.log(user, orders, recommendations);
}
// The bottleneck here is that getOrders() and
// getRecommendations() are waiting
//  to start until getUser() finishes.
//   If getUser() is slow (for example,
// it’s doing a long I/O operation),
// the whole flow is delayed.

//to solve this if data isn't dependent, you can run them in parallel

async function fetchData() {
  let user = await getUser();

  let [orders, recommendations] = await Promise.all([
    getOrders(user.id),
    getRecommendations(user.id),
  ]);
  console.log(user, orders, recommendations);
}
