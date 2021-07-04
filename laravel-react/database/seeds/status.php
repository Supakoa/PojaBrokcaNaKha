<?php

use App\status as AppStatus;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class status extends Seeder
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
                'name' => 'ไม่ผ่าน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'ผ่าน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ),
            array(
                'name' => 'แก้ไข',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ),
            array(
                'name' => 'กำลังดำเนินการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ),
            array(
                'name' => 'อนุมัติ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ),
            array(
                'name' => 'ไม่อนุมัติ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ),
        );

        AppStatus::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
