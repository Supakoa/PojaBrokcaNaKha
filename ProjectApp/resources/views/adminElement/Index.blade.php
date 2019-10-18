@extends('layouts.adminTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
@endpush

@section('main')
<div class="container p-2">
    <h3 id="header" class="text-center w-100 ">
        ข้อความถึงผู้ดูแลระบบ
    </h3>
    <div id="inBox" class="table-responsive">
        <h3 id="header" class="text-center w-100">
            Inbox
        </h3>
        <table id="table_ans" class="table display table-hover p-5 table-striped bg-light">
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
    <div id="outBox" class="table-responsive">
        <h3 id="header" class="text-center w-100">
            Outbox
        </h3>
        <table id="table_detail" class="table display table-hover table-striped p-5 bg-light">
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
</div>
@endsection

@section('modal')
{{-- Anser --}}
<div class="modal fade" id="anser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
          Anser
        </div>
      </div>
</div>

{{-- detail --}}
<div class="modal fade" id="detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
          Detail
        </div>
      </div>
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

