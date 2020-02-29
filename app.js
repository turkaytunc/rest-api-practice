const express = require("express");
const app = express();

const feedRoutes = require("./routes/feed");

const serverIp = "127.0.0.1";
const portNumber = "8080";

app.use("/feed", feedRoutes);

app.listen(portNumber, serverIp, () => {
  console.log(`Server listen ${serverIp}:${portNumber}`);
});
