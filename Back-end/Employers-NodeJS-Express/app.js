const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index/index');
const apiRouter = require('./routes/api/api');

const app = express();

//==============================Settings==============================//

//Temp

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

//==============================Routers==============================//

//Single Page

app.use('*', indexRouter);

app.use('/api', apiRouter);

module.exports = app;
