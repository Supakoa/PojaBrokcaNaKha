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

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login.index');
});

Route::get('/register', function () {
    return view('login.element.reGister');
});


Route::get('/admin/index', function () {
    return view('adminElement.Index');
});

Route::get('/admin/index', function () {
    return view('adminElement.Index');
});
