const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser); //for registration
// router.post("/login", authUser); //for login

module.exports = router;
