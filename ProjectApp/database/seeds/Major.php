<?php

use App\Major as AppMajor;
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
            array('faculty_id' => 1, 'name' => 'ภาษาไทย'),
            array('faculty_id' => 1, 'name' => 'ภาษาอังกฤษ'),
            array('faculty_id' => 1, 'name' => 'คณิตศาสตร์'),
            array('faculty_id' => 1, 'name' => 'การศึกษาปฐมวัย'),
            array('faculty_id' => 1, 'name' => 'วิทยาศาสตร์ทั่วไป'),
            array('faculty_id' => 1, 'name' => 'สังคมศึกษา'),
            array('faculty_id' => 1, 'name' => 'เทคโนโลยีการศึกษาและคอมพิวเตอร์'),

            // คณะวิทยาศาสตร์และเทคโนโลยี
            array('faculty_id' => 2, 'name' => 'วิทยาการคอมพิวเตอร์'),
            array('faculty_id' => 2, 'name' => 'เทคโนโลยีสารสนเทศ'),
            array('faculty_id' => 2, 'name' => 'คหกรรมศาสตร์'),
            array('faculty_id' => 2, 'name' => 'วิทยาศาสตร์และเทคโนโลยีการอาหาร'),
            array('faculty_id' => 2, 'name' => 'วิทยาศาสตร์สิ่งแวดล้อม'),
            array('faculty_id' => 2, 'name' => 'เคมี'),
            array('faculty_id' => 2, 'name' => 'คณิตศาสตร์สารสนเทศ'),
            array('faculty_id' => 2, 'name' => 'ชีววิทยา'),
            array('faculty_id' => 2, 'name' => 'เทคโนโลยีชีวภาพ'),
            array('faculty_id' => 2, 'name' => 'สถิติประยุกต์'),
            array('faculty_id' => 2, 'name' => 'จุลชีววิทยาอุตสาหกรรม'),
            array('faculty_id' => 2, 'name' => 'ฟิสิกส์ประยุกต์'),
            array('faculty_id' => 2, 'name' => 'นิติวิทยาศาสตร์'),
            array('faculty_id' => 2, 'name' => 'วิทยาศาสตร์การกีฬาและสุขภาพ'),

            // คณะมนุษยศาสตร์และสังคมศาสตร์
            array('faculty_id' => 3, 'name' => 'ภูมิศาสตร์และภูมิสารสนเทศ'),
            array('faculty_id' => 3, 'name' => 'ภาษาไทย'),
            array('faculty_id' => 3, 'name' => 'ภาษาอังกฤษ'),
            array('faculty_id' => 3, 'name' => 'ภาษาจีน'),
            array('faculty_id' => 3, 'name' => 'ภาษาญี่ปุ่น'),
            array('faculty_id' => 3, 'name' => 'ภาษาอังกฤษธุรกิจ'),
            array('faculty_id' => 3, 'name' => 'การจัดการโรงแรมและธุรกิจที่พัก'),
            array('faculty_id' => 3, 'name' => 'การจัดการอุตสาหกรรมท่องเที่ยวและบริการ'),
            array('faculty_id' => 3, 'name' => 'การจัดการสังคมและวัฒนธรรม(พัฒนาสังคม)'),
            array('faculty_id' => 3, 'name' => 'การจัดการสังคมและวัฒนธรรม(ทางวัฒนธรรม)'),
            array('faculty_id' => 3, 'name' => 'สารสนเทศศาสตร์(ระบบสารสนเทศเพื่อการจัดการ)'),
            array('faculty_id' => 3, 'name' => 'สารสนเทศศาสตร์(สารสนเทศศึกษา)'),
            array('faculty_id' => 3, 'name' => 'การบริหารงานตํารวจ'),
            array('faculty_id' => 3, 'name' => 'รัฐประศาสนศาสตร์(ปกครองท้องถิ่น)'),
            array('faculty_id' => 3, 'name' => 'รัฐประศาสนศาสตร์(บริหารรัฐกิจ)'),
            array('faculty_id' => 3, 'name' => 'รัฐประศาสนศาสตร์(บริหารภาครัฐและเอกชน)'),
            array('faculty_id' => 3, 'name' => 'นิติศาสตร์'),


            // คณะเทคโนโลยีอุตสาหกรรม
            array('faculty_id' => 4, 'name' => 'การออกแบบตกแต่งภายในและนิทรรศการ'),
            array('faculty_id' => 4, 'name' => 'การจัดการอุตสาหกรรม'),
            array('faculty_id' => 4, 'name' => 'อุตสาหกรรมการพิมพ์(เทคโนโลยีการพิมพ์)'),
            array('faculty_id' => 4, 'name' => 'อุตสาหกรรมการพิมพ์(การออกแบบสิ่งพิมพ์)'),
            array('faculty_id' => 4, 'name' => 'อุตสาหกรรมการพิมพ์(การจัดการอุตสาหกรรมการพิมพ์)'),
            array('faculty_id' => 4, 'name' => 'การบริหารทรัพยากรอาคาร'),
            array('faculty_id' => 4, 'name' => 'การออกแบบกราฟิกและมัลติมีเดีย'),
            array('faculty_id' => 4, 'name' => 'เทคโนโลยีไฟฟ้า(ไฟฟ้าอุตสาหกรรม)'),
            array('faculty_id' => 4, 'name' => 'เทคโนโลยีไฟฟ้า(อิเล็กทรอนิกส์)'),
            array('faculty_id' => 4, 'name' => 'เทคโนโลยีไฟฟ้า(พลังงาน)'),
            array('faculty_id' => 4, 'name' => 'เทคโนโลยีความปลอดภัยและอาชีวอนามัย'),
            array('faculty_id' => 4, 'name' => 'การออกแบบผลิตภัณฑ์อุตสาหกรรม(การออกแบบผลิตภัณฑ์อุตสาหกรรม)'),
            array('faculty_id' => 4, 'name' => 'การออกแบบผลิตภัณฑ์อุตสาหกรรม(นวัตกรรมการออกแบบและธุรกิจสร้างสรรค์)'),
            array('faculty_id' => 4, 'name' => 'เทคโนโลยีคอมพิวเตอร์เพื่องานสถาปัตยกรรม'),
            array('faculty_id' => 4, 'name' => 'วิศวกรรมคอมพิวเตอร์'),

            // คณะศิลปกรรมศาสตร์
            array('faculty_id' => 5, 'name' => 'จิตรกรรม'),
            array('faculty_id' => 5, 'name' => 'การออกแบบเครื่องแต่งกาย'),
            array('faculty_id' => 5, 'name' => 'การออกแบบนิเทศศิลป์'),
            array('faculty_id' => 5, 'name' => 'การออกแบบผลิตภัณฑ์สร้างสรรค์'),
            array('faculty_id' => 5, 'name' => 'ดนตรี'),
            array('faculty_id' => 5, 'name' => 'ศิลปะการแสดง(นาฏศิลป์ไทย)'),
            array('faculty_id' => 5, 'name' => 'ศิลปะการแสดง(ศิลปะการละคร)'),

            // คณะวิทยาการจัดการ
            array('faculty_id' => 6, 'name' => 'วารสารศาสตร์'),
            array('faculty_id' => 6, 'name' => 'การประชาสัมพันธ์และการสื่อสารองค์กร'),
            array('faculty_id' => 6, 'name' => 'การโฆษณาและสื่อสารการตลาด'),
            array('faculty_id' => 6, 'name' => 'วิทยุกระจายเสียงและวิทยุโทรทัศน์'),
            array('faculty_id' => 6, 'name' => 'ภาพยนตร์และสื่อดิจิทัล'),
            array('faculty_id' => 6, 'name' => 'เศรษฐศาสตร์ธุรกิจ'),
            array('faculty_id' => 6, 'name' => 'การบัญชี'),
            array('faculty_id' => 6, 'name' => 'การเงินการธนาคาร'),
            array('faculty_id' => 6, 'name' => 'ธุรกิจระหว่างประเทศ'),
            array('faculty_id' => 6, 'name' => 'การบริหารทรัพยากรมนุษย์'),
            array('faculty_id' => 6, 'name' => 'การประกอบการธุรกิจ'),
            array('faculty_id' => 6, 'name' => 'การจัดการธุรกิจบริการ'),
            array('faculty_id' => 6, 'name' => 'การตลาด'),
            array('faculty_id' => 6, 'name' => 'คอมพิวเตอร์ธุรกิจ'),

            // วิทยาลัยพยาบาลและสุขภาพ
            array('faculty_id' => 7, 'name' => 'พยาบาลศาสตร์'),

            // วิทยาลัยสถาปัตยกรรม
            array('faculty_id' => 8, 'name' => 'สถาปัตยกรรม'),

            // วิทยาลัยสหเวชศาสตร์
            array('faculty_id' => 9, 'name' => 'วิทยาศาสตร์สุขภาพ(การดูแลสุขภาพเด็ก)'),
            array('faculty_id' => 9, 'name' => 'วิทยาศาสตร์สุขภาพ(การดูแลสุขภาพผู้สูงอายุ)'),
            array('faculty_id' => 9, 'name' => 'วิทยาศาสตร์สุขภาพ(การดูแลสุขภาพและความงาม)'),
            array('faculty_id' => 9, 'name' => 'เลขานุการการแพทย์และสาธารณสุข'),
            array('faculty_id' => 9, 'name' => 'การแพทย์แผนไทยประยุกต์'),
            array('faculty_id' => 9, 'name' => 'สาธารณสุขศาสตร์'),
            array('faculty_id' => 9, 'name' => 'การแพทย์แผนจีน'),

            // วิทยาลัยนวัตกรรมและการจัดการ
            array('faculty_id' => 10, 'name' => 'การจัดการระบบสารสนเทศเพื่อธุรกิจ'),
            array('faculty_id' => 10, 'name' => 'การจัดการคุณภาพ'),
            array('faculty_id' => 10, 'name' => 'การจัดการทุนมนุษย์และองค์กร'),
            array('faculty_id' => 10, 'name' => 'เทคโนโลยีสารสนเทศและการสื่อสารเพื่อการตลาด'),
            array('faculty_id' => 10, 'name' => 'รัฐศาสตร์'),

            // วิทยาลัยนานาชาติ
            array('faculty_id' => 11, 'name' => 'บริหารธุรกิจระหว่างประเทศ'),
            array('faculty_id' => 11, 'name' => 'การจัดการท่องเที่ยว'),
            array('faculty_id' => 11, 'name' => 'ธุรกิจการบิน'),
            array('faculty_id' => 11, 'name' => 'การโรงแรม(จัดการโรงแรม)'),
            array('faculty_id' => 11, 'name' => 'การโรงแรม(จัดการร้านอาหาร)'),

            // วิทยาลัยการภาพยนตร์ ศิลปะการแสดง และสื่อใหม่
            array('faculty_id' => 12, 'name' => 'ศิลปะภาพยนตร์()'),
            array('faculty_id' => 12, 'name' => 'ศิลปะภาพยนตร์()'),
            array('faculty_id' => 12, 'name' => 'การสร้างสรรค์และสื่อดิจิทัล(การออกแบบดิจิทัล)'),
            array('faculty_id' => 12, 'name' => 'การสร้างสรรค์และสื่อดิจิทัล(การตลาดดิจิทัล)'),

            // วิทยาลัยโลจิสติกส์และซัพพลายเชน
            array('faculty_id' => 13, 'name' => 'การจัดการโลจิสติกส์'),
            array('faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(ธุรกิจพาณิชยนาวี)'),
            array('faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการธุรกิจค้าปลีก)'),
            array('faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการโซ่อุปทานธุรกิจอาหารและบริการ)'),
            array('faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการการขนส่ง)'),
            array('faculty_id' => 13, 'name' => 'การจัดการซัพพลายเชนธุรกิจ(การจัดการการขนส่งสินค้าทางอากาศ)'),
            array('faculty_id' => 13, 'name' => 'การจัดการโลจิสติกส์'),
        );

        AppMajor::insert($data);

        // DB::table('faculties')->insert($data);
    }
}
