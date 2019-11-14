<?php

use App\Subject as AppSubject;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class subject extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // data subject
        $data = array(
            array(
                'code' => 'GEH0101',
                'name' => 'สุนทรียภาพกับชีวิต',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEH0102',
                'name' => 'สังคมไทยในบริบทโลก',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEH0204',
                'name' => 'ความเป็นพลเมือง',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0101',
                'name' => 'การใช้ภาษาไทย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0102',
                'name' => 'ภาษาอังกฤษเพื่อการสื่อสารและการสืบค้น',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0103',
                'name' => 'ภาษาอังกฤษเพื่อการสื่อสารและทักษะการเรียน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0201',
                'name' => 'ภาษาไทยเชิงวิชาการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0101',
                'name' => 'ชาววังสวนสุนันทา',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0113',
                'name' => 'แรงบันดาลใจแห่งชีวิต',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0207',
                'name' => 'ภาษาอังกฤษเพื่อการประกอบวิชาชีพ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0211',
                'name' => 'ภาษาจีน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0309',
                'name' => 'ชีวิตกับดิจิทัล',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0315',
                'name' => 'ชีวิตเลิกอ้วน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GES0101',
                'name' => 'เทคโนโลยีสารสนเทศเพื่อการสื่อสาร',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GES0102',
                'name' => 'วิทยาศาสตร์และเทคโนโลยีกับคุณภาพชีวิต',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GES0206',
                'name' => 'ชีวิตและสุขภาพ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        );

        AppSubject::insert($data);

    }
}
