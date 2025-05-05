async function asyncA() {
  return new Promise((resolve) => {
    resolve();
  });
}
async function asyncB() {
  resolve();
}
function promiseB() {
  return new Promise((resolve) => {
    resolve();
  });
}
