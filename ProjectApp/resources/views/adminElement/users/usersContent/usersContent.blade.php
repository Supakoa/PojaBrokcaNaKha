<div class="card p-0 m-0">
    <div class="card-header text-center bg-header">
        <h4 class="text-light">ค้นหาสมาชิก</h4>
    </div>
    <div class="card-body">
        <div class="row justify-content-end">
            <div class="col-md-5">
                <div class="input-group mb-3 w-75 float-right">
                    <input type="text" class="form-control border-right-0 boder-greenBlue txt-greenblue"
                           placeholder="SEARCH" aria-label="SEARCH" aria-describedby="button-addon2">
                    <div class="input-group-append ">
                        <button class="btn btn-outline-info border-left-0" type="button" id="button-addon2"><i
                                class="fas fa-search"></i></button>
                    </div>
                </div>

                <div class="input-group mb-3 w-50 float-right">
                    <select class="custom-select boder-greenBlue txt-greenblue" id="inputGroupSelect02">
                        <option selected>กรองสถานะ</option>
                        <option value="1">รหัสผู้ใช้</option>
                        <option value="2">รหัสผ่าน</option>
                        <option value="3">ชื่อ - นามสกุล</option>
                        <option value="4">ตำแหน่ง</option>
                        <option value="5">อีเมล</option>
                        <option value="6">เบอร์โทร</option>
                        <option value="7">คณะ</option>
                        <option value="8">สาขา</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table txt-greenblue table-hover">
                <thead class="table-info">
                <tr class="text-center">
                    <th>รหัสผู้ใช้</th>
                    <th>รหัสผ่าน</th>
                    <th>ชื่อ - นามสกุล</th>
                    <th>ตำแหน่ง</th>
                    <th>อีเมล</th>
                    <th>เบอร์โทร</th>
                    <th>คณะ</th>
                    <th>สาขา</th>
                    <th>
                        <button class="btn shadow btn-info rounded-circle" type="button" data-toggle="modal"
                                data-target="#CreateUserModal" id="btnCreateUser">
                            <i class="fas fa-plus    "></i>
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody class="nowrap">
                @foreach ($Users as $user)
                    <tr>
                        <td>{{$user->student_id ==null ? $user->id : $user->student_id}}</td>
                        <td>{{$user->email}}</td>
                        <td>{{$user->firstname}} {{$user->lastname}}</td>
                        <td>{{$user->role->name}}</td>
                        <td>{{$user->email}}</td>
                        <td>{{$user->telephone}}</td>
                        @if($user->major !=null)
                            <td>{{$user->major->faculty->name}}</td>
                            <td>{{$user->major->name}}</td>
                        @else
                            <td>ไม่ระบุ</td>
                            <td>ไม่ระบุ</td>
                        @endif
                        <td class="d-flex">
                            <button class="btn btn-outline-secondary m-1">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button type="button" onclick="deleteUser({{$user->id}})"
                                    class="btn btn-outline-danger m-1">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

@if (isset($Users))
    <form id="deleteForm" method="post">
        @csrf
        @method('DELETE')
    </form>
@endif

{{-- Modal Edit --}}
{{-- Modal Edit --}}


{{--Modal Add --}}
<div class="modal fade" id="CreateUserModal" data-backdrop="static" tabindex="-1" role="dialog"
     aria-labelledby="CreateUserModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
        <div class="modal-content container">
            <div class="modal-header" style="border-bottom-color:#639CB4">
                <h5 class="modal-title txt-greenblue" id="CreateUserModalTitle">เพิ่มข้อมูล</h5>
                <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body txt-greenblue">
                <form action="{{url('/admin/users')}}" method="post" id="regis">
                    @method('POST')
                    @csrf
                    @include('Incudes.registerFormInc')
                    <div class=" form-group col-lg-4">
                        <label for="type">ประเภทผู้ใช้</label>
                        <select class="form-control" name="type" id="type">
                            <option selected  disabled>ประเภทผู้ใช้...</option>
                            <option value="1">แอดมิน</option>
                            <option value="2">ผู้ตรวจ</option>
                            <option value="3">นักศึกษา</option>
                        </select>
                    </div>
                </form>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            <div class="modal-footer" style="border-top-color:#639CB4">
                <button type="submit" form="regis" class="btn btn-info m-auto">เพิ่ม</button>
            </div>
        </div>
    </div>
</div>

{{--Modal Edit --}}

@push('js')
    <script>

        $(document).ready(function () {
            @error('InsertError')
            $('#CreateUserModal').modal('show');
            @enderror
        });
        jq
        const deleteUser = (id) => {
            $('#deleteForm').attr("action", '{{ url("/admin/users") }}/' + id);
            Swal.fire({
                title: 'ยืนยันการลบ?',
                text: "ข้อมูลจะถูกลบออกจากฐานข้อมูล",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ลบ',
                cancelButtonText: 'ยกเลิก',
            }).then((result) => {
                if (result.value) {
                    $('#deleteForm').submit();
                }
            });
        };
    </script>
@endpush

