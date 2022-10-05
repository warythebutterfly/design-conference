const express = require("express")
const app = express.Router()

//call for the main register page
app.get("/", (req, res) => {
    res.render("register")
})

module.exports = app