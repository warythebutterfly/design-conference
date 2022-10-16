const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

function sendMail(mailOptions) {
  //creating node mailer transporter

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = sendMail;
