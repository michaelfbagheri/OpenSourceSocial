const db = require('../models');


module.exports = {
    findAll: function (req, res) {
        db.Review.find({
            event: req.query.eventId
        })
            .populate('user', {
                _id: true,
                firstName: true,
                lastName: true,
                userName: true,
                imageurl: true
            })
            .sort({ postdate: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Review.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        const newReview = req.body;
        newReview.user = req.session.user._id;
        console.log(req.session.user._id)
        db.Attendee.findOne({
            user: newReview.user,
            event: newReview.event,
            confirmed: true,
            eventStatus: "complete"
        }).then(dbModel => {
            console.log(dbModel)
            if (dbModel) {
                return db.Review.create(newReview)
                    .then(reviewCreated => res.json(reviewCreated))
            }
            else {
                res.json("you did not attend and can't rate/comment on this event")
            }
        })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Review.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Review.findOneAndDelete({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
