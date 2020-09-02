<?php

use App\User as appUser;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class admin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [[
            // 'major_id' => 1,
            'first_name' => 'admin',
            'last_name' => 'SSRU',
            'email' => 'a',
            'password' => Hash::make('a'),
//            'email' => 'admin@ssru.ac.th',
//            'password' => Hash::make('adminge@petition'),
            'title' => 'Mr.',
            'telephone' => 'admin telephone',
            'role_id' => 1,
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'first_name' => 'student',
            'last_name' => 'SSRU',
            'email' => 's',
            'password' => Hash::make('s'),
//            'email' => 'admin@ssru.ac.th',
//            'password' => Hash::make('adminge@petition'),
            'title' => 'Mr.',
            'telephone' => 'Student telephone',
            'major_id' => 1,
            'role_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'first_name' => 'T',
            'last_name' => 'SSRU',
            'email' => 't',
            'password' => Hash::make('t'),
//            'email' => 'admin@ssru.ac.th',
//            'password' => Hash::make('adminge@petition'),
            'title' => 'Mr.',
            'telephone' => 'Teacher telephone',
            'role_id' => 2,
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'นางสาว',
            'first_name' => 'ชลธิชา',
            'last_name' => 'ดีเสมอ',
            'email' => 'chonthicha@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0896652314',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'นาย',
            'first_name' => 'วันชนะ',
            'last_name' => 'อิ่มอก',
            'email' => 'wunchana@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0897823145',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'นางสาว',
            'first_name' => 'อารียา',
            'last_name' => 'กุลพรม',
            'email' => 'areeya@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0896652314',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'นาย',
            'first_name' => 'กิตติ',
            'last_name' => 'ผิวทอง',
            'email' => 'kitti@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0896652314',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'ดร.',
            'first_name' => 'ตะวัน',
            'last_name' => 'เข็มทอง',
            'email' => 'tawan@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0897456125',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'ดร.',
            'first_name' => 'ตะวัน',
            'last_name' => 'เข็มทอง',
            'email' => 'tawan@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0897456125',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ], [
            'title' => 'ดร.',
            'first_name' => 'ธีระยุทธ์',
            'last_name' => 'เติมแต้ม',
            'email' => 'tawan@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0877445136',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ],[
            'title' => 'ดร.',
            'first_name' => 'ศุภกิจ',
            'last_name' => 'กิจนะบำรุงศักดิ์',
            'email' => 'tawan@ssru.ac.th',
            'password' => Hash::make('1234'),
            'role_id' => 2,
//            'email' => 'admin@ssru.ac.th',
            'telephone' => '0877445136',
            'major_id' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]
        ];

        appUser::insert($data);

        // $admin = new appUser();
        // $admin->major_id = 0;
        // $admin->username = 'admin@ssru.ac.th';
        // $admin->password = Hash::make('adminge@petition');
        // $admin->title = 'Mr.';
        // $admin->name = 'adminstrator';
        // $admin->email = 'admin@ssru.ac.th';
        // $admin->telephone = 'admin telephone';
        // $admin->role = 1;
        // $admin->save();

    }
}
