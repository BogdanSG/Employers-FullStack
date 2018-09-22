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

    public function employeeDelete(){

        return 'employeeDelete';

    }//employeeDelete

    public function employeeUpdate(){

        return 'employeeUpdate';

    }//employeeUpdate

}//ApiController
