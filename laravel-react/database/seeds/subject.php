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
                'eng_name' => 'The Royal Court of Suandha',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0113',
                'th_name' => 'แรงบันดาลใจแห่งชีวิต',
                'eng_name' => 'Inspiration of Life',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0207',
                'th_name' => 'ภาษาอังกฤษเพื่อการประกอบวิชาชีพ',
                'eng_name' => 'English for Bussiness',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0211',
                'th_name' => 'ภาษาจีน',
                'eng_name' => 'Chinese',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0309',
                'th_name' => 'ชีวิตกับดิจิทัล',
                'eng_name' => 'Digital for Life',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GEN0315',
                'th_name' => 'ชีวิตเลิกอ้วน',
                'eng_name' => 'Never Get Fat Again',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GES0101',
                'th_name' => 'เทคโนโลยีสารสนเทศเพื่อการสื่อสาร',
                'eng_name' => 'Information Technology for Communication and Learning',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GES0102',
                'th_name' => 'วิทยาศาสตร์และเทคโนโลยีกับคุณภาพชีวิต',
                'eng_name' => 'Science and Technology for Quality of Life',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'code' => 'GES0206',
                'th_name' => 'ชีวิตและสุขภาพ',
                'eng_name' => 'Life and Health',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        );

        AppSubject::insert($data);

    }
}
