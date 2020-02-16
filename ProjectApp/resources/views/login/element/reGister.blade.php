@extends('layouts.loginTemplate')

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
            <form class="container h-100" action="{{url('/register')}}" method="post">
                @method('POST')
                @csrf
                @include('Incudes.registerFormInc')

                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <div class="text-center">
                        <button class="btn-sub text-center m-4" type="submit">ลงทะเบียน</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

