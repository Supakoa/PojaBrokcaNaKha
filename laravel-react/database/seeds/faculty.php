<?php

use App\Faculty as AppFaculty;
use Carbon\Carbon;
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
            array(
                'name' => 'ครุศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาศาสตร์และเทคโนโลยี',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'มนุษยศาสตร์และสังคมศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'เทคโนโลยีอุตสาหกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'ศิลปกรรมศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาการจัดการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยพยาบาลและสุขภาพ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยสถาปัตยกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยสหเวชศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยนวัตกรรมและการจัดการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยนานาชาติ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยการภาพยนตร์ ศิลปะการแสดง และสื่อใหม่',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' => 'วิทยาลัยโลจิสติกส์และซัพพลายเชน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        );

        AppFaculty::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
