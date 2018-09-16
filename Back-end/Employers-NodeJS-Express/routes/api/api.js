const express = require('express');
const router = express.Router();
const ApiController = require('../../model/controllers/ApiController');
let upload = require('multer')({dest: './public/img/employees/'});
const jwt = require('../../model/JwtHelper');

router.post('/tree-employee', ApiController.treeEmployee);

router.post('/full-employee', ApiController.fullEmployee);

router.post('/positions', ApiController.positions);

router.post('/sign-in', ApiController.signIn);

router.post('/sign-up', ApiController.signUp);

//For Authorized

router.post('/employee-list', jwt(), ApiController.employeeList);

router.post('/employee-delete', jwt(), ApiController.employeeDelete);

router.post('/employee-update', jwt(), upload.single('image'), ApiController.employeeUpdate);

module.exports = router;