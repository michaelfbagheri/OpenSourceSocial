const db = require('../models');


module.exports = {
    //this function works
    attendOneEvent: function (req, res) {
        console.log(req.body)
        const newAttendee = req.body;
        newAttendee.user = req.session.user._id;
        db.Attendee.create(newAttendee)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //return all attendees of specified event
    getAllAttendeesOfOneEvent: function (req, res) {
        console.log(`here to get all attendees of ${req.params.event}`)
        db.Attendee.find({
            event: req.params.event
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //delete attendee from a specified event, can only be done by the user who RSVP'd
    deleteAttendeeFromOneEvent: function (req, res) {
        db.Attendee.findOneAndDelete({
            user: req.session.user._id,
            event: req.params.event
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
