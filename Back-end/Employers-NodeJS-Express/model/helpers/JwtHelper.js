const expressJwt = require('express-jwt');
const User = require('../database/model/User');
const config = require('../../config.json');

function jwt() {

    const secret = config.secret;

    return expressJwt({ secret, isRevoked, getToken });

}//jwt

async function isRevoked(req, payload, done) {

    const user = await User.findById(payload.UserID);

    if (!user) {

        return done(null, true);

    }//if

    done();

}//isRevoked

function getToken (req) {

    let token = req.query.token || req.body.token || req.cookies.token || req.headers['x-token'];

    if (token) {

        return token;

    }//if

    return null;

}//getToken

module.exports = jwt;