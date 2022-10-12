const express = require("express");
const app = express.Router();

//call for the main schedule page
app.get("/", (req, res) => {
  res.render("schedule");
});

module.exports = app;
