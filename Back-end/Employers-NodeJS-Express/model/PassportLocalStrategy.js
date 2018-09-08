const LocalStrategy = require('passport-local').Strategy;
const findUserByLogin = require('./EmployeerHelper').findUserByLogin;

module.exports.LocalStrategy = function () {

    return new LocalStrategy(async function(username, password, done) {

        let dataUser = await findUserByLogin(username);

        let message = 'Incorrect Login or Password.';

        if(dataUser){

            if(dataUser.error){

                done(dataUser.error);

            }//if
            else {

                if(dataUser.Password === password){

                    done(null, dataUser);

                }//if
                else {

                    done(null, false, { message: message });

                }//else

            }//else

        }//if
        else {

            done(null, false, { message: message });

        }//else

    });

};

module.exports.serializeUser = function (user, done) {

    done(null, user);

};

module.exports.deserializeUser = async function (user, done) {

    let dataUser = await findUserByLogin(username);

    if(dataUser){

        if(dataUser.error){

            done(dataUser.error);

        }//if
        else {

            done(null, user);

        }//else

    }//if
    else {

        done(null);

    }//else

};