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
                'th_name' => 'สุนทรียภาพกับชีวิต',
                'eng_name' => 'Aesthetic Appreciation',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEH0102',
                'th_name' => 'สังคมไทยในบริบทโลก',
                'eng_name' => 'Thai Society in Global Context',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEH0204',
                'th_name' => 'ความเป็นพลเมือง',
                'eng_name' => 'Civic Education',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0101',
                'th_name' => 'การใช้ภาษาไทย',
                'eng_name' => 'Thai Usage',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0102',
                'th_name' => 'ภาษาอังกฤษเพื่อการสื่อสารและการสืบค้น',
                'eng_name' => 'English for Communication and Informal Retrieval',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0103',
                'th_name' => 'ภาษาอังกฤษเพื่อการสื่อสารและทักษะการเรียน',
                'eng_name' => 'English for Communication and Study Skills',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEL0201',
                'th_name' => 'ภาษาไทยเชิงวิชาการ',
                'eng_name' => 'Thai for Academic Purposes',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0101',
                'th_name' => 'ชาววังสวนสุนันทา',
                'eng_name' => ''
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
