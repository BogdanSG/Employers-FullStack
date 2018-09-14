const express = require('express');
const router = express.Router();
const ApiController = require('../../model/controllers/ApiController');
let upload = require('multer')({dest: './public/img/employees/'});

router.post('/tree-employee', ApiController.treeEmployee);

router.post('/full-employee', ApiController.fullEmployee);

router.post('/positions', ApiController.positions);

router.post('/sign-in', ApiController.signIn);

router.post('/sign-up', ApiController.signUp);

//For Authorized

router.post('/employee-list', ApiController.employeeList);

router.post('/employee-delete', ApiController.employeeDelete);

router.post('/employee-update', upload.single('image'), ApiController.employeeUpdate);

module.exports = router;