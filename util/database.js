const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("group-chat", "root", "lonewarrior70951", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
