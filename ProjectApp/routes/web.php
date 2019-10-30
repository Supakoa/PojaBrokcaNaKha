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

Route::resource('admin/papers', 'PapersController');


Route::get('/admin/index', function () {
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


