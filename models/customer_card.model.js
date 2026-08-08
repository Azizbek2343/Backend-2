const { allow } = require("joi");

module.exports = (sequelize, DataTypes) => {
    const CustomerCard = sequelize.define("Customer", {
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
            allowNull: false
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });

    CustomerCard.associate = (models) => {
        CustomerCard.hasMany(models.Customer, {
            foreignKey: "customerCard_id",
            as: "customer"
        });
    };

    return CustomerCard
}