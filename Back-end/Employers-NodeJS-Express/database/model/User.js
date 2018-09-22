const Sequelize = require('sequelize');

const connection = require('../connectionDB');

const User = connection.define('user', {

    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }

},{
    indexes: [
        {
            unique: true,
            fields: ['username']
        }
    ],
    createdAt: false,
    updatedAt: false
});

module.exports = User;