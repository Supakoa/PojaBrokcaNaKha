<div class="card p-0 m-0">
    <div class="card-header text-center bg-header">
        <h4 class="text-light" >ค้นหาสมาชิก</h4>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table txt-greenblue table-hover display" id="userTable">
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
                            <button onclick="editUser({{$user->id}})" class="btn btn-outline-secondary m-1" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button type="button" onclick="deleteUser({{$user->id}})" class="btn btn-outline-danger m-1">
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

@include('adminElement.users.usersContent.modal.addModal')
@include('adminElement.users.usersContent.modal.editModal')

@if (isset($Users))
    <form id="deleteForm" method="post">
        @csrf
        @method('DELETE')
    </form>
@endif





@push('js')
    <script>

     $(document).ready(function () {
    $('#userTable').DataTable();

    @if($errors->any())
        $('#CreateUserModal').modal('show');
    @endif

     });

        function deleteUser(id){
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
            }
        function editUser(id){
            $.getJSON("{{url("/admin/users/")}}/" + id + "/edit",
                function (user, textStatus, jqXHR) {
                    $('#edit_email').val(user.email);
                    $('#edit_student_id').val(user.student_id);
                    $('#edit_tel').val(user.telephone);
                    $('#edit_fname').val(user.firstname);
                    $('#edit_lname').val(user.lastname);
                    // $('#edit_student_id').val(user.student_id);

                    console.log(user);

                }
            );
        }
    </script>
@endpush

