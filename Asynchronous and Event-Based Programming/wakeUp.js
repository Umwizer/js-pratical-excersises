// Create a function called createAlarm that generates
// a wake-up message for a person after a specified time delay.
// This function should accept two parameters: the person's name and the delay time in seconds.
// The function should return a promise that resolves with the wake-up message (e.g. Wake up person)
// but if the delay is less than 2 seconds,
// he promise should be immediately rejected with an error message stating Delay is not sufficient

function createAlarm(name, delayedTime) {
  return new Promise((resolve, reject) => {
    if (delayedTime < 2) {
      reject("Delay is not sufficient");
    } else {
      setTimeout(() => {
        resolve(`Wake Up ${name}`);
      }, delayedTime * 1000);
    }
  });
}
createAlarm("Ruth", 4)
  .then((mesage) => console.log(mesage))
  .catch((error) => console.error(error.mesage));

createAlarm("Ange", 1)
  .then((mesage) => console.log(mesage))
  .catch((error) => console.error(error.mesage));
