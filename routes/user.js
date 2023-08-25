const express = require("express");
const userControllers = require("../controller/user");
const router = express.Router();

router.post("/signup", userControllers.userSignUp);
module.exports = router;
