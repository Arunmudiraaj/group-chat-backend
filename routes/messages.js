const express = require("express");
const messageControllers = require("../controller/messages");
const userMiddleware = require("../middlewares/user");
const routes = express.Router();
routes.post(
  "/sendmessage",
  userMiddleware.authenticateToken,
  messageControllers.sendMessage
);

routes.get(
  "/getall",
  userMiddleware.authenticateToken,
  messageControllers.getAllMessages
);

module.exports = routes;
