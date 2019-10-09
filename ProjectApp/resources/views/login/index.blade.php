@extends('layouts.userTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/Login.css')}}">
@endpush

@section('login')
<div class="body-login">
    <div class="form-login container">
        <div class="head-login text-center">
            <div class="logo-head">
                <img class="p-0" src="{{url('images/logo.png')}}" alt="" width="150px" height="150px">
            </div>
            <p class="p-3">GE PETTITION</p>
        </div>
        <div class="body-login">
            <form class="container" action="">
                <h3>เข้าสู่ระบบ</h3>
                <div class="form-group p-5">
                    <label for="userId">รหัสนักศึกษา/รหัสอาจารย์</label>
                    <input type="text" class="form-control" name="userId" id="userId" placeholder="">
                    <br>
                    <label for="pass">รหัสผ่าน</label>
                    <input type="password" class="form-control" name="pass" id="pass" placeholder="">
                </div>
                <div class="container p-3 text-center">
                    <h1>reCAPTCHA</h1>
                </div>
                <div class="text-center">
                    <button class="btn-sub text-center" type="submit">เข้าสู่ระบบ</button>
                </div>
            </form>
        </div>
    </div>
    <div class="form-register">
        <div class="box-text container">
            <dl class="row container p-5">
                <dd class="col-md-12">
                    <p class="m-0">PETTITION คืออะไร ?</p>
                    <span>เว็บไซต์ส่งแบบคำร้องของมหาวิทยาลัยราชภัฐสวนสุนันทา</span>
                    <hr>
                    <span>คุณต้องการส่งแบบคำร้องแต่ยังไม่ได้เปิดใช้งานใช่หรือไม่ ?</span>
                </dd>
            </dl>
            <div class="text-center m-0 p-0">
                <a href="#" class="btn">สมัครเข้าใช้งาน</a>
            </div>
        </div>
    </div>
</div>
@endsection
