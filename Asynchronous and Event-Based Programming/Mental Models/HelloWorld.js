// Write a Promise that
// resolves with "Hello, World"
// after 1 second.
const sayHello = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello,World");
  }, 1000);
});
sayHello.then((mesage) => {
  console.log(mesage);
});
