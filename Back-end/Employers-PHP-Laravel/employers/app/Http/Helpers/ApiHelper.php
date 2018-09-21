<?php


namespace App\Http\Helpers;
use App\Model\Response;
use \Exception;

class ApiHelper {

    public static function ApiTemplate($arguments, $callback) {

        $responce = new Response();

        try{

            $data = [];

            if($callback && is_callable($callback)){

                $data = $callback($arguments, $responce);

            }//if

            if(count($data) > 0){

                $responce->code = 200;
                $responce->message = 'OK';
                $responce->data = $data;

            }//if
            else {

                $responce->code = 404;
                $responce->message = 'Not Found';
                $responce->data = null;

            }//else


        }//try
        catch (Exception $ex) {

            $responce->code = 500;
            $responce->message = $ex->getMessage();

        }//catch

        return $responce;

    }//ApiTemplate

}//ApiHelper