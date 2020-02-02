@extends('layouts.loginTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/Login.css')}}">
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
            <form class="container h-100" action="{{url('/login')}}" method="POST">
                @csrf
                @method("POST")
                <h3>เข้าสู่ระบบ</h3>
                <div class="form-group p-5">
                    <label for="email">อีเมลล์</label>
                    <input id="email" class="form-control @error('email') is-invalid @enderror" name="email"
                        placeholder="อีเมลล์" value="{{ old('email') }}" type="email" autocomplete="email" required>
                    @error('email')
                    <span class="invalid-feedback" style="border-radius:15px" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                    <br>
                    <label for="pass">รหัสผ่าน</label>
                    <input id="password" name="password" type="password"
                        class="form-control @error('password') is-invalid @enderror" placeholder="รหัสผ่าน" required
                        autocomplete="current-password">
                    {{-- <div class="input-group-append">
                        <span id="showpassword" class="input-group-text"><i class="fas fa-eye"></i></span>
                    </div> --}}
                    @error('password')
                    <span class="invalid-feedback" style="border-radius:15px" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="container p-3 text-center">
                    <h1>reCAPTCHA</h1>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-sub text-center">เข้าสู่ระบบ</button>
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
                <a href="{{ url('/register')}}" class="btn">สมัครเข้าใช้งาน</a>
            </div>
        </div>
    </div>
</div>
@endsection
