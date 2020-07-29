const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

app.get("/posts", (req, res) => {
  res.send("we are on posts");
});

//
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});
//How to we start listening to the server
app.listen(3000);
