const express = require("express");
const Attendee = require("../models/register.model");
const app = express.Router();
const bodyParser = require("body-parser");
const sendMail = require("../email");

//middleware for parsing json objects
app.use(bodyParser.json());
//this does the same for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.
app.use(bodyParser.urlencoded({ extended: true }));

//call for the main register page
app.get("/", (req, res) => {
  res.render("register", {
    message: null,
  });
});

//called after register form is submitted
app.post("/", async (req, res) => {
  try {
    //creating an objet from Attendee model using the request body
    const newAttendee = new Attendee(req.body);
    newAttendee.totalCost = req.body.quantity * 1500;

    //inserting into mongodb
    newAttendee.save();

    //setting node mailer options
    const mailOptions = {
      from: `Design Conference <${process.env.GMAIL_USER}>`,
      to: newAttendee.email,
      subject: "Digital Ticket: Design Conference LIVE",
      html: `<b>Hey ${newAttendee.name}, you've booked your spot to Design Conference LIVE at Muson Centre!</b>
            <br/>
            <p>This is your order confirmation for Design Conference LIVE. Please see more details below.</p>
            <br/>
            <b>Your Pass</b>
            <br/>
            <p>Design Conference LIVE</p>
            <p>Name: ${newAttendee.name} </p>
            <p>Ticket count: ${newAttendee.quantity}</p>
            <p>Amount: ${newAttendee.totalCost}</p>
            <p>Location: Muson Centre, Ikoyi.</p>
            <p>Date: October 22 - 24th, 2022</p>
            <br/>
            <p>Please present this digital ticket when you arrive at the venue. Enjoy the conference!</p>`,
    };

    let response = await sendMail(mailOptions);

    if (response) {
      res.render("register", {
        message: "Success! Please check your mail for your digital ticket.",
      });
    } else {
      res.render("register", {
        message:
          "Oops! An error ocurred while trying to process your digital ticket. Please contact support.",
      });
    }
  } catch (error) {
    res.render("register", {
      message: "Oops! An error ocurred. Please try again...",
    });
  }
});

module.exports = app;
