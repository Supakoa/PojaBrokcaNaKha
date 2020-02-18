{{-- Modal Edit --}}
<div class="modal fade bd-example-modal-lg" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content container">
        <div class="modal-header" style="border-bottom-color:#639CB4">
            <h5 class="modal-title txt-greenblue" id="CreateUserModalTitle">แก้ไขข้อมูล</h5>
            <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body txt-greenblue">
            <div class="row container">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="edit_email">อีเมล</label>
                        <input type="editemail" class="form-control "  name="edit_email" id="edit_email" placeholder="">

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="edit_password">รหัสผ่าน</label>
                        <input type="password" class="form-control" name="edit_password" id="edit_password" placeholder="">

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="edit_password_confirmation">ยืนยันรหัสผ่าน</label>
                        <input type="password" class="form-control" name="edit_password_confirmation" id="edit_password_confirmation" placeholder="">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="edit_student_id">รหัสนักศึกษา</label>
                        <input type="text" class="form-control " name="edit_student_id" id="edit_student_id" placeholder="">

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="edit_tel">เบอร์โทรศัพท์</label>
                        <input type="tel" class="form-control " name="edit_tel" id="edit_tel" placeholder="">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="edit_title">คำนำหน้า</label>
                        <input type="text" class="form-control" name="edit_title" id="edit_title">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="edit_fname">ชื่อ</label>
                        <input type="text" class="form-control " name="edit_fname" id="edit_fname" placeholder="">


                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="edit_lname">นามสกุล</label>
                        <input type="text" class="form-control "  name="edit_lname" id="edit_lname" placeholder="">

                    </div>
                </div>


                <div class="col-md-6">
                    <div class="form-group" id="group_fac" hidden>
                        <label for="edit_fac">คณะ</label>
                        <select class="form-control" id="edit_fac" >
                            <option disabled selected>เลือกคณะ</option>

                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group" id="group_major" hidden>
                        <label for="edit_major">สาขา</label>
                        <select class="form-control" id="edit_major" name="edit_major" disabled>
                            <option disabled selected>เลือกสาขา</option>
                        </select>
                    </div>
                </div>
                <div class=" form-group col-lg-4">
                    <label for="edit_type">ประเภทผู้ใช้</label>
                    <select class="form-control" name="edit_type" id="edit_type">
                        <option class=" disabled">ประเภทผู้ใช้...</option>
                        <option value="1">แอดมิน</option>
                        <option value="2">ผู้ตรวจ</option>
                        <option value="3">นักศึกษา</option>
                    </select>
                </div>

            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" form="regis" class="btn btn-warning m-auto">บันทึก</button>
        </div>
      </div>
    </div>
  </div>
{{-- Modal Edit --}}

