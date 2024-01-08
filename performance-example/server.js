const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // eventloop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(4000);
  res.send(`Beep beep beep ${process.pid}`);
});

console.log("server.js started");
console.log("worker process started...");
app.listen(3000);
// using pm2 for cluster management

/* if (cluster.isMaster) { */
/*   console.log("Master has been started..."); */
/**/
// create workers so mutiple requests can be made without blocking
/* const NUM_WORKERS = os.cpus().length; */
/* console.log("workers", NUM_WORKERS); */
/* for (let i = 0; i < NUM_WORKERS; i++) { */
/*   console.log(""); */
/*   cluster.fork(); */
/* } */
/* cluster.fork(); */
/* cluster.fork(); */
/* } else { */
/*   console.log("Worker process started"); */
/*   app.listen(3000); */
/* } */
