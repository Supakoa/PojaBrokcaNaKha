<?php

use Illuminate\Database\Seeder;
use App\Form as AppForm;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            role::class,
            admin::class,
            faculty::class,
            major::class,
            status::class,
            subject::class
        ]);

        $data = array(
            array(
                "id" => 1,
                "th_name" => "แบบคำร้องขอตรวตสอบผลการเรียน",
                "eng_name" => "The request form to check grades",
                "inputs" => '{"inputs" : [
                {
                    "type"=> 1,
                    "th_title": "เลือกวิชา",
                    "eng_title": "Choose your Subject",
                    "th_name": "วิชา",
                    "eng_name": "Subject",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 2,
                    "th_title": "เลือกกลุ่มเรียน",
                    "eng_title": "Choose your Student Group",
                    "th_name": "กลุ่มเรียน",
                    "eng_name": "Student Group",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                }
            ]}'
            ),
            array(
                "id" => 2,
                "th_name" => "แบบฟอร์มแจ้งสาเหตุขาดสอบรายวิชาทั่วไป",
                "eng_name" => "Form for reporting reasons for absent of general course examinations",
                "inputs" => '{"inputs" : [
                {
                    "type": 1,
                    "th_title": "เลือกวิชา",
                    "eng_title": "Choose Subject",
                    "th_name": "วิชา",
                    "eng_name": "Subject",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 2,
                    "th_title": "กรอกข้อมูลกลุ่มเรียน",
                    "eng_title": "Enter Student Group",
                    "th_name": "กลุ่มเรียน",
                    "eng_name": "Student Group",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 3,
                    "th_title": "เลือกประเภทการสอบ",
                    "eng_title": "Choose Type of Exam",
                    "th_name": "ประเภทการสอบ",
                    "eng_name": "Type of Exam",
                    "tag_type": "select",
                    "data": ["กลางภาค",  "ปลายภาค"],
                    "size": 6
                },
                {
                    "type": 4,
                    "th_title": "เลือกสาเหตุ",
                    "eng_title": "Enter Your cause",
                    "th_name": "สาเหตุ",
                    "eng_name": "cause",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 5,
                    "th_title": "เลือกนสำเนาบัตรนักศึกษา",
                    "eng_title": "Choose your copy of Student Card file",
                    "th_name": "สำเนาบัตรนักศึกษา",
                    "eng_name": "A copy of Student Card",
                    "tag_type": "input:file",
                    "data": "",
                    "size": 6
                }
            ]}'
            ),
            array(
                "id" => 3,
                "th_name" => "แบบคำร้องขอแก้ไขผลการเรียน",
                "eng_name" => "The request form to edit your grades",
                "inputs" => '{"inputs": [
                {
                    "type"=> 1,
                    "th_title": "เลือกวิชา",
                    "eng_title": "Choose Subject",
                    "th_name": "วิชา",
                    "eng_name": "Subject",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 2,
                    "th_title": "กรอกข้อมูลกลุ่มเรียน",
                    "eng_title": "Enter Student Group",
                    "th_name": "กลุ่มเรียน",
                    "eng_name": "Student Group",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 6,
                    "th_title": "เลือกปีการศึกษา",
                    "eng_title": "Enter Academic Year",
                    "th_name": "ปีการศึกษา",
                    "eng_name": "Academic Year",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 4,
                    "th_title": "เลือกสาเหตุ",
                    "eng_title": "Enter Your cause",
                    "th_name": "สาเหตุ",
                    "eng_name": "cause",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 5,
                    "th_title": "เลือกนสำเนาบัตรนักศึกษา",
                    "eng_title": "Choose your copy of Student Card file",
                    "th_name": "สำเนาบัตรนักศึกษา",
                    "eng_name": "A copy of Student Card",
                    "tag_type": "input:file",
                    "data": "",
                    "size": 6
                }
            ]}'
            ),
            array(
                "id" => 4,
                "th_name" => "แบบคำร้องขอสอบภายหลัง",
                "eng_name" => "Request Form for later examination",
                "inputs" => '{"inputs" : [
                {
                    "type": 1,
                    "th_title": "เลือกวิชา",
                    "eng_title": "Choose Subject",
                    "th_name": "วิชา",
                    "eng_name": "Subject",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 2,
                    "th_title": "กรอกข้อมูลกลุ่มเรียน",
                    "eng_title": "Enter Student Group",
                    "th_name": "กลุ่มเรียน",
                    "eng_name": "Student Group",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 3,
                    "th_title": "เลือกประเภทการสอบ",
                    "eng_title": "Choose Type of Exam",
                    "th_name": "ประเภทการสอบ",
                    "eng_name": "Type of Exam",
                    "tag_type": "select",
                    "data": ["กลางภาค",  "ปลายภาค"],
                    "size": 6
                },
                {
                    "type": 4,
                    "th_title": "เลือกสาเหตุ",
                    "eng_title": "Enter Your cause",
                    "th_name": "สาเหตุ",
                    "eng_name": "cause",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 7,
                    "th_title": "เลือกไฟล์หลักฐานสาเหตุ",
                    "eng_title": "Choose Your evidence cause file",
                    "th_name": "หลักฐานสาเหตุ",
                    "eng_name": "evidence cause",
                    "tag_type": "input:file",
                    "data": "",
                    "size": 6
                }
            ]}'
            ),
            array(
                "id" => 5,
                "th_name" => "แบบใบลาป่วยลากิจ",
                "eng_name" => "Form for Sick Leave",
                "inputs" => '{"inputs" : [
                {
                    "type": 1,
                    "th_title": "เลือกวิชา",
                    "eng_title": "Choose Subject",
                    "th_name": "วิชา",
                    "eng_name": "Subject",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 2,
                    "th_title": "กรอกข้อมูลกลุ่มเรียน",
                    "eng_title": "Enter Student Group",
                    "th_name": "กลุ่มเรียน",
                    "eng_name": "Student Group",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 8,
                    "th_title": "เลือกประเภทการลา",
                    "eng_title": "Choose Leave type",
                    "th_name": "ประเภทการลา",
                    "eng_name": "Leave type",
                    "tag_type": "select",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 4,
                    "th_title": "เลือกสาเหตุ",
                    "eng_title": "Enter Your cause",
                    "th_name": "สาเหตุ",
                    "eng_name": "cause",
                    "tag_type": "text",
                    "data": "",
                    "size": 6
                },
                {
                    "type": 9,
                    "th_title": "เลือกวันที่ลา",
                    "eng_title": "Choose leave day",
                    "th_name": "วันที่ลา",
                    "eng_name": "leave day",
                    "tag_type": "input:time",
                    "data": "",
                    "size": 12
                }
            ]}'
            ),
//        array(
//            "id": 6,
//            "th_name": "ใบคำร้องขอรหัสผ่านเข้าระบบ",
//            "eng_name": "Login password request form",
//            "inputs": [
//                {
//                    "type": 1,
//                    "th_title": "เลือกวิชา",
//                    "eng_title": "Choose Subject",
//                    "th_name": "วิชา",
//                    "eng_name": "Subject",
//                    "tag_type": "select",
//                    "data": "",
//                    "size": 6
//                },
//                {
//                    "type": 2,
//                    "th_title": "กรอกข้อมูลกลุ่มเรียน",
//                    "eng_title": "Enter Student Group",
//                    "th_name": "กลุ่มเรียน",
//                    "eng_name": "Student Group",
//                    "tag_type": "text",
//                    "data": "",
//                    "size": 6
//                },
//                {
//                    "type": 10,
//                    "th_title": "เลือกประเภทเว็ปไซส์",
//                    "eng_title": "Choose Website Type",
//                    "th_name": "ประเภทเว็ปไซส์",
//                    "eng_name": "Website Type",
//                    "tag_type": "select",
//                    "data": "",
//                    "size": 6
//                },
//                {
//                    "type": 4,
//                    "th_title": "เลือกสาเหตุ",
//                    "eng_title": "Enter Your cause",
//                    "th_name": "สาเหตุ",
//                    "eng_name": "cause",
//                    "tag_type": "text",
//                    "data": "",
//                    "size": 6
//                }
//            ]
//        },
//        {
//            "id": 7,
//            "th_name": "แบบคำร้องทั่วไป",
//            "eng_name": "General request form",
//            "inputs": [
//                {
//                    "type": 2,
//                    "th_title": "กรอกข้อมูลกลุ่มเรียน",
//                    "eng_title": "Enter Student Group",
//                    "th_name": "กลุ่มเรียน",
//                    "eng_name": "Student Group",
//                    "tag_type": "text",
//                    "data": "",
//                    "size": 6
//                },
//                {
//                    "type": 11,
//                    "th_title": "อธิบายสาเหตุ",
//                    "eng_title": "Enter Your cause",
//                    "th_name": "สาเหตุ",
//                    "eng_name": "cause",
//                    "tag_type": "textarea",
//                    "data": "",
//                    "size": 12
//                }
//            ]
//            )
        );

        AppForm::insert($data);


        factory(App\User::class, 100)->create()->each(function ($user) {
//            if ($user->role_id = 3){
                $documents = factory(App\Document::class,3)->make();
                $user->documents()->saveMany($documents);
//            }
        });
    }
}
