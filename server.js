const express = require("express")

const index = require("./routes/index")
const register = require("./routes/register")
const schedule = require("./routes/schedule")
const speakers = require("./routes/speakers")
const venue = require("./routes/venue")

const app = express()
const PORT = 3000

//setting view engine to ejs
app.set("view engine", "ejs")

//serving static files from the public folder
app.use(express.static("public"))

//configuring routes
app.use("/", index)
app.use("/register", register)
app.use("/schedule", schedule)
app.use("/speakers", speakers)
app.use("/venue", venue)


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})