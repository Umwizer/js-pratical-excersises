// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
function displayNumbers() {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log(count++);
  }, 2000);
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped displaying");
  }, 5000);
}
displayNumbers();
