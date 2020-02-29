const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");
const cors = require("cors");

const app = express();
const serverIp = "127.0.0.1";
const portNumber = "8080";

app.use(cors());
app.use(bodyParser.json());

app.use("/feed", feedRoutes);

app.listen(portNumber, serverIp, () => {
  console.log(`Server listen ${serverIp}:${portNumber}`);
});
