<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\User;
use App\Faculty;
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
        // dd(User::all()->role);
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
        $this->validate($request, [
            'fname' => ['required', 'string', 'max:255'],
            'lname' => ['required', 'string', 'max:255'],
            'student_id' => ['required', 'numeric', 'unique:users'],
            'tel' => ['required', 'numeric'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'type' => ['required'],
            'major' => ['required'],
        ], [
            'fname.required' => 'กรุณากรอกชื่อ',
            'lname.required' => 'กรุณากรอกนามสกุล',
            'student_id.required' => 'กรุณากรอกรหัสนักศึกษา',
            'student_id.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'student_id.size' => 'กรุณากรอกไม่เกิน 11 ตัว',
            'tel.required' => 'กรุณากรอกเบอร์โทรศัพษ์',
            'tel.numeric' => 'กรุณากรอกเฉพาะตัวเลข',
            'tel.size' => 'กรุณากรอกไม่เกิน 10 ตัว',
            'type.required' => 'กรุณาเลือกตำแหน่ง',
            'major.required' => 'กรุณาระบุสาขา'
        ]);
       $user = User::create([
            'firstname' => $request['fname'],
            'lastname' => $request['lname'],
            'role' => $request['type'],
            'major_id' => $request['major'],
            'email' => $request['email'],
            'telephone' => $request['tel'],
            'password' => Hash::make($request['password']),
            'student_id' => $request['student_id'],
        ]);


        return redirect()->back();

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
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
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
    public function destroy(User $user, $id)
    {
        return $result = DB::table('users')->where('id', '=', $id)->delete();
    }
}
