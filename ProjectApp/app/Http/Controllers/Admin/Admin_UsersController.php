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
            'tel' => ['required', 'numeric','digits:10'],
            'title' => ['required'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'type' => ['required'],
            'student_id' => ['numeric','digits:11', 'unique:users']
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
        if ($request['type'] == 3){
            $validator->sometimes('major','required');
            dd($validator);
            if($request->has('major')){

            }else{

            }
        }

            if ($request['type'] == 3) {

            # code...
        }elseif ($request['type'] == 2) {
            $validator = Validator::make($request->all(), [
                'fname' => ['required', 'string', 'max:255'],
                'lname' => ['required', 'string', 'max:255'],
                'student_id' => ['required', 'numeric','digits:11', 'unique:users'],
                'tel' => ['required', 'numeric','digits:10'],
                'title' => ['required'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'type' => ['required'],
                // 'major' => ['required'],

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
                // 'major.required' => 'กรุณาระบุสาขา',
            ]);
        } else {
            # code...
            $validator = Validator::make($request->all(), [
                'fname' => ['required', 'string', 'max:255'],
                'lname' => ['required', 'string', 'max:255'],
                // 'student_id' => ['required', 'numeric','digits:11', 'unique:users'],
                'tel' => ['required', 'numeric','digits:10'],
                'title' => ['required'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'type' => ['required'],
                // 'major' => ['required'],

            ], [
                'title.required' => 'กรุณาใส่คำนำหน้าชื่อ',
                'fname.required' => 'กรุณากรอกชื่อ',
                'lname.required' => 'กรุณากรอกนามสกุล',
                'email.unique' => 'อีเมลล์นี้ไม่สามารถใช้ได้',
                'password.confirmed' => 'ยืนยันรหัสผ่านไม่ถูกต้อง',
                // 'student_id.required' => 'กรุณากรอกรหัสนักศึกษา',
                // 'student_id.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
                // 'student_id.size' => 'กรุณากรอกไม่เกิน 11 ตัว',
                'tel.required' => 'กรุณากรอกเบอร์โทรศัพท์',
                'tel.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
                'tel.size' => 'กรุณากรอกไม่เกิน 10 ตัว',
                'type.required' => 'กรุณาเลือกตำแหน่ง',
                // 'major.required' => 'กรุณาระบุสาขา',
            ]);

        }



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

       if($user->major != null){
           return  Response::json(array(
               "user" => $user,
               "major" => $user->major,
               "faculty" =>$user->major->faculty,
               "role" => $user->role
           ));
       } else{
           return  Response::json(array(
               "user" => $user,
               "role" => $user->role
           ));
       }


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'edit_fname' => ['required', 'string', 'max:255'],
            'edit_lname' => ['required', 'string', 'max:255'],
            'edit_student_id' => ['required', 'numeric','digits:11', 'unique:users'],
            'edit_tel' => ['required', 'numeric','digits:10'],
            'edit_title' => ['required'],
            'edit_email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'edit_password' => ['required', 'string', 'min:8', 'confirmed'],
            'edit_type' => ['required'],
            'edit_major' => ['required'],

        ], [
            'edit_title.required' => 'กรุณาใส่คำนำหน้าชื่อ',
            'edit_fname.required' => 'กรุณากรอกชื่อ',
            'edit_lname.required' => 'กรุณากรอกนามสกุล',
            'edit_email.unique' => 'อีเมลล์นี้ไม่สามารถใช้ได้',
            'edit_password.confirmed' => 'ยืนยันรหัสผ่านไม่ถูกต้อง',
            'edit_student_id.required' => 'กรุณากรอกรหัสนักศึกษา',
            'edit_student_id.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'edit_student_id.size' => 'กรุณากรอกไม่เกิน 11 ตัว',
            'edit_tel.required' => 'กรุณากรอกเบอร์โทรศัพท์',
            'edit_tel.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'edit_tel.size' => 'กรุณากรอกไม่เกิน 10 ตัว',
            'edit_type.required' => 'กรุณาเลือกตำแหน่ง',
            'edit_major.required' => 'กรุณาระบุสาขา',
        ]);
//
        $user->title = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        $user->firstname = $request->get('edit_fname');
        return redirect()->back()->with('success', 'แก้ไขสำเร็จ');


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
