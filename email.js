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

  let response;

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
      response = "error";
    } else {
      console.log(info.response);
      response = "success";
    }
  });

  return response;
}

module.exports = sendMail;
