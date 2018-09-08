const Employee = require('../model/Employee');
const EmployeeImg = require('../model/EmployeeImg');
const Position = require('../model/Position');
const User = require('../model/User');

Position.sync({force: true});

EmployeeImg.sync({force: true});

Employee.sync({force: true});

User.sync({force: true});