<?php

use \Tymon\JWTAuth\Facades\JWTAuth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/tree-employee', 'Api\ApiController@treeEmployee');

Route::post('/short-employee', 'Api\ApiController@shortEmployee');

Route::post('/positions', 'Api\ApiController@positions');

Route::post('/sign-in', 'Api\ApiController@signIn');

Route::post('/sign-up', 'Api\ApiController@signUp');

//For Authorized

Route::group(['middleware' => ['jwt.auth']], function() {

    Route::post('/full-employee', 'Api\ApiController@fullEmployee');

    Route::post('/employee-list', 'Api\ApiController@employeeList');

    Route::post('/employee-delete', 'Api\ApiController@employeeDelete');

    Route::post('/employee-update', 'Api\ApiController@employeeUpdate');

});
