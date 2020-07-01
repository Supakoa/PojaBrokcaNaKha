<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// TODO: passsport-js create route
Route::post('login', 'API\UserController@login')->name("login");
Route::post('register', 'API\UserController@register');
Route::get('faculties', 'CRUD\FacultyController@index');
Route::get('faculties/{faculty}', 'CRUD\FacultyController@show');
Route::get('faculties/{faculty}/majors', 'CRUD\FacultyController@getMajorByFacultyId');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('user', 'API\UserController@user');
    Route::get('users', 'API\UserController@users');
    Route::post('logout', 'API\UserController@logout');
    Route::resource('ChatMessenger','CRUD\ChatMessengerController');
});
