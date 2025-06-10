// Challenge 8: Async Operations in Loops - Common Mistake
// Concept: Async operations in loops
// This is one of the most common mistakes developers make when working with asynchronous JavaScript. The provided code appears to work but has a subtle bug that causes it to return incorrect results. You need to identify why the current approach fails and provide two different working solutions. This challenge tests your understanding of how async operations behave inside loop constructs.
// This code doesn't work as expected. Fix it:
// async function processUsers(userIds) {
//   const results = [];

//   // This doesn't work - why?
//   userIds.forEach(async (id) => {
//     const user = await fetchUser(id);
//     results.push(user);
//   });

//   return results;
// }

// // Fix it to properly wait for all users to be fetched
// // Provide two solutions:
// // 1. Using for...of loop
// // 2. Using Promise.all with map
async function fetchUser(id) {}
