@extends('layouts.adminTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
@endpush

@section('main')
<div class="container">
        <h3 id="header" class="text-center w-100">
            ข้อความถึงผู้ดูแลระบบ
        </h3>
    <div id="inBox">
        <h3 id="header" class="text-center w-100">
            Inbox
        </h3>
        <table>
            <thead>
                <tr>
                    <th>วันที่</th>
                    <th>เวลา</th>
                    <th>ID</th>
                    <th colspan="2">ข้อความ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15/02/2019</td>
                    <td>10 : 58 PM</td>
                    <td>59122519095</td>
                    <td>ช่วยเช็คเอกสารให้หน่อยนะคะ</td>
                    <td><button>ตอย</button></td>
                </tr>

                <tr>
                        <td>15/02/2019</td>
                        <td>09 : 5 PM</td>
                        <td>59122519001</td>
                        <td>ผมเขียนเอกสารผิดส่งใหม่ได้ไหมครับ ?</td>
                        <td><button>ตอย</button></td>
                    </tr>

                <tr>
                        <td>15/02/2019</td>
                        <td>10 : 58 PM</td>
                        <td>59122519011</td>
                        <td>ถามเรื่องแบบฟอร์มหน่อยครับ</td>
                        <td><button>ตอย</button></td>
                    </tr>

                <tr>
                        <td>15/02/2019</td>
                        <td>10 : 58 PM</td>
                        <td>59122519099</td>
                        <td>สอบถามเรื่องใบคำร้อวครับ</td>
                        <td><button>ตอย</button></td>
                    </tr>
            </tbody>
        </table>
    </div>
    <div id="outBox">

    </div>
</div>
@endsection
