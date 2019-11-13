<?php

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
        DB::table('users')->insert([
            'username' => '',
            'password' => Hash::make('adminge@petition'),
            'title' => 'Mr.',
            'name' => 'adminstrator',
            'email' => 'admin@ssru.ac.th',
            'telephone' => 'admin telephone',
            'role' => 'admin',
        ]);
    }
}
