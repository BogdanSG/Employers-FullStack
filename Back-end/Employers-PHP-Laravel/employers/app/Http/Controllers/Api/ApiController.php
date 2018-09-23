<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Helpers\ApiHelper;
use App\Http\Helpers\EmployeerHelper;
use App\Http\Helpers\RegexHelper;
use \Exception;
use App\Model\Response;
use Illuminate\Support\Facades\Hash;
use \Tymon\JWTAuth\Facades\JWTAuth;
use \Storage;

class ApiController extends Controller {

    public function treeEmployee(Request $request){

        try{

            $EmployeeID = $request->get('id');

            $data = ApiHelper::ApiTemplate($EmployeeID, function ($EmployeeID) {

                return EmployeerHelper::getTreeEmployee($EmployeeID);

            });

            return response(json_encode($data))->header('Content-Type', 'application/json');


        }//try
        catch (Exception $ex){

            return $ex->getMessage();

        }//catch

    }//treeEmployee

    public function shortEmployee(Request $request){

        try{

            $EmployeeID = $request->get('id');

            $data = ApiHelper::ApiTemplate($EmployeeID, function ($EmployeeID) {

                return EmployeerHelper::getShortEmployee($EmployeeID);

            });

            return response(json_encode($data))->header('Content-Type', 'application/json');

        }//try
        catch (Exception $ex){

            return $ex->getMessage();

        }//catch

    }//shortEmployee

    public function positions(){

        try{

            $data = ApiHelper::ApiTemplate(null, function () {

                return EmployeerHelper::getAllPositions();

            });

            return response(json_encode($data))->header('Content-Type', 'application/json');

        }//try
        catch (Exception $ex){

            return $ex->getMessage();

        }//catch

    }//positions

    public function signIn(Request $request){

        $response = new Response();

        try {

            $userData = [ 'username' => $request->get('username'), 'password' => $request->get('password') ];

            if($userData['username'] && $userData['password']){

                $user = EmployeerHelper::findUserByUserName($userData['username']);

                if ($user && Hash::check($userData['password'], $user->password)) {

                    $token = JWTAuth::attempt(['id' => $user->id, 'password' => $userData['password']]);

                    if(!$token){

                        $response->code = 500;
                        $response->message = 'Token Error';
                        $response->data = [];

                        return response(json_encode($response))->header('Content-Type', 'application/json');

                    }//if

                    $response->code = 200;
                    $response->message = 'OK';
                    $response->data = [
                        'user' => $user->username,
                        'token'=> $token
                    ];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//if
                else {

                    $response->code = 404;
                    $response->message = 'Username or Password is incorrect';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//else

            }//if

        }//try
        catch (Exception $ex) {

            $response->code = 500;
            $response->message = $ex->getMessage();
            $response->data = $ex;

            return response(json_encode($response))->header('Content-Type', 'application/json');

        }//catch

    }//signIn

    public function signUp(Request $request){

        $response = new Response();

        try {

            $userData = [ 'username' => $request->get('username'), 'password' => $request->get('password') ];

            if($userData['username'] && $userData['password']){

                if(!RegexHelper::IsMatch($userData['username'], RegexHelper::UserName())){

                    $response->code = 500;
                    $response->message = 'Invalid UserName';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//if
                else if(!RegexHelper::IsMatch($userData['password'], RegexHelper::UserPassword())){

                    $response->code = 500;
                    $response->message = 'Invalid Password';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//else if

                $user = EmployeerHelper::findUserByUserName($userData['username']);

                if(!$user){

                    $id = \DB::table('users')->insertGetId(['username' => $userData['username'], 'password' => bcrypt($userData['password'])]);

                    $token = JWTAuth::attempt(['id' => $id, 'password' => $userData['password']]);

                    if(!$token){

                        $response->code = 500;
                        $response->message = 'Token Error';
                        $response->data = [];

                        return response(json_encode($response))->header('Content-Type', 'application/json');

                    }//if

                    $response->code = 200;
                    $response->message = 'OK';
                    $response->data = [
                        'user' => $userData['username'],
                        'token'=> $token
                    ];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//if
                else {

                    $response->code = 500;
                    $response->message = 'Username is already taken';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//else

            }//if

        }//try
        catch (Exception $ex) {

            $response->code = 500;
            $response->message = $ex->getMessage();
            $response->data = $ex;

            return response(json_encode($response))->header('Content-Type', 'application/json');

        }//catch

    }//signUp

    public function fullEmployee(Request $request){

        try{

            $EmployeeID = $request->get('id');

            $data = ApiHelper::ApiTemplate($EmployeeID, function ($EmployeeID) {

                return EmployeerHelper::getFullEmployee($EmployeeID);

            });

            return response(json_encode($data))->header('Content-Type', 'application/json');

        }//try
        catch (Exception $ex){

            return $ex->getMessage();

        }//catch

    }//fullEmployee

    public function employeeList(Request $request){

        try{

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


        }//try
        catch (Exception $ex){

            return $ex->getMessage();

        }//catch

    }//employeeList

    public function employeeDelete(Request $request){

        $response = new Response();

        try {

            $EmployeeID = $request->get('id');

            if($EmployeeID){

                if(!$this->ChangeChief($response, $EmployeeID)){

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//if

                $ImageName = EmployeerHelper::getEmployeeImgNameByEmployeeID($EmployeeID);

                if($ImageName){

                    Storage::disk('public_img_employees')->delete('$ImageName');

                }//if

                EmployeerHelper::deleteEmployee($EmployeeID);

                $response->code = 200;
                $response->message = 'Employee deleted';
                $response->data = [];

                return response(json_encode($response))->header('Content-Type', 'application/json');

            }//if
            else {

                $response->code = 500;
                $response->message = 'EmployeeID is undefined';
                $response->data = [];

                return response(json_encode($response))->header('Content-Type', 'application/json');;

            }//else

        }//try
        catch (Exception $ex) {

            $response->code = 500;
            $response->message = $ex;
            $response->data = [];

            return response(json_encode($response))->header('Content-Type', 'application/json');

        }//catch

    }//employeeDelete

    public function employeeUpdate(Request $request){

        $response = new Response();

        try {

            $EmployeeID = $request->get('EmployeeID');
            $ChiefID = $request->get('ChiefID') !== 'undefined' ? $request->get('ChiefID') !== 'null' ? $request->get('ChiefID') : null : null;
            $EmploymentDate = $request->get('EmploymentDate');
            $FirstName = $request->get('FirstName');
            $LastName = $request->get('LastName');
            $SurName = $request->get('SurName');
            $Salary = $request->get('Salary');
            $PositionID = 1;
            $EmployeeImgID = null;
            $NewFileName = null;

            if($EmployeeID && $EmploymentDate && $FirstName && $LastName && $Salary){

                if(!RegexHelper::IsMatch($FirstName, RegexHelper::EmployeeName())){

                    $response->code = 500;
                    $response->message = 'Incorrect FirstName';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//if
                else if(!RegexHelper::IsMatch($LastName, RegexHelper::EmployeeName())){

                    $response->code = 500;
                    $response->message = 'Incorrect LastName';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//else if
                else if ($SurName && !RegexHelper::IsMatch($SurName, RegexHelper::EmployeeName())){

                    $response->code = 500;
                    $response->message = 'Incorrect SurName';
                    $response->data = [];

                    return response(json_encode($response))->header('Content-Type', 'application/json');

                }//else if

                $EmployeeImgID = EmployeerHelper::getEmployeeImgIDByEmployeeID($EmployeeID);

                if($request->hasFile('image')){

                    $file = $request->file('image');

                    if($file->getSize() > 10485760){

                        $response->code = 500;
                        $response->message = 'Size image should not be exceed 10 mb';
                        $response->data = [];

                        return response(json_encode($response))->header('Content-Type', 'application/json');

                    }//if

                    $ext = $file->extension();

                    $NewFileName = "${EmployeeID}.${ext}";

                    Storage::disk('public_img_employees')->putFileAs('/', $file, $NewFileName);

                    $EmployeeImgID = EmployeerHelper::createOrUpdateImg($EmployeeID, $NewFileName);

                    if($EmployeeImgID){

                        $files = Storage::disk('public_img_employees')->allFiles();

                        foreach ($files as $f) {

                            if(pathinfo($f)['filename'] == $EmployeeID){

                                Storage::disk('public_img_employees')->delete($f);

                            }//if

                        }//foreach

                        Storage::disk('public_img_employees')->putFileAs('/', $file, $NewFileName);

                    }//if

                }//if

                if($ChiefID){

                    if($ChiefID === $EmployeeID){

                        $response->code = 500;
                        $response->message = 'Employee can not be yourself chief';
                        $response->data = [];

                        return response(json_encode($response))->header('Content-Type', 'application/json');

                    }//if

                    $PositionID = EmployeerHelper::getPositionIDByEmployeeID($ChiefID);

                    if($PositionID){

                        if($PositionID == 5){

                            $response->code = 500;
                            $response->message = 'Worker can not be Chief';
                            $response->data = [];

                            return response(json_encode($response))->header('Content-Type', 'application/json');

                        }//if

                        $PositionID++;

                    }//if
                    else {

                        $response->code = 500;
                        $response->message = 'Position Error';
                        $response->data = [];

                        return response(json_encode($response))->header('Content-Type', 'application/json');

                    }//else

                }//if

                $OldPositionID = EmployeerHelper::getPositionIDByEmployeeID($EmployeeID);

                if($OldPositionID != $PositionID){

                    if(!$this->ChangeChief($response, $EmployeeID)){

                        return response(json_encode($response))->header('Content-Type', 'application/json');

                    }//if

                }//if

                EmployeerHelper::updateEmployee($EmployeeID, $ChiefID, $EmploymentDate, $FirstName, $LastName, $SurName, $Salary, $PositionID, $EmployeeImgID);

                $response->code = 200;
                $response->message = 'Employee updated';
                $response->data = [
                    'NewFileName' => $NewFileName
                ];

                return response(json_encode($response))->header('Content-Type', 'application/json');

            }//if
            else {

                $response->code = 500;
                $response->message = 'Incorrect data';
                $response->data = [];

                return response(json_encode($response))->header('Content-Type', 'application/json');

            }//else

        }//try
        catch (Exception $ex) {

            $response->code = 500;
            $response->message = $ex->getMessage();
            $response->data = [];

            return response(json_encode($response))->header('Content-Type', 'application/json');

        }//catch

    }//employeeUpdate

    private function ChangeChief($response, $EmployeeID){

        $Employees = EmployeerHelper::getEmployeesIDsByChiefID($EmployeeID);

        $PositionID = EmployeerHelper::getPositionIDByEmployeeID($EmployeeID);

        if(!$PositionID){

            $response->code = 500;
            $response->message = 'Position Error';
            $response->data = [];

            return false;

        }//if

        if(count($Employees) > 0){

            $ChiefsIds = EmployeerHelper::getEmployeesIDsByPositionID($PositionID);

            if(!$ChiefsIds && count($ChiefsIds) === 0){

                $response->code = 500;
                $response->message = 'Cheifs Error, command executed';
                $response->data = [];

                return false;

            }//if

            $EmployeesLength = count($Employees);
            $ChiefsIdsLength = count($ChiefsIds);

            for($i = 0; $i < $EmployeesLength; $i++){

                do {

                    $RandomChief = $ChiefsIds[rand(0, $ChiefsIdsLength - 1)]->EmployeeID;

                } while ($EmployeeID === $RandomChief);

                EmployeerHelper::updateChiefID($Employees[$i]->EmployeeID, $RandomChief);

            }//for

            return true;

        }//if

        return false;

    }//ChangeChief

}//ApiController
