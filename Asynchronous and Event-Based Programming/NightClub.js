// 1. Write a JavaScript function that changes the background
// color of the body (HTML tag) every 100ms.

function changesBackgroundColor() {
  setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 100);
}
// 2. Please make it so that it brings a random color each time.
function getRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 18378392)
      .toString(16)
      .padStart(6, "0")
  );
}
getRandomColor();
