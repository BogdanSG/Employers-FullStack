<?php

namespace App\Http\Helpers;

class RegexHelper {

    public static function UserName(){

        return '/^[a-z0-9_]{4,20}$/mi';

    }//UserName

    public static function UserPassword(){

        return '/^[a-z0-9]{4,20}$/mi';

    }//UserPassword

    public static function EmployeeName(){

        return '/^[^0-9)([\]<>\\\/.{},\'":;`$~#@!%^&*+=|?_-]{1,255}$/mi';

    }//EmployeeName

    public static function IsMatch($value, $pattern){

        if(preg_match($pattern, $value)){

            return true;

        }//if
        else{

            return false;

        }//esle

    }//IsMatch

}//RegexHelper