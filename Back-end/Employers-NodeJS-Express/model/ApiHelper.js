const Response = require('../model/Response');

async function ApiTemplate(req, res, callback){

    let responce = new Response();

    try{

        data = [];

        if(callback && typeof callback == 'function'){

            data = await callback(responce);

        }//if

        if(data.length > 0){

            responce.code = 200;
            responce.message = 'OK';
            responce.data = data;

        }//if
        else {

            responce.code = 404;
            responce.message = 'Not Found';
            responce.data = null;

        }//else

        res.send(responce);


    }//try
    catch (Ex) {

        responce.code = 500;
        responce.message = Ex.message;
        res.send(responce);

    }//catch

}//ApiTemplate

module.exports = {
    ApiTemplate: ApiTemplate
};