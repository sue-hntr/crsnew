const express = require("express");
const router = express.Router();
// Load User model
const Appointment = require("../../models/Appointment");

// @route POST api/appointments/appointmentmake
router.post("/appointmentmake", (req, res) => {
    // grab user info from this.props.auth

    const newAppointment = new Appointment({
        id: req.body.id,
        userID: req.body.userID,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        timeforappt: req.body.timeforappt,
        chosenReason: req.body.chosenReason,
        chosenContact: req.body.chosenContact
        });

        newAppointment
              .save(req.body)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          }
        );

router.get("/appointmentdetails", (req, res) =>{
    Appointment.findById({})
});


  module.exports = router;