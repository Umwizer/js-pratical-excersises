let Learning = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});
Learning.then((message) => console.log(message)).catch((error) => {
  console.error(error);
});
