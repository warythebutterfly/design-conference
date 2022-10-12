const express = require("express");
const app = express.Router();

//call for the main venue page
app.get("/", (req, res) => {
  res.render("venue");
});

module.exports = app;
