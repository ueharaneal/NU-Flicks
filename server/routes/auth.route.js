const express = require("express")
const authController = require("../controllers/auth.controller")
const router = express.Router()

///Middleware
const auth = require("../middleware/auth")

router.post("/register", authController.register)
router.post("/signin", authController.signin)
router.get("/isauth", auth(), authController.isauth)
router.post("/testrole", auth("createAny", "test"), authController.testrole)

module.exports = router

//auth() middleware will first check the acess, the second will check the resources
