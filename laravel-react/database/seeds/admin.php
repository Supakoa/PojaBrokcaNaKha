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
        ]
            , [
                'first_name' => 'Teacher',
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
            ]];

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
