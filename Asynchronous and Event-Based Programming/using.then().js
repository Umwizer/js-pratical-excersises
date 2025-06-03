//.then(),.catch()
fetch("/api")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function getData() {
  try {
    const response = await fetch("api");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
