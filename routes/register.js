const express = require("express");
const app = express.Router();

//call for the main register page
app.get("/", (req, res) => {
  res.render("register", {
    message: null,
  });
});

//called after register form is submitted
app.post("/", (req, res) => {
  res.render("register", {
    message: "Success! Please check your mail for your digital ticket.",
  });
});

module.exports = app;
