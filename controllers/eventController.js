const db = require('../models');


module.exports = {
    findAllEventsByHost: function (req, res) {
        db.Event.find({
            user: req.session.user._id
        })
            // .populate('user', {
            //     _id: true,
            //     firstName: true,
            //     lastName: true,
            //     userName: true,
            //     imageurl: true
            // })
            .sort({ postdate: -1 })
            .then(dbModel => {
                dbModel.map(model => {
                    console.log(model)
                })
                res.json(dbModel)

            })
            .catch(err => res.status(422).json(err));
    },
    findOneEventById: function (req, res) {
        db.Event.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //CreateOneEvent also automatically creates the host as an attendee in the attendee table
    createOneEvent: function (req, res) {
        const newEvent = req.body;
        newEvent.user = req.session.user._id;
        db.Event.create(newEvent)
            .then(dbModel => {
                return db.Attendee.create({
                    host: true,
                    user: dbModel.user,
                    event: dbModel._id
                })
                    .then(dbAttendee => res.json(dbAttendee))
            })
            .catch(err => res.status(422).json(err));
    },
    updateOneEvent: function (req, res) {
        db.Event.findOneAndUpdate({
            _id: req.params.eventId,
            user: req.session.user._id
        }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //delete an event record (Only Host can access this function), and modify eventStatus on all Attendees on this event to show as cancelled
    remove: function (req, res) {
        db.Event.findOneAndDelete({
            _id: req.params.eventId,
            user: req.session.user._id
        })
            .then(dbModel => {
                console.log(dbModel._id);
                return db.Attendee.updateMany({
                    event: dbModel._id
                }, { $set: { eventStatus: "cancelled" } })
                    .then(allAttendeesModified => res.json(allAttendeesModified))
            })
            .catch(err => res.status(422).json(err));
    }
};
