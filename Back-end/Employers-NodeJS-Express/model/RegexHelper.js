class RegexHelper {

    static get UserName(){

        return /^[a-z0-9_]{4,20}$/gmi;

    }//UserName

    static get UserPassword(){

        return /^[a-z0-9]{4,20}$/gmi;

    }//UserPassword

    static get EmployeeName(){

        return /^\w[^0-9)([\]<>\\/.{},'":;`$~#@!%^&*+=|?_-]{1,255}$/gmi;

    }//UserPassword

    static IsMatch(value, pattern){

        let result = value.search(pattern);

        return result !== -1 ? true : false;

    }//IsMatch

}//RegexHelper

module.exports = RegexHelper;