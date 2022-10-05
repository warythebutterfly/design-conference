const express = require("express")
const app = express.Router()

//call for the main index page
app.get("/", (req, res) => {
    res.render("index")
})

module.exports = app