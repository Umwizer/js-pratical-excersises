// Write a JavaScript program that converts this callback-based function to a promise-based function.

// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Data fetched successfully!";
//       callback(null, data);
//     }, 1000);
//   }

//   fetchData((error, data) => {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log(data);
//     }
//   });

async function fetchD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "data successfully";
      if (error) {
        reject(error);
      }
      resolve(data);
    }, 1000);
  });
}
fetchD()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
