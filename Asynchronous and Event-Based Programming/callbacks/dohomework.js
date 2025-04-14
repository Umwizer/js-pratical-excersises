// ✅ Write a function doHomework(subject, callback)
// // That prints: "Starting homework..." → waits 2 sec →
// then calls the callback that logs "Finished [subject] homework".

function doHomework(subject, callback) {
  console.log("Starting homework...");
  setTimeout(() => {
    callback(subject);
  }, 2000);
}
doHomework("Biology", (subject) => {
  console.log(`Finished ${subject} homework`);
});
