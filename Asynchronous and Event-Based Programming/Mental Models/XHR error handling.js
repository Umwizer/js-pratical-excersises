//Create an XMLHttpRequest request to
// https://jsonplaceholder.typicode.com/posts/1
//  and
//  handle both success and error cases.
//const XMLHttpRequest = require("xhr2");

new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "");
  xhr.onload = (resolve) => {
    if (xhr.response >= 200 && xhr.status <= 300) {
      resolve("success", xhr.responseText);
    }
  };
  xhr.onerror = (reject) => {
    reject("Network error occured");
  };
  xhr.send();
});
