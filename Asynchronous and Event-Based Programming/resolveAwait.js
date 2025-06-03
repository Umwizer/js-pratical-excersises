// ### Question 13 (Intermediate)

// What's wrong with this async function? How would you fix it?

// ```jsx
// async function fetchUserData() {
//     const response = fetch('/api/user');
//     const data = response.json();
//     return data;
// }

// ```

async function fetchUserData() {
  const response = await fetch("api/user");
  const data = await response.json();
  return data;
}
