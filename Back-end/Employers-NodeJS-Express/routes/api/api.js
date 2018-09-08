const express = require('express');
const router = express.Router();
const ApiController = require('../../model/controllers/ApiController');

router.post('/tree-employee', ApiController.treeEmployee);

router.post('/full-employee', ApiController.fullEmployee);

router.post('/employee-list', ApiController.employeeList);

router.post('/positions', ApiController.positions);

module.exports = router;