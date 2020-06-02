@extends('layouts.adminTemplate')

@section('main-content')
<h3 id="header" class="text-center w-100 mb-4">
        ข้อความถึงผู้ดูแลระบบ
    </h3>
    <div id="inBox" class="table-responsive ">
        <h3 id="header" class="text-center w-100 p-0 m-0">
            Inbox
        </h3>
        <table id="table_ans" class="table display table-hover table-striped bg-light rounded">
            <thead class="thead-dark">
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
                    <td><button class="btn btn-message" type="button" data-toggle="modal" data-target="#anser">ตอบ</button></td>
                </tr>
                <tr>
                    <td>15/02/2019</td>
                    <td>09 : 5 PM</td>
                    <td>59122519001</td>
                    <td>ผมเขียนเอกสารผิดส่งใหม่ได้ไหมครับ ?</td>
                    <td><button class="btn btn-message">ตอบ</button></td>
                </tr>
            </tbody>
        </table>
    </div>
<br>

<div id="outBox" class="table-responsive ">
        <h3 id="header" class="text-center w-100 p-0 m-0">
            Outbox
        </h3>
        <table id="table_detail" class="table display table-hover table-striped bg-light">
            <thead class="thead-dark">
                <tr>
                    <th>วันที่</th>
                    <th>เวลา</th>
                    <th>ID</th>
                    <th colspan="2">ข้อความ</th>
                </tr>
            </thead>
            <tbody class="">
                <tr>
                    <td>15/02/2019</td>
                    <td>10 : 58 PM</td>
                    <td>59122519095</td>
                    <td>ช่วยเช็คเอกสารให้หน่อยนะคะ</td>
                    <td><button class="btn btn-message" type="button" data-toggle="modal" data-target="#detail">รายละเอียด</button></td>
                </tr>

                <tr>
                    <td>15/02/2019</td>
                    <td>09 : 5 PM</td>
                    <td>59122519001</td>
                    <td>ผมเขียนเอกสารผิดส่งใหม่ได้ไหมครับ ?</td>
                    <td><button class="btn btn-message">รายละเอียด</button></td>
                </tr>

                <tr>
                    <td>15/02/2019</td>
                    <td>10 : 58 PM</td>
                    <td>59122519011</td>
                    <td>ถามเรื่องแบบฟอร์มหน่อยครับ</td>
                    <td><button class="btn btn-message">รายละเอียด</button></td>
                </tr>

                <tr>
                    <td>15/02/2019</td>
                    <td>10 : 58 PM</td>
                    <td>59122519099</td>
                    <td>สอบถามเรื่องใบคำร้อวครับ</td>
                    <td><button class="btn btn-message">รายละเอียด</button></td>
                </tr>
                <tr>
                    <td>15/02/2019</td>
                    <td>10 : 58 PM</td>
                    <td>59122519099</td>
                    <td>สอบถามเรื่องใบคำร้อวครับ</td>
                    <td><button class="btn btn-message">รายละเอียด</button></td>
                </tr>
                <tr>
                    <td>15/02/2019</td>
                    <td>10 : 58 PM</td>
                    <td>59122519099</td>
                    <td>สอบถามเรื่องใบคำร้อวครับ</td>
                    <td><button class="btn btn-message">รายละเอียด</button></td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection


@push('js')
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready( function () {
    $('#table_ans').DataTable();
    $('#table_detail').DataTable();
} );
</script>
@endpush


