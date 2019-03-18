const db = require('../models');


module.exports = {
    //bring back all items objects associated to a party
    //this will include objects created by host, and objects created by attendees 
    findAll: function (req, res) {
        db.Item.find({
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
        db.Item.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //Only Hosts can add/create items to bring
    createOneItemEntryRequesForOneEvent: function (req, res) {
        const newItem = req.body;
        newItem.user = req.session.user._id;
        db.Attendee.findOne({
            user: req.session.user._id,
            event: req.body.event,
            host: true
        })
            .then(dbModel => {
                console.log(dbModel)
                if (dbModel) {
                    console.log(`we're inside .then to create an item instance with ${dbModel}`)
                    return db.Item.create(newItem)
                        .then(itemCreated => res.json(itemCreated))
                }
                else {
                    res.json("only hosts can add items to this list")
                }
            })

            .catch(err => res.status(422).json(err));
    },
    //function allows a user who has RSVP'd to an event to contribute by bringing items that the host has requested
    //
    createOneItemEntryCommitForOneEvent: function (req, res) {
        const newItem = req.body;
        newItem.user = req.session.user._id;
        db.Attendee.findOne({
            user: req.session.user._id,
            event: req.body.event,
        })
            .then(dbModel => {
                console.log(dbModel)
                if (dbModel) {
                    console.log(`we're inside .then to create an item instance with ${dbModel}`)
                    return db.Item.create(newItem)
                        .then(itemCreated => {
                            return db.Item.findOne({
                                _id: itemCreated.contributedTowardsItemReqId
                            })
                                .then(orgItem => {
                                    var newItemQtyReqOutstanding = orgItem.ItemQtyReqOutstanding - newItem.ItemQtyCommited;
                                    return db.Item.findOneAndUpdate({
                                        _id: orgItem._id
                                    }, { $set: { ItemQtyReqOutstanding: newItemQtyReqOutstanding } }, { new: true })
                                        .then(reqItemObjectPostChange => {
                                            var theCompletePicture = {
                                                weUpdated: reqItemObjectPostChange,
                                                weCreated: itemCreated
                                            }
                                            res.json(theCompletePicture)
                                        })
                                })
                        })
                }
                else {
                    res.json("you must RSVP before you can commit to bringing an item")
                }
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Item.findOneAndDelete({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
