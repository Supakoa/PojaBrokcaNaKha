@extends('layouts.userTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/Login.css')}}">
@endpush

@section('login')
<div class="body-login">
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
                <a href="{{ url('/')}}" class="btn">เข้าสู่ระบบ</a>
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
                            <input type="text" class="form-control" name="name" id="name" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lname">นามสกุล</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="sID">รหัสนักศึกษา</label>
                            <input type="input" class="form-control" name="sID" id="sID" placeholder="">
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
                            <label for="cPass">ยืนยันรหัสผ่าน</label>
                            <input type="password" class="form-control" name="cPass" id="cPass" placeholder="">
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
                            <label for="num">เบอร์โทรศัพท์</label>
                            <input type="text" class="form-control" name="num" id="num" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="branch">สาขา</label>
                            <select class="form-control" id="branch">
                                <option disabled selected>เลือกคณะ</option>
                                @foreach ($fact as $row)
                                        <option>{{$row['name']}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="fac">คณะ</label>
                            <select class="form-control" id="fac">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
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
