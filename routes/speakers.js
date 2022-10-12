const express = require("express");
const app = express.Router();

//call for the main speakers page
app.get("/", (req, res) => {
  res.render("speakers");
});

module.exports = app;
