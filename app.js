const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const serverIp = "127.0.0.1";
const portNumber = "8080";

// cors fix
app.use(cors());

app.use(bodyParser.json());

//cors fix alternative approach

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

//feed routes
app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://trk:HhEIHBSxFAbwZzmB@cluster0-ledam.mongodb.net/blog?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    //creating server
    app.listen(portNumber, serverIp);
  })
  .then(result => {
    console.log(`Server listen ${serverIp}:${portNumber}`);
  })
  .catch(err => {
    console.log(err);
  });
