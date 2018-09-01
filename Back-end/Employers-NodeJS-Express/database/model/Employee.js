const Sequelize = require('sequelize');

const connection = require('../connectionDB');

const Position = require('../model/Position');
const EmployeeImg = require('../model/EmployeeImg');

const Employee = connection.define('employee', {

    EmployeeID: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    ChiefID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
    },
    PositionID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Position,
            key: 'PositionID'
        }
    },
    EmployeeImgID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: EmployeeImg,
            key: 'EmployeeImgID'
        }
    },
    FirstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    LastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    SurName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    EmploymentDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Salary: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
    }


},{
    createdAt: false,
    updatedAt: false
});

Employee.belongsTo(Employee , { as: 'chief_fk', foreignKey: 'ChiefID' });

module.exports = Employee;