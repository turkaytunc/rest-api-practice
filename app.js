const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");
const cors = require("cors");

const app = express();
const serverIp = "127.0.0.1";
const portNumber = "8080";

// cors fix
app.use(cors());

//cors fix alternative approach

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(bodyParser.json());

app.use("/feed", feedRoutes);

app.listen(portNumber, serverIp, () => {
  console.log(`Server listen ${serverIp}:${portNumber}`);
});
