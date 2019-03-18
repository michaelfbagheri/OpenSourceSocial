const router = require('express').Router();
const itemController = require('../../controllers/itemController');


router.route('/')
    .post(itemController.createOneItemEntryRequesForOneEvent)
    .get(itemController.findAll)


router.route('/commit')
    .post(itemController.createOneItemEntryCommitForOneEvent)
//     .update(itemController.updateOneItemBeingBroughtToAnEvent)
//     .delete(itemController.deleteOneItemBeingBroughtToAnEvent)


module.exports = router;
