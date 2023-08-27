const express = require("express");
const messageControllers = require("../controller/messages");
const userMiddleware = require("../middlewares/user");
const routes = express.Router();
routes.post(
  "/sendmessage",
  (req, res, next) => {
    console.log("CUSTOM");
    next();
  },
  userMiddleware.authenticateToken,
  messageControllers.sendMessage
);

module.exports = routes;
