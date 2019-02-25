const router = require('express').Router();
const attendeeController = require('../../controllers/attendeeController');

router.route('/')
    .post(attendeeController.attendOneEvent)


router.route('/:event')
    .delete(attendeeController.deleteAttendeeFromOneEvent)
    .get(attendeeController.getAllAttendeesOfOneEvent)


module.exports = router;