<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function myProfile(){
        return view('admin-teach.yourprofile.Yourprofile');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // dd(auth()->user());
        if(auth()->user()->role->id == 1){
            // return view('std_viewer.std_home.index');
            return redirect('/admin/index');
        }else{
           if(isset($validator))
             return redirect()->back()->withErrors($validator)->withInput();
            else{
               return redirect('/admin/users');
            }
        }

    }
}
