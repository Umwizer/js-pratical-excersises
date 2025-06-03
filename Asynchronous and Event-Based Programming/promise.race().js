const fastServer = fetch("/api/server1");
const backupServer = fetch("/api/server2");

Promise.race([fastServer, backupServer])
  .then((response) => response.json())
  .then((data) => console.log("first data:", data))
  .catch((error) => console.error("Error:", error));
