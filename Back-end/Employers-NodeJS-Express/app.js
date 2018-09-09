const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index/index');
const apiRouter = require('./routes/api/api');
const jwt = require('./model/JwtHelper');

const app = express();

//==============================Settings==============================//

// app.set('views', './views/pug');
// app.set('view engine', 'pug');

app.set('views', './views/hbs');
app.set('view engine', 'hbs');

//Temp

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jwt());

app.use(express.static('./public'));

//==============================Routers==============================//

//Multi Page

app.use('/', indexRouter);

//Single Page

//app.use('*', indexRouter);

app.use('/api', apiRouter);

app.use(function (req, res) {

    res.render('404');

});

module.exports = app;
