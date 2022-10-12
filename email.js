const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

function sendMail(mailOptions) {
    //creating node mailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(info.response)
        }
    })
}

module.exports = sendMail
