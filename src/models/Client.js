const DataTypes = require("sequelize");
const db = require("../db");

const Client = db.define('client', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: DataTypes.STRING,
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
});

module.exports = Client;