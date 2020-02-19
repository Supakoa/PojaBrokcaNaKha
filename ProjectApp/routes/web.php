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
     return redirect("/home");
 });


Auth::routes();

//Admin
// Route::resource('admin/papers', 'PapersController');
Route::resource('user', 'UserController');
Route::resource('/home', 'HomeController');

//Route::resource('/admin/users','UserController');
Route::resource('/admin/users','Admin\Admin_UsersController');

Route::get('/admin/index', function () {
    return view('adminElement.InboxAndOutboxs.inBoxOutbox');
});

Route::get('/admin/mail', function () {
    return view('adminElement.InboxAndOutboxs.inBoxOutbox');
});

 Route::resource('/admin/news', 'Admin\ImagesController');
// Route::get('/admin/news', function () {
//     return view('adminElement.news.index');
// });

Route::resource('/admin/steps', 'Admin\StepsController');
// Route::get('/admin/steps', function () {
//     return view('adminElement.steps.index');
// });


Route::resource('/admin/document', 'Admin\DocumentsController');
// Route::get('/admin/document', function () {
//     return view('adminElement.document.index');
// });

Route::post('/getMajorByFacultyId/{faculty}', "FacultyController@getMajorByFacultyId");

Route::resource('/faculty', 'FacultyController');




////////////////////Staff
Route::get('/staff/index', function () {
    return view('staffElement.index');
});







////////////////////User

// Route::resource('user', 'UserController');

Route::get('/student/index', function () {
    return view('Students.index');
});

// Route::get('/user/index', function (){
//     return view('userElement.bBody.index');
// });

Route::get('/student/profile', function () {
    return view('Students.proFile');
});






