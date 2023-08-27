require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/messages");
const sequelize = require("./util/database");
const cors = require("cors");
const app = express();
const Message = require("./models/message");
const User = require("./models/user");
app.use(cors({ origin: "*" }));
app.use(bodyparser.json());
app.use("/user", userRoutes);
app.use("/message", messageRoutes);

User.hasMany(Message);
Message.belongsTo(User);
sequelize
  .sync()
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
