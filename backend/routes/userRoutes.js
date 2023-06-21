const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser); //for registration
router.post("/login", authUser); //for login

module.exports = router;
