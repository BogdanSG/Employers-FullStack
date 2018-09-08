const ApiHelper = require('../ApiHelper');
const EmployeerHelper = require('../EmployeerHelper');
const passport = require('passport');

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
    signIn: function (req, res) {

        passport.authenticate('local',
            function(err, user, info) {

                let responce = {};

                try{

                    if(err){

                        responce.code = 500;
                        responce.message = 'Error';
                        responce.data = err;

                    }//if
                    else {

                        req.logIn(user, function(err) {

                            if(err){

                                responce.code = 500;
                                responce.message = 'Error';
                                responce.data = err;

                            }//if
                            else {

                                responce.code = 200;
                                responce.message = 'OK';
                                responce.data = {};

                            }//else

                            res.status(responce.code);
                            res.send(responce);

                        });

                    }//else

                    res.status(responce.code);
                    res.send(responce);

                }//try
                catch (Ex) {

                    responce.code = 500;
                    responce.message = Ex.message;

                    res.status(responce.code);
                    res.send(responce);

                }//catch

            }
        )(req, res);

    },//signIn

};