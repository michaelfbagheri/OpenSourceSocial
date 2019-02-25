const router = require("express").Router();
const userRoutes = require('./user');
const messageRoutes = require('./message');
const itemRoutes = require('./item');
const eventRoutes = require('./event');
const reviewRoutes = require('./review');
const attendeeRoutes = require('./attendee');
const userController = require("../../controllers/userControllers")

// back end authentication check from any API
router.use(userController.checkApiAuthentication) // userController.checkApiAuthentication.bind(userController)

//User routes
router.use("/user", userRoutes);

//messsage routes
router.use("/message", messageRoutes);

//item routes
router.use("/item", itemRoutes);

//event routes
router.use("/event", eventRoutes);

//review routes
router.use("/review", reviewRoutes);

//review routes
router.use("/attendee", attendeeRoutes);

module.exports = router;
