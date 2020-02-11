@extends('layouts.loginTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/Login.css')}}">
@endpush

@section('login')
<div class="body-login h-auto">
    <div class="form-register">
        <div class="box-text container">
            <dl class="row container p-5">
                <dd class="col-md-12">
                    <p class="m-0">PETTITION คืออะไร ?</p>
                    <span>เว็บไซต์ส่งแบบคำร้องของมหาวิทยาลัยราชภัฐสวนสุนันทา</span>
                    <hr>
                    <span>คุณต้องการเข้าสู่ระบบเพื่อส่งแบบคำร้องใช่หรือไม่ ?</span>
                </dd>
            </dl>
            <div class="text-center m-0 p-0">
                <a href="{{ url('/login')}}" class="btn">เข้าสู่ระบบ</a>
            </div>
        </div>
    </div>
    <div class="form-login container">
        <div class="head-login text-center">
            <div class="logo-head">
                <img class="p-0" src="{{url('images/logo.png')}}" alt="" width="100px" height="100px">
            </div>
            <p class="p-3">GE PETTITION</p>
        </div>
        <div class="body-login">
            <form class="container h-100" action="">
                <div class="row container">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">ชื่อ</label>
                            <input type="text" class="form-control" name="firstname" id="firstname" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lname">นามสกุล</label>
                            <input type="text" class="form-control" name="lastname" id="lastname" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="studid">รหัสนักศึกษา</label>
                            <input type="input" class="form-control" name="studid" id="studid" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="pass">รหัสผ่าน</label>
                            <input type="password" class="form-control" name="pass" id="pass" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="confirm">ยืนยันรหัสผ่าน</label>
                            <input type="password" class="form-control" name="confirm" id="confirm" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="mail">อีเมล</label>
                            <input type="email" class="form-control" name="mail" id="mail" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="numphone">เบอร์โทรศัพท์</label>
                            <input type="text" class="form-control" name="numphone" id="numphone" placeholder="">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="faculties">คณะ</label>
                            <select class="form-control" id="faculties">
                                <option disabled selected>เลือกคณะ</option>
                                @foreach ($faculties as $fac)
                            <option value="{{$fac->id}}" >{{$fac->name}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="major">สาขา</label>
                            <select class="form-control" id="major" disabled>
                                <option disabled selected>เลือกสาขา</option>

                            </select>
                        </div>
                    </div>

                </div>

                <div class="text-center">
                        <button class="btn-sub text-center m-4" type="submit">ลงทะเบียน</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@push('js')
<script>
    $.ajaxSetup({

headers: {

    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

}

});
    $("#fac").change(function (e) {
        e.preventDefault();
        // alert($(this).val())
        $.ajax({
            type: "post",
            url: "{{url('/getMajorByFacultyId')}}/"+$(this).val(),
            data: {"id":$(this).val()},
            dataType: "json",
            success: function (response) {
                $("#maj").html("<option disabled selected>เลือกสาขา</option>");
                response.forEach(major => {
                    $("#maj").append("<option value = '"+major.id+"' >"+major.name+"</option>");
                });
                $("#maj").removeAttr("disabled");
            }
        });

    });

    </script>
@endpush
