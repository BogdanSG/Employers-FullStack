const expressJwt = require('express-jwt');
const User = require('../database/model/User');
const config = require('../config.json');

function jwt() {

    const secret = config.secret;

    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/api/sign-in',
            '/api/sign-up',
            '/api/tree-employee',
            '/api/full-employee',
            '/api/positions',
        ]
    });

}//jwt

async function isRevoked(req, payload, done) {

    const user = await User.findById(payload.UserID);

    if (!user) {

        return done(null, true);

    }//if

    done();

}//isRevoked

module.exports = jwt;