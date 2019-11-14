<?php

use App\User as appUser;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
        // appUser::insert([
        //     'major_id' => 0,
        //     'username' => 'admin@ssru.ac.th',
        //     'password' => Hash::make('adminge@petition'),
        //     'title' => 'Mr.',
        //     'name' => 'adminstrator',
        //     'email' => 'admin@ssru.ac.th',
        //     'telephone' => 'admin telephone',
        //     'role' => 1,
        // ]);

        $admin = new appUser();
        $admin->major_id = 0;
        $admin->username = 'admin@ssru.ac.th';
        $admin->password = Hash::make('adminge@petition');
        $admin->title = 'Mr.';
        $admin->name = 'adminstrator';
        $admin->email = 'admin@ssru.ac.th';
        $admin->telephone = 'admin telephone';
        $admin->role = 1;
        $admin->save();

    }
}
