//Create an XMLHttpRequest request to
// https://jsonplaceholder.typicode.com/posts/1
//  and
//  handle both success and error cases.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Sucess", xhr.responseText);
  } else {
    console.error("Request.failed", xhr.status);
  }
};
xhr.onerror = () => {
  console.log("Network error occured");
};
xhr.send();

// makeXHRRequest("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => console.log("Xml request worked perfectly"))
//   .catch((error) => console.error("Promise error:", error))
//   .finally(() => console.log("Promise finished"));
