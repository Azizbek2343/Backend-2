const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const CustomerCard = require("./customer_card.model")(sequelize, Sequelize);

User.associate(sequelize.models);
Customer.associate(sequelize.models);
CustomerCard.associate(sequelize.models);

module.exports = { User, Customer, CustomerCard, sequelize };