<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Faculty as fac;
use App\Major as maj;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;


    public function showRegistrationForm()
    {
        $fac = fac::all();
        return view('login.element.reGister')->with('faculties', $fac);
    }


    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'fname' => ['required', 'string', 'max:255'],
            'lname' => ['required', 'string', 'max:255'],
            'student_id' => ['required', 'numeric', 'size :11', 'unique:users'],
            'tel' => ['required', 'numeric', 'size :10'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ],[
            'fname.required' => 'กรุณากรอกชื่อ',
            'lname.required' => 'กรุณากรอกนามสกุล',
            'student_id.required' => 'กรุณากรอกรหัสนักศึกษา',
            'student_id.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'student_id.size' => 'กรุณากรอกไม่เกิน 11 ตัว',
            'tel.required' => 'กรุณากรอกเบอร์โทรศัพษ์',
            'tel.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'tel.size' => 'กรุณากรอกไม่เกิน 10 ตัว',

        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

}
