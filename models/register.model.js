const mongoose = require("mongoose")

const url = "mongodb://0.0.0.0:27017/design-conference"

//connnecting to the db
mongoose.connect(url)

//creating a database schema
const attendeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    quantity: Number,
    comments: String,
    totalCost: Number
})

//creating model from schema
const Attendee = mongoose.model("Attendee", attendeeSchema)

module.exports = Attendee