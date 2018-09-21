const expressJwt = require('express-jwt');
//const User = require('../database/model/User');
const findUserByLogin = require('./EmployeerHelper').findUserByLogin;
const config = require('../../config.json');

function jwt() {

    const secret = config.secret;

    return expressJwt({ secret, isRevoked, getToken });

}//jwt

async function isRevoked(req, payload, done) {

    //const user = await User.findById(payload.UserID);
    const user = await findUserByLogin(payload.UserID);

    if (!user) {

        return done(null, true);

    }//if

    done();

}//isRevoked

function getToken (req) {

    let token = req.query.access_token || req.body.access_token || req.cookies.access_token || req.headers['x-access-token'];

    if (token) {

        return token;

    }//if

    return null;

}//getToken

module.exports = jwt;