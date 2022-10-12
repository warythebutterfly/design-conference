const express = require("express");
const app = express.Router();

//call for the main index page
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  res.render("index", {
    message: "successful",
  });
});

module.exports = app;
