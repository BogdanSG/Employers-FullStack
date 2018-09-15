const ApiHelper = require('../ApiHelper');
const EmployeerHelper = require('../EmployeerHelper');
const User = require('../../database/model/User');
const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const Response = require('../Response');
const bcrypt = require('bcryptjs');
const RegexHelper = require('../RegexHelper');
const fs = require('fs');

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}//getRandomInt

module.exports = {

    treeEmployee: function(req, res) {

        ApiHelper.ApiTemplate(req, res, function(responce) {

            let EmployeeID = req.body.id;

            return EmployeerHelper.getTreeEmployee(EmployeeID);

        });

    },//treeEmployee
    fullEmployee: async function getFullEmployee(req, res) {

        ApiHelper.ApiTemplate(req, res, function(responce) {

            let EmployeeID = req.body.id;

            return EmployeerHelper.getFullEmployee(EmployeeID);

        });

    },//fullEmployee
    employeeList: async function getFullEmployee(req, res) {

        ApiHelper.ApiTemplate(req, res, function(responce) {

            let offset = req.body.offset;
            let limit = req.body.limit;
            let orderBy = req.body.orderBy;
            let firstName = req.body.firstName;
            let lastName = req.body.lastName;
            let surName = req.body.surName;

            return EmployeerHelper.getEmployees(offset, limit, orderBy, firstName, lastName, surName);

        });

    },//employeeList
    positions: async function getFullEmployee(req, res) {

        ApiHelper.ApiTemplate(req, res, function(responce) {

            return EmployeerHelper.getAllPositions();

        });

    },//positions
    signIn: async function (req, res) {

        let response = new Response();

        try {

            let userData = { username: req.body.username, password: req.body.password };

            if(userData.username && userData.password){

                let user = await User.findOne({
                    where: {
                        Login: userData.username
                    }
                });

                if (user && bcrypt.compareSync(userData.password, user.Password)) {

                    const token = jwt.sign({ UserID: user.UserID }, config.secret);

                    response.code = 200;
                    response.message = 'OK';
                    response.data = {
                        user: user.Login,
                        token: token
                    };

                    res.json(response);

                }//if
                else {

                    response.code = 404;
                    response.message = 'Username or Password is incorrect';
                    response.data = {};

                    res.json(response);

                }//else

            }//if

        }//try
        catch (Ex) {

            response.code = 500;
            response.message = Ex.message;
            response.data = Ex;

            res.json(response);

        }//catch

    },//signIn
    signUp: async function (req, res) {

        let response = new Response();

        try {

            let userData = { username: req.body.username, password: req.body.password };

            if(!RegexHelper.IsMatch(userData.username, RegexHelper.UserName)){

                response.code = 500;
                response.message = 'Invalid UserName';
                response.data = {};

                res.json(response);

                return;

            }//if
            else if(!RegexHelper.IsMatch(userData.password, RegexHelper.UserPassword)){

                response.code = 500;
                response.message = 'Invalid Password';
                response.data = {};

                res.json(response);

                return;

            }//else if

            if(userData.username && userData.password){

                let user = await User.findOne({
                    where: {
                        Login: userData.username
                    }
                });

                if(!user){

                    userData.password = bcrypt.hashSync(userData.password, 10);

                    user = await User.create({
                        Login: userData.username,
                        Password: userData.password
                    });

                    const token = jwt.sign({ UserID: user.UserID }, config.secret);

                    response.code = 200;
                    response.message = 'OK';
                    response.data = {
                        user: user.Login,
                        token: token
                    };

                    res.json(response);

                }//if
                else {

                    response.code = 500;
                    response.message = 'Username is already taken';
                    response.data = {};

                    res.json(response);

                }//esle

            }//if

        }//try
        catch (Ex) {

            response.code = 500;
            response.message = Ex.message;
            response.data = Ex;

            res.json(response);

        }//catch

    },//signIn
    employeeDelete: async function(req, res){

        let EmployeeID = req.body.id;

        let response = new Response();

        try {

            let EmployeeID = req.body.id;

            if(EmployeeID){

                ChangeChief(res, response, EmployeeID);

                let ImageName = await EmployeerHelper.getEmployeeImgNameByEmployeeID(EmployeeID);

                if(ImageName){

                    fs.unlinkSync(`./public/img/employees/${ImageName}`);

                }//if

                await EmployeerHelper.deleteEmployee(EmployeeID);

                response.code = 200;
                response.message = 'Employee deleted';
                response.data = {};

                res.json(response);

            }//if
            else {

                response.code = 500;
                response.message = 'EmployeeID is undefined';
                response.data = {};

                res.json(response);

            }//else

        }//try
        catch (Ex) {

            response.code = 500;
            response.message = Ex.message;
            response.data = Ex;

            res.json(response);

        }//catch

    },//employeeDelete
    employeeUpdate: async function(req, res){

        let response = new Response();

        try {

            let EmployeeID = req.body.EmployeeID;
            let ChiefID = req.body.ChiefID !== 'undefined' ? req.body.ChiefID !== 'null' ? req.body.ChiefID : null : null;
            let EmploymentDate = req.body.EmploymentDate;
            let FirstName = req.body.FirstName;
            let LastName = req.body.LastName;
            let SurName = req.body.SurName;
            let Salary = req.body.Salary;
            let PositionID = 1;
            let EmployeeImgID = null;
            let NewFileName = null;

            let file = req.file;

            if(file){

                if(file.size > 10485760){

                    fs.unlinkSync(file.path);

                    response.code = 500;
                    response.message = 'Size image should not be exceed 10 mb';
                    response.data = {};

                    res.json(response);

                    return;

                }//if

            }//if

            if(EmployeeID && EmploymentDate && FirstName && LastName && Salary){

                EmployeeImgID = await EmployeerHelper.getEmployeeImgIDByEmployeeID(EmployeeID);

                if(file){

                    NewFileName = `${EmployeeID}${file.originalname.substr(file.originalname.lastIndexOf('.'))}`;

                    EmployeeImgID = await EmployeerHelper.createOrUpdateImg(EmployeeID, NewFileName);

                    if(EmployeeImgID){

                        let newPath = `${file.destination}${NewFileName}`;

                        let files = fs.readdirSync(file.destination);

                        files.forEach(f => {

                            if(f.slice(0, f.lastIndexOf('.')) == EmployeeID){

                                fs.unlinkSync(`${file.destination}${f}`);

                            }//if

                        });

                        fs.renameSync(file.path, newPath);

                    }//if
                    else {

                        fs.unlinkSync(file.path);

                    }//else

                }//if

                if(ChiefID){

                    PositionID = await EmployeerHelper.getPositionIDByEmployeeID(ChiefID);

                    if(PositionID){

                        if(PositionID == 5){

                            response.code = 500;
                            response.message = 'Worker can not be Chief';
                            response.data = {};

                            res.json(response);

                            return;

                        }//if

                        PositionID++;

                    }//if
                    else {

                        response.code = 500;
                        response.message = 'Position Error';
                        response.data = {};

                        res.json(response);

                        return;

                    }//else

                }//if

                let OldPositionID = await EmployeerHelper.getPositionIDByEmployeeID(EmployeeID);

                if(OldPositionID != PositionID){

                    ChangeChief(res, response, EmployeeID);

                }//if

                await EmployeerHelper.updateEmployee(EmployeeID, ChiefID, EmploymentDate, FirstName, LastName, SurName, Salary, PositionID, EmployeeImgID);

                response.code = 200;
                response.message = 'Employee updated';
                response.data = {
                    NewFileName: NewFileName
                };

                res.json(response);

            }//if
            else {

                response.code = 500;
                response.message = 'Incorrect data';
                response.data = {};

                res.json(response);

            }//else

        }//try
        catch (Ex) {

            response.code = 500;
            response.message = Ex.message;
            response.data = Ex;

            res.json(response);

        }//catch

    },//employeeUpdate

};

async function ChangeChief(res, response, EmployeeID) {

    let Employees = await EmployeerHelper.getEmployeesIDsByChiefID(EmployeeID);

    let PositionID = await EmployeerHelper.getPositionIDByEmployeeID(EmployeeID);

    if(!PositionID){

        response.code = 500;
        response.message = 'Position Error';
        response.data = {};

        res.json(response);

        return;

    }//if

    if(Employees.length > 0){

        let ChiefsIds = await EmployeerHelper.getEmployeesIDsByPositionID(PositionID);

        if(!ChiefsIds && ChiefsIds.length === 0){

            response.code = 500;
            response.message = 'Cheifs Error, command executed';
            response.data = {};

            res.json(response);

            return;

        }//if

        let RandomChief;

        for(let i = 0; i < Employees.length; i ++){

            do{

                RandomChief = ChiefsIds[getRandomInt(0, ChiefsIds.length - 1)].EmployeeID;

            } while (EmployeeID === RandomChief);

            await EmployeerHelper.updateChiefID(Employees[i].EmployeeID, RandomChief);

        }//for

    }//if

}//ChangeChief