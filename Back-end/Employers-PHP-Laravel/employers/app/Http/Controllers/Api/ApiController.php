<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\EmployeerHelper;

class ApiController extends Controller {

    public function treeEmployee(Request $request){

        $EmployeeID = $request->get('id');

        $data = ApiHelper::ApiTemplate($EmployeeID, function ($EmployeeID) {

            return EmployeerHelper::getTreeEmployee($EmployeeID);

        });

        return response(json_encode($data))->header('Content-Type', 'application/json');

    }//treeEmployee

    public function shortEmployee(Request $request){

        $EmployeeID = $request->get('id');

        $data = ApiHelper::ApiTemplate($EmployeeID, function ($EmployeeID) {

            return EmployeerHelper::getShortEmployee($EmployeeID);

        });

        return response(json_encode($data))->header('Content-Type', 'application/json');

    }//shortEmployee

    public function positions(){

        $data = ApiHelper::ApiTemplate(null, function () {

            return EmployeerHelper::getAllPositions();

        });

        return response(json_encode($data))->header('Content-Type', 'application/json');

    }//positions

    public function signIn(){

        return 'signIn';

    }//signIn

    public function signUp(){

        return 'signUp';

    }//signUp

    public function fullEmployee(Request $request){

        $EmployeeID = $request->get('id');

        $data = ApiHelper::ApiTemplate($EmployeeID, function ($EmployeeID) {

            return EmployeerHelper::getFullEmployee($EmployeeID);

        });

        return response(json_encode($data))->header('Content-Type', 'application/json');

    }//fullEmployee

    public function employeeList(Request $request){

        $data = [];

        $data['offset'] = $request->get('offset');
        $data['limit'] = $request->get('limit');
        $data['orderBy'] = $request->get('orderBy');
        $data['sort'] = $request->get('sort');
        $data['search'] = $request->get('search');
        $data['searchValue'] = $request->get('searchValue');

        $data = ApiHelper::ApiTemplate($data, function ($data) {

            return EmployeerHelper::getEmployees($data['offset'], $data['limit'], $data['orderBy'], $data['sort'], $data['search'], $data['searchValue']);

        });

        return response(json_encode($data))->header('Content-Type', 'application/json');

    }//employeeList

    public function employeeDelete(){

        return 'employeeDelete';

    }//employeeDelete

    public function employeeUpdate(){

        return 'employeeUpdate';

    }//employeeUpdate

}//ApiController
