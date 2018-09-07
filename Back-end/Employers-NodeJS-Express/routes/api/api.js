const express = require('express');
const router = express.Router();
const ApiHelper = require('../../model/ApiHelper');
const EmployeerHelper = require('../../model/EmployeerHelper');

router.post('/tree-employee', function(req, res) {

    ApiHelper.ApiTemplate(req, res, function(responce) {

        let EmployeeID = req.body.id;

        return EmployeerHelper.getTreeEmployee(EmployeeID);

    });

});

router.post('/full-employee', async function getFullEmployee(req, res) {

    ApiHelper.ApiTemplate(req, res, function(responce) {

        let EmployeeID = req.body.id;

        return EmployeerHelper.getFullEmployee(EmployeeID);

    });

});

router.post('/employee-list', async function getFullEmployee(req, res) {

    ApiHelper.ApiTemplate(req, res, function(responce) {

        let offset = req.body.offset;
        let limit = req.body.limit;
        let orderBy = req.body.orderBy;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let surName = req.body.surName;

        return EmployeerHelper.getEmployees(offset, limit, orderBy, firstName, lastName, surName);

    });

});

router.post('/positions', async function getFullEmployee(req, res) {

    ApiHelper.ApiTemplate(req, res, function(responce) {

        return EmployeerHelper.getAllPositions();

    });

});

module.exports = router;