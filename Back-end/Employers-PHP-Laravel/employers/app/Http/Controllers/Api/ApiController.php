<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiController extends Controller {

    public function treeEmployee(){

        return 'treeEmployee';

    }//treeEmployee

    public function shortEmployee(){

        return 'shortEmployee';

    }//shortEmployee

    public function positions(){

        return 'positions';

    }//positions

    public function signIn(){

        return 'signIn';

    }//signIn

    public function signUp(){

        return 'signUp';

    }//signUp

    public function fullEmployee(){

        return 'fullEmployee';

    }//fullEmployee

    public function employeeList(){

        return 'employeeList';

    }//employeeList

    public function employeeDelete(){

        return 'employeeDelete';

    }//employeeDelete

    public function employeeUpdate(){

        return 'employeeUpdate';

    }//employeeUpdate

}//ApiController
