const Response = require('../model/Response');

async function ApiTemplate(req, res, callback){

    let responce = new Response();

    try{

        data = [];

        if(callback && typeof callback == 'function'){

            data = await callback(responce);

        }//if

        responce.code = 200;
        responce.message = 'OK';
        responce.data = data;

        res.status(responce.code);
        res.send(responce);


    }//try
    catch (Ex) {

        responce.code = 500;
        responce.message = Ex.message;

        res.status(responce.code);
        res.send(responce);

    }//catch

}//ApiTemplate

module.exports = {
    ApiTemplate: ApiTemplate
};