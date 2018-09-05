const Sequelize = require('sequelize');

const connection = require('../connectionDB');

const EmployeeImg = connection.define('employee_img', {

    EmployeeImgID: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    ImgName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },

},{
    createdAt: false,
    updatedAt: false
});

module.exports = EmployeeImg;