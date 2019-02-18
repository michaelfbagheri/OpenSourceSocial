const router = require("express").Router();
const userRoutes = require('./user');
const messageRoutes = require('./message');
const userController = require("../../controllers/userControllers")

// back end authentication check from any API
router.use(userController.checkApiAuthentication) // userController.checkApiAuthentication.bind(userController)

//User routes
router.use("/user", userRoutes);

// //messsage routes
router.use("/message", messageRoutes);



module.exports = router;
