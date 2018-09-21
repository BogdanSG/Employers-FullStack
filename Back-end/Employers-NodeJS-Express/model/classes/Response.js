class Response {

    constructor(code, message, data){

        this.code = code ? code : 0;
        this.message = message ? message : '';
        this.data = data ? data : {};

    }//constructor

}//Response

module.exports = Response;