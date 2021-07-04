<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

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
Route::view('forgot_password', 'auth.reset_password')->name('password.reset');
Route::get('send-mail', function () {

    $details = [
        'title' => 'Mail from ItSolutionStuff.com',
        'body' => 'This is for testing email using smtp'
    ];

    Mail::to('singcomnet@hotmail.com')->send(new \App\Mail\MyTestMail($details));

    dd("Email is Sent.");
});
Route::resource('post', 'PostController');
Route::view('/{path?}', 'app')->where('path', '.*')->name('react');
//Route::view('/{path?}/{path2?}', 'app');
//Route::view('/{path?}/{path2?}/{path3?}', 'app');
//Route::view('/{path?}/{path2?}/{path3?}/{path4?}', 'app');
// Route::get('/', function () {
//     return view('welcome');
// });

