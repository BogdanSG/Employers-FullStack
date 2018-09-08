const Sequelize = require('sequelize');

const connection = require('../connectionDB');

const User = connection.define('user', {

    UserID: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    Login: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,

    },
    Password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }

},{
    indexes: [
        {
            unique: true,
            fields: ['Login']
        }
    ],
    createdAt: false,
    updatedAt: false
});

module.exports = User;