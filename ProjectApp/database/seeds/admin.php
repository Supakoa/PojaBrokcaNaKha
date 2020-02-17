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
        $data = [
            // 'major_id' => 1,
            'firstname' => 'admin',
            'lastname' => 'SSRU',
            'password' => Hash::make('adminge@petition'),
            'title' => 'Mr.',
            'email' => 'admin@ssru.ac.th',
            'telephone' => 'admin telephone',
            'role_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
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
