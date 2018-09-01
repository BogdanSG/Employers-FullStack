const Sequelize = require('sequelize');

const connection = require('../connectionDB');

const Position = connection.define('position', {

    PositionID: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    Title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },


},{
    createdAt: false,
    updatedAt: false
});

module.exports = Position;