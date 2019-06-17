
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    userID: {type:String},
    firstname: { 
        type: String,
        required: true,
        trim: true
    },
    lastname:{ type: String },
    phone:{ type: String },
    email: { type: String },
    address1: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    
    timeforappt: { type: String },
    chosenReason: {type: String} ,
    chosenContact: {type: String},
});

module.exports = Appointment = mongoose.model("appointments", AppointmentSchema);

    