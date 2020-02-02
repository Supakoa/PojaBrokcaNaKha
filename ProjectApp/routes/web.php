<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\FacultyController;
use Illuminate\Support\Facades\Route;


// Login
Route::get('/', function () {
    return view('login.index');
});

Route::resource('/register', 'Auth\RegisterController');
Auth::routes();

//Admin
// Route::resource('admin/papers', 'PapersController');
Route::get('/admin/index', function () {
    return view('adminElement.InboxAndOutboxs.inBoxOutbox');
});

Route::get('/admin/mail', function () {
    return view('adminElement.InboxAndOutboxs.inBoxOutbox');
});

Route::get('/admin/news', function () {
    return view('adminElement.news.index');
});

Route::get('/admin/steps',function (){
    return view('adminElement.steps.index');
});

Route::get('/admin/member',function (){
    return view('adminElement.member.index');
});

Route::get('/admin/document',function (){
    return view('adminElement.document.index');
});

Route::post('/getMajorByFacultyId/{faculty}',"FacultyController@getMajorByFacultyId");

Route::resource('/faculty', 'FacultyController');


//Staff
Route::get('/staff/index',function (){
    return view('staffElement.index');
});

//User

Route::resource('user', 'UserController');

// Route::get('/user/index', function (){
//     return view('userElement.index');
// });

// Route::get('/user/index', function (){
//     return view('userElement.bBody.index');
// });

// Route::get('/user/profile', function (){
//     return view('userElement.bBody.proFile');
// });



