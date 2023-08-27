const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Message = sequelize.define("message", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userEmail: { type: Sequelize.STRING, allowNull: false },
  messageBody: Sequelize.STRING,
});

module.exports = Message;
