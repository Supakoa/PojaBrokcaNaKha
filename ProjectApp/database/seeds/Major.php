<?php

use App\Major as AppMajor;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use SebastianBergmann\FileIterator\Factory;

class major extends Seeder
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
            // คณะครุศาสตร์
            array(
                'faculty_id' => 1, 'name' => 'ภาษาไทย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 1, 'name' => 'ภาษาอังกฤษ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 1, 'name' => 'คณิตศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 1, 'name' => 'การศึกษาปฐมวัย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 1, 'name' => 'วิทยาศาสตร์ทั่วไป',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 1, 'name' => 'สังคมศึกษา',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 1, 'name' => 'เทคโนโลยีการศึกษาและคอมพิวเตอร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // คณะวิทยาศาสตร์และเทคโนโลยี
            array(
                'faculty_id' => 2, 'name' => 'วิทยาการคอมพิวเตอร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'เทคโนโลยีสารสนเทศ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'คหกรรมศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'วิทยาศาสตร์และเทคโนโลยีการอาหาร',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'วิทยาศาสตร์สิ่งแวดล้อม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'เคมี',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'คณิตศาสตร์สารสนเทศ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'ชีววิทยา',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'เทคโนโลยีชีวภาพ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'สถิติประยุกต์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'จุลชีววิทยาอุตสาหกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'ฟิสิกส์ประยุกต์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'นิติวิทยาศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 2, 'name' => 'วิทยาศาสตร์การกีฬาและสุขภาพ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // คณะมนุษยศาสตร์และสังคมศาสตร์
            array(
                'faculty_id' => 3, 'name' => 'ภูมิศาสตร์และภูมิสารสนเทศ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'ภาษาไทย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'ภาษาอังกฤษ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'ภาษาจีน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'ภาษาญี่ปุ่น',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'ภาษาอังกฤษธุรกิจ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'การจัดการโรงแรมและธุรกิจที่พัก',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'การจัดการอุตสาหกรรมท่องเที่ยวและบริการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'การจัดการสังคมและวัฒนธรรม(พัฒนาสังคม)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'การจัดการสังคมและวัฒนธรรม(ทางวัฒนธรรม)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'สารสนเทศศาสตร์(ระบบสารสนเทศเพื่อการจัดการ)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'สารสนเทศศาสตร์(สารสนเทศศึกษา)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'การบริหารงานตํารวจ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'รัฐประศาสนศาสตร์(ปกครองท้องถิ่น)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'รัฐประศาสนศาสตร์(บริหารรัฐกิจ)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'รัฐประศาสนศาสตร์(บริหารภาครัฐและเอกชน)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 3, 'name' => 'นิติศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),


            // คณะเทคโนโลยีอุตสาหกรรม
            array(
                'faculty_id' => 4, 'name' => 'การออกแบบตกแต่งภายในและนิทรรศการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'การจัดการอุตสาหกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'อุตสาหกรรมการพิมพ์(เทคโนโลยีการพิมพ์)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'อุตสาหกรรมการพิมพ์(การออกแบบสิ่งพิมพ์)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'อุตสาหกรรมการพิมพ์(การจัดการอุตสาหกรรมการพิมพ์)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'การบริหารทรัพยากรอาคาร',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'การออกแบบกราฟิกและมัลติมีเดีย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'เทคโนโลยีไฟฟ้า(ไฟฟ้าอุตสาหกรรม)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'เทคโนโลยีไฟฟ้า(อิเล็กทรอนิกส์)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'เทคโนโลยีไฟฟ้า(พลังงาน)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'เทคโนโลยีความปลอดภัยและอาชีวอนามัย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'การออกแบบผลิตภัณฑ์อุตสาหกรรม(การออกแบบผลิตภัณฑ์อุตสาหกรรม)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'การออกแบบผลิตภัณฑ์อุตสาหกรรม(นวัตกรรมการออกแบบและธุรกิจสร้างสรรค์)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'เทคโนโลยีคอมพิวเตอร์เพื่องานสถาปัตยกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 4, 'name' => 'วิศวกรรมคอมพิวเตอร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // คณะศิลปกรรมศาสตร์
            array(
                'faculty_id' => 5, 'name' => 'จิตรกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 5, 'name' => 'การออกแบบเครื่องแต่งกาย',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 5, 'name' => 'การออกแบบนิเทศศิลป์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 5, 'name' => 'การออกแบบผลิตภัณฑ์สร้างสรรค์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 5, 'name' => 'ดนตรี',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 5, 'name' => 'ศิลปะการแสดง(นาฏศิลป์ไทย)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 5, 'name' => 'ศิลปะการแสดง(ศิลปะการละคร)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // คณะวิทยาการจัดการ
            array(
                'faculty_id' => 6, 'name' => 'วารสารศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การประชาสัมพันธ์และการสื่อสารองค์กร',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การโฆษณาและสื่อสารการตลาด',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'วิทยุกระจายเสียงและวิทยุโทรทัศน์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'ภาพยนตร์และสื่อดิจิทัล',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'เศรษฐศาสตร์ธุรกิจ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การบัญชี',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การเงินการธนาคาร',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'ธุรกิจระหว่างประเทศ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การบริหารทรัพยากรมนุษย์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การประกอบการธุรกิจ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การจัดการธุรกิจบริการ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'การตลาด',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 6, 'name' => 'คอมพิวเตอร์ธุรกิจ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยพยาบาลและสุขภาพ
            array(
                'faculty_id' => 7, 'name' => 'พยาบาลศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยสถาปัตยกรรม
            array(
                'faculty_id' => 8, 'name' => 'สถาปัตยกรรม',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยสหเวชศาสตร์
            array(
                'faculty_id' => 9, 'name' => 'วิทยาศาสตร์สุขภาพ(การดูแลสุขภาพเด็ก)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 9, 'name' => 'วิทยาศาสตร์สุขภาพ(การดูแลสุขภาพผู้สูงอายุ)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 9, 'name' => 'วิทยาศาสตร์สุขภาพ(การดูแลสุขภาพและความงาม)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 9, 'name' => 'เลขานุการการแพทย์และสาธารณสุข',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 9, 'name' => 'การแพทย์แผนไทยประยุกต์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 9, 'name' => 'สาธารณสุขศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 9, 'name' => 'การแพทย์แผนจีน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยนวัตกรรมและการจัดการ
            array(
                'faculty_id' => 10, 'name' => 'การจัดการระบบสารสนเทศเพื่อธุรกิจ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 10, 'name' => 'การจัดการคุณภาพ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 10, 'name' => 'การจัดการทุนมนุษย์และองค์กร',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 10, 'name' => 'เทคโนโลยีสารสนเทศและการสื่อสารเพื่อการตลาด',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 10, 'name' => 'รัฐศาสตร์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยนานาชาติ
            array(
                'faculty_id' => 11, 'name' => 'บริหารธุรกิจระหว่างประเทศ',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 11, 'name' => 'การจัดการท่องเที่ยว',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 11, 'name' => 'ธุรกิจการบิน',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 11, 'name' => 'การโรงแรม(จัดการโรงแรม)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 11, 'name' => 'การโรงแรม(จัดการร้านอาหาร)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยการภาพยนตร์ ศิลปะการแสดง และสื่อใหม่
            array(
                'faculty_id' => 12, 'name' => 'ศิลปะภาพยนตร์()',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 12, 'name' => 'ศิลปะภาพยนตร์()',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 12, 'name' => 'การสร้างสรรค์และสื่อดิจิทัล(การออกแบบดิจิทัล)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 12, 'name' => 'การสร้างสรรค์และสื่อดิจิทัล(การตลาดดิจิทัล)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),

            // วิทยาลัยโลจิสติกส์และซัพพลายเชน
            array(
                'faculty_id' => 13, 'name' => 'การจัดการโลจิสติกส์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(ธุรกิจพาณิชยนาวี)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการธุรกิจค้าปลีก)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการโซ่อุปทานธุรกิจอาหารและบริการ)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการการขนส่ง)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการการขนส่งสินค้าทางอากาศ)',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'faculty_id' => 13, 'name' => 'การจัดการโลจิสติกส์',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        );

        AppMajor::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
