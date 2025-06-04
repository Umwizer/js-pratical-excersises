// Write a JavaScript function
// fetchToDo that uses XMLHttpRequest
//  to fetch data from the given URL
//  (https://jsonplaceholder.typicode.com/todos/1).
// The function should handle both successful
// responses and errors (such as network issues or invalid URLs).
// Upon receiving a successful response, it should log the fetched
// data to the console. If there's an error, it should catch the error
//  and log an appropriate message.

function fetchToDo(XMLHttpRequest) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log("Fetched  data", JSON.parse(xhr.responseText));
        resolve(data);
      } else {
        console.error("Error fetching data", xhr.status);
        reject(new Error("Error fetching data", xhr.status));
      }
    };
    xhr.onerror = function () {
      console.error("Network error , Invalid Url");
      reject(new Error("Network error or invalid url"));
    };
    xhr.send();
  });
}
fetchToDo(XMLHttpRequest)
  .then((data) => {
    console.log("Promise with resolve data", data);
  })
  .catch((error) => {
    console.log("Promise rejected", error.message);
  });
