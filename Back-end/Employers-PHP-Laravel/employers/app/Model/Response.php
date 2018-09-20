<?php

namespace App\Model;

class Response {

    public $code;
    public $message;
    public $data;

    public function __construct($code = 0, $message = '', $data = []) {

        $this->code = $code;
        $this->message = $message;
        $this->data = $data;

    }//__construct

}//Response