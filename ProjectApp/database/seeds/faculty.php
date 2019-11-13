<?php

use App\Faculty as AppFaculty;
use Illuminate\Database\Seeder;

class faculty extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // data faculties
        $data = array(
            array('name' => 'ครุศาสตร์'),
            array('name' => 'วิทยาศาสตร์และเทคโนโลยี'),
            array('name' => 'มนุษยศาสตร์และสังคมศาสตร์'),
            array('name' => 'เทคโนโลยีอุตสาหกรรม'),
            array('name' => 'ศิลปกรรมศาสตร์'),
            array('name' => 'วิทยาการจัดการ'),
            array('name' => 'วิทยาลัยพยาบาลและสุขภาพ'),
            array('name' => 'วิทยาลัยสถาปัตยกรรม'),
            array('name' => 'วิทยาลัยสหเวชศาสตร์'),
            array('name' => 'วิทยาลัยนวัตกรรมและการจัดการ'),
            array('name' => 'วิทยาลัยนานาชาติ'),
            array('name' => 'วิทยาลัยการภาพยนตร์ ศิลปะการแสดง และสื่อใหม่'),
            array('name' => 'วิทยาลัยโลจิสติกส์และซัพพลายเชน'),
        );

        AppFaculty::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
