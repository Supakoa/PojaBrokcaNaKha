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
                <div class="row container">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email">อีเมล</label>
                            <input type="email" class="form-control  @error('email') is-invalid @enderror" value="{{ old('email') }}"  name="email" id="email" placeholder="">
                            @error('email')
                            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                                 <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="tel">เบอร์โทรศัพท์</label>
                            <input type="tel" class="form-control @error('tel') is-invalid @enderror" value="{{ old('tel') }}" name="tel" id="tel" placeholder="">
                            @error('tel')
                            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                                 <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="password">รหัสผ่าน</label>
                            <input type="password" class="form-control @error('password') is-invalid @enderror" value="{{ old('password') }}" name="password" id="password" placeholder="">
                            @error('password')
                            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                                 <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="password_confirmation">ยืนยันรหัสผ่าน</label>
                            <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="student_id">รหัสนักศึกษา</label>
                            <input type="number" class="form-control @error('student_id') is-invalid @enderror" value="{{ old('student_id') }}" name="student_id" id="student_id" placeholder="">
                            @error('student_id')
                            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="fname">ชื่อ</label>
                            <input type="text" class="form-control @error('fname') is-invalid @enderror" value="{{ old('fname') }}" name="fname" id="fname" placeholder="">
                            @error('fname')
                            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                            @enderror

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lname">นามสกุล</label>
                            <input type="text" class="form-control  @error('lname') is-invalid @enderror" value="{{ old('lname') }}" name="lname" id="lastname" placeholder="">
                            @error('lname')
                            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                            @enderror
                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="fac">คณะ</label>
                            <select class="form-control" id="fac">
                                <option disabled selected>เลือกคณะ</option>
                                @foreach ($faculties as $fac)
                            <option value="{{$fac->id}}" >{{$fac->name}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="branch">สาขา</label>
                            <select class="form-control" id="maj" disabled>
                                <option disabled selected>เลือกสาขา</option>

                            </select>
                        </div>
                    </div>

                </div>
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
