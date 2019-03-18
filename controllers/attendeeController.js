const db = require('../models');


module.exports = {
    //this function works
    attendOneEvent: function (req, res) {
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
    },
    //this function will be used to allow hosts to confirm attendees to their party
    confirmAttendee: function (req, res) {
        db.Attendee.findOne({
            user: req.session.user._id,
            event: req.params.event,
            host: true
        })
            .then(dbModel => {
                console.log(dbModel)
                if (dbModel) {
                    console.log(`we're inside .then to confirm our attendee (add them to the guest list) ${dbModel}`)
                    return db.Attendee.findOneAndUpdate({
                        _id: req.body.AttendeeId
                    }, { $set: { confirmed: true } }, { new: true })
                        .then(AttendeeConfirmed => res.json(AttendeeConfirmed))
                }
                else {
                    res.json("was not able to confirm guest")
                }
            })
            .catch(err => res.status(422).json(err));

    }
};
