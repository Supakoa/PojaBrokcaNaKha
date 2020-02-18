<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\User;
use App\Faculty;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use SebastianBergmann\Environment\Console;

class Admin_UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        dd(User::all()->role);
        return view('adminElement.users.index')->with("faculties",Faculty::all())->with("Users", User::all());

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'fname' => ['required', 'string', 'max:255'],
            'lname' => ['required', 'string', 'max:255'],
            'student_id' => ['required', 'numeric','digits:11', 'unique:users'],
            'tel' => ['required', 'numeric','digits:10'],
            'title' => ['required'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'type' => ['required'],
            'major' => ['required'],

        ], [
            'title.required' => 'กรุณาใส่คำนำหน้าชื่อ',
            'fname.required' => 'กรุณากรอกชื่อ',
            'lname.required' => 'กรุณากรอกนามสกุล',
            'email.unique' => 'อีเมลล์นี้ไม่สามารถใช้ได้',
            'password.confirmed' => 'ยืนยันรหัสผ่านไม่ถูกต้อง',
            'student_id.required' => 'กรุณากรอกรหัสนักศึกษา',
            'student_id.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'student_id.size' => 'กรุณากรอกไม่เกิน 11 ตัว',
            'tel.required' => 'กรุณากรอกเบอร์โทรศัพท์',
            'tel.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'tel.size' => 'กรุณากรอกไม่เกิน 10 ตัว',
            'type.required' => 'กรุณาเลือกตำแหน่ง',
            'major.required' => 'กรุณาระบุสาขา',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors()->add("InsertError","error"))->withInput();
        }
       $user = User::create([
            'title' => $request['title'],
            'firstname' => $request['fname'],
            'lastname' => $request['lname'],
            'role_id' => $request['type'],
            'major_id' => $request['major'],
            'email' => $request['email'],
            'telephone' => $request['tel'],
            'password' => Hash::make($request['password']),
            'student_id' => $request['student_id'],
        ]);


        return redirect()->back()->with("success","เพิ่มผู้ใช้สำเร็จ");

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(User $user)
    {
        $major = $user->major()->get();

        return  Response::json(array(
            "user" => $user,
            "major" => $major
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return  redirect()->back()->with('success', 'เยี่ยมจริงๆ ๆ ๆ') ;
    }
}
