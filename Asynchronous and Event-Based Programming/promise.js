// function getData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: 'John' };
//         callback(null, data);
//     }, 1000);
// }

async function getData() {
  try {
    const data = await dataPromised();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function getData() {
  setTimeout(() => {
    const data = { id: 1, name: "Ruth" };
    resolved(data);
  }, 1000);
}
