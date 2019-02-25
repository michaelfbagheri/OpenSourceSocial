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
        db.Review.create(newReview)
            .then(dbModel => res.json(dbModel))
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
