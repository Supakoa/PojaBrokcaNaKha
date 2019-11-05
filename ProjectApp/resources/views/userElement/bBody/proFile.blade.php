@extends('userElement.index')


@section('middle')
<div class="card border-0 ">

        <div class="card-header text-center text-light bg-greenblue">
            <h5>ประวัติส่วนตัว</h5>
        </div>

    <div class="card-body bg-info p-3 ">
        <div class="d-flex container bg-light p-5">
            <div class="w-50 h-100 border-right border-info ">
                <dl class="row pl-5 txt-greenblue">
                    <dt class="col-md-12">
                        <p>
                            ชื่อ - นามสกุล
                        </p>
                    </dt>
                    <dt class="col-md-12">
                        <p>
                            รหัสผ่าน
                        </p>
                    </dt>
                    <dt class="col-md-12">
                        <p>
                            เบอร์โทรศัพท์
                        </p>
                    </dt>
                    <dt class="col-md-12">
                        <p>
                            อีเมล
                        </p>
                    </dt>
                </dl>
            </div>
            <div class="w-100 h-100 border-left border-info">
                <dl class="row pl-3 txt-greenblue">
                    <dt class="col-md-12">
                        <p>
                            นายตะวัน เข็มทอง
                        </p>
                    </dt>
                    <dt class="col-md-12">
                        <p>
                            16/01/2540
                        </p>
                    </dt>
                    <dt class="col-md-12">
                        <p>
                            095-3423-450
                        </p>
                    </dt>
                    <dt class="col-md-12">
                        <p>
                            singha@gmail.com
                        </p>
                    </dt>
                </dl>
            </div>
        </div>
        <div class="container text-center bg-light p-3">
            <button class="btn btn-warning text-light" type="button" data-toggle="modal" data-target="#editProfile">
                แก้ไข
            </button>
        </div>
    </div>
</div>
@endsection

@section('modal')
    <!-- Modal -->
<div class="modal fade" id="editProfile" tabindex="-1" role="dialog" aria-labelledby="editProfileTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content container">
            <div class="modal-header">
              <h5 class="modal-title txt-greenblue" id="editProfileTitle">แก้ไขข้อมูลส่วนตัว</h5>
              <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body txt-greenblue">
              <div class="form-group">
                  <label for="name" class="txt-greenblue">ชื่อ - นามสกุล</label>
                  <input type="text" class="form-control boder-greenBlue" id="name" placeholder="นายตะวัน เข็มทอง" >
              </div>
              <div class="form-group">
                    <label for="pass" class="txt-greenblue">รหัสผ่าน</label>
                    <input type="text" class="form-control boder-greenBlue" id="pass" placeholder="16/01/2540" >
                </div>
                <div class="form-group">
                        <label for="phone" class="txt-greenblue">เบอร์โทรศัพท์</label>
                        <input type="text" class="form-control boder-greenBlue" id="phone" placeholder="095-3423-450" >
                    </div>
                    <div class="form-group">
                            <label for="mail" class="txt-greenblue">อีเมล</label>
                            <input type="text" class="form-control boder-greenBlue" id="mail" placeholder="singha@gmail.com" >
                        </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="m-auto btn btn-info">บันทึก</button>
            </div>
          </div>
        </div>
      </div>
@endsection
