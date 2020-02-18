
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
                    <div class=" form-group col-lg-6">
                        <label for="type">ประเภทผู้ใช้</label>
                        <select class="form-control" name="type" id="type">
                            <option class=" disabled">ประเภทผู้ใช้...</option>
                            <option value="1">แอดมิน</option>
                            <option value="2">ผู้ตรวจ</option>
                            <option value="3">นักศึกษา</option>
                        </select>
                    </div>
                    <div id="formAdd" class=""> @include('Includes.registerFormInc')</div>

                </form>
            </div>
            <div class="modal-footer" style="border-top-color:#639CB4">
                <button type="submit" form="regis" class="btn btn-info m-auto">เพิ่ม</button>
            </div>
        </div>
    </div>
</div>

{{--Modal Edit --}}
