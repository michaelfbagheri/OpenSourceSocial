const router = require('express').Router();
const eventController = require('../../controllers/eventController');

//Create an event 
router.route('/')
    .get(eventController.findAllEvents)
    .post(eventController.createOneEvent)



router.route('/myevents/:eventId')
    //get all events hosted by current user by hitting (http://localhost:3001/api/event/myevents/"allevents")
    .get(eventController.findAllEventsByHost)
    //update specified event (in rep.params ULR) hosted by current user by hitting (http://localhost:3001/api/event/myevents/"Specify eventId")
    .put(eventController.updateOneEvent)
    //update specified event (in rep.params ULR) hosted by current user by hitting (http://localhost:3001/api/event/myevents/"Specify eventId")
    .delete(eventController.remove)


module.exports = router;
