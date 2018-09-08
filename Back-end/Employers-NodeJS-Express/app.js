const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index/index');
const apiRouter = require('./routes/api/api');
const PassportLocalStrategy = require('./model/PassportLocalStrategy');

passport.use(PassportLocalStrategy.LocalStrategy());
passport.deserializeUser = PassportLocalStrategy.deserializeUser;
passport.serializeUser = PassportLocalStrategy.serializeUser;

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

app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'Employee Application Secret (73495375)'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
