<?php

use App\Role as appRole;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class role extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // data status
        $data = array(
            array(
                'name' => 'admin',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'approver',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'student',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        );

        appRole::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
