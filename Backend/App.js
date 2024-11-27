const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const cors = require("cors");

const App = express();

App.use(cors());

App.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = App;
