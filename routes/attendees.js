const express = require("express");
const app = express.Router();

//call for the main schedule page
app.get("/", (req, res) => {
  res.render("attendees");
});

module.exports = app;