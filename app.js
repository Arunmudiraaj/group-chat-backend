const express = require("express");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/user");
const sequelize = require("./util/database");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use("/user", userRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
