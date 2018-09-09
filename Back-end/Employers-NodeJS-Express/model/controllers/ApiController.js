const ApiHelper = require('../ApiHelper');
const EmployeerHelper = require('../EmployeerHelper');
const User = require('../../database/model/User');
const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const Response = require('../Response');
const bcrypt = require('bcryptjs');

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
                    response.message = 'Username or password is incorrect';
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

};