const Employee = require('../model/Employee');
const EmployeeImg = require('../model/EmployeeImg');
const Position = require('../model/Position');

Position.sync({force: true});

EmployeeImg.sync({force: true});

Employee.sync({force: true});