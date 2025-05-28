// Write a function that simulates fetching
//  user data using setTimeout

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        const userData = {
          id: userId,
          name: "Umwizerwa",
          email: "ruthumwizerwa@gmail.com",
        };
        resolve(userData);
      } else {
        reject(new Error("Failed to fetch user data."));
      }
    }, Math.random() * 2000);
  });
}
fetchUserData(1)
  .then((data) => console.log("User:", data))
  .catch((err) => console.log("Error:", err.message));
