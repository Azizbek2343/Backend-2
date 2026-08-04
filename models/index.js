const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user.model")(sequelize, Sequelize);
const Customer = require

module.exports = { User, sequelize };