const sequelize = require("../util/database");
const Sequelize = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: { type: Sequelize.STRING, unique: true },
  phone: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
