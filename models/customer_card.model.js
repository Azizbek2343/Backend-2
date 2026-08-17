const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const CustomerCard = sequelize.define("CustomerCard", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });

    CustomerCard.associate = (models) => {
        CustomerCard.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
    };

    return CustomerCard;
};