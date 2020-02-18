<div class="row container">
    <div class="col-md-12">
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
    <div class="col-md-6">
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
            <label for="tel">เบอร์โทรศัพท์</label>
            <input type="tel" class="form-control @error('tel') is-invalid @enderror" value="{{ old('tel') }}" name="tel" id="tel" placeholder="">
            @error('tel')
            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                                 <strong>{{ $message }}</strong>
                            </span>
            @enderror
        </div>
    </div>
    <div class="col-md-2">
        <div class="form-group">
            <label for="title">คำนำหน้า</label>
            <input type="text" class="form-control @error('title') is-invalid @enderror" value="{{ old('title') }}" name="title" id="title">
            @error('title')
            <span class="invalid-feedback" style="border-radius:15px" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>
    <div class="col-md-4">
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
            <label for="major">สาขา</label>
            <select class="form-control" id="major" name="major" disabled>
                <option disabled selected>เลือกสาขา</option>
            </select>
        </div>
    </div>

</div>
@push('css')
    <meta name="csrf-token" content="{{ csrf_token() }}" />
@endpush

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
                    $("#major").html("<option disabled selected>เลือกสาขา</option>");
                    response.forEach(major => {
                        $("#major").append("<option value = '"+major.id+"' >"+major.name+"</option>");
                    });
                    $("#major").removeAttr("disabled");
                }
            });

        });


    </script>
@endpush
