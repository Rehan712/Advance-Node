const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork();
} else {
  const express = require("express");
  const crypto = require("crypto");
  const app = express();

  console.log(cluster.isMaster);

  //   function doWork(duration) {
  //     const start = Date.now();
  //     while (Date.now() - start < duration) {}
  //   }

  app.get("/", (req, res) => {
    // doWork(5000);
    // crypto.pbkdf2("a", "b", 100000, 512, "sha512");
    res.send("He there!");
  });

  app.listen(3000);
}
