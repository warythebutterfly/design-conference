const express = require("express");
const Attendee = require("../models/register.model");
const app = express.Router();

//call for the main schedule page
app.get("/", async (req, res) => {
  try {
    attendees = await Attendee.find().sort({ "Name": 1 })
    res.render("attendees", {
      attendees: attendees
    });
  } catch (error) {
    console.log(error)
  }
});

module.exports = app;