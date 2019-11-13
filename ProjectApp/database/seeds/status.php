<?php

use App\status as AppStatus;
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
            array('name' => 'ไม่ผ่าน'),
            array('name' => 'ผ่าน'),
            array('name' => 'แก้ไข'),
            array('name' => 'กำลังดำเนินการ'),
            array('name' => 'อนุมัติ'),
            array('name' => 'ไม่อนุมัติ'),
        );

        AppStatus::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
