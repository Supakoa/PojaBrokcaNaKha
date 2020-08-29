<?php

use App\MyEvent\ChatEcho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Routing\UrlGenerator;
use Symfony\Component\HttpFoundation\File\UploadedFile as Input;

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
Route::resource('majors','MajorsController');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('user', 'API\UserController@user');
    Route::post('logout', 'API\UserController@logout');
    Route::get('users/export', 'API\UserController@export');
    Route::get('users/import', 'API\UserController@importTemplate');
    Route::post('users/import', 'API\UserController@import');
    Route::resource('ChatMessenger','CRUD\ChatMessengerController');
    Route::resource('users', 'API\UserController');
    Route::get('users/{user}/documents', 'API\UserController@documents');
    Route::resource('documents', 'DocumentsController', ['except' => ['create', 'edit']]);
    Route::post('documents/{document}/cancel',"DocumentsController@cancel");
    Route::post('documents/{document}/approve',"DocumentsController@approve");

    Route::resource('news', 'NewsController', ['except' => ['create', 'edit']]);

    Route::resource('subjects', 'SubjectsController', ['except' => ['create', 'edit']]);


    //Forms
    Route::resource('forms', 'formsController', ['except' => ['create', 'edit']]);
    Route::get('forms/{form}/documents','formsController@documents');
    // form group == direction form
    Route::get('forms/{form}/groups','formsController@groups');
    Route::get('forms/{form}/groups/{state}','formsController@groupsByState');
    Route::post('forms/{form}/groups','formsController@addGroup');
    Route::delete('forms/{form}/groups','formsController@deleteGroup');

    //Groups
    Route::resource('groups', 'GroupsController', ['except' => ['create', 'edit']]);
    Route::get('groups/{group}/users','GroupsController@users');
    Route::post('groups/{group}/users','GroupsController@addUser');
    Route::delete('groups/{group}/users','GroupsController@deleteUser');

    Route::post("/uploads",function (Request $request){

        $imagePath = request('image')->store('uploads','public');
        $image = Image::make(public_path("storage/{$imagePath}"));
        $image->save();
        return  $imagePath;

    });

});
Route::post('password/email', 'ForgotPasswordController@forgot');
Route::get('test/{text}',function ($text) {
    event(new ChatEcho($text,3));
    return $text;
});



