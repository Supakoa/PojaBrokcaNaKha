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
                                data-target="#exampleModalScrollable">
                                <i class="fas fa-plus    "></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody class="nowrap">
                    <tr>
                        <td>59122519032</td>
                        <td>Somsainaja</td>
                        <td>นายสมชาย สุดกล้าหาญ</td>
                        <td>นักศึกษา</td>
                        <td>somsai@gmail.com</td>
                        <td>0922359402</td>
                        <td>เทคโนโลยีอุสาหกรรม</td>
                        <td>วิศวะกรรมคอมพิวเตอร์</td>
                        <td class="d-flex">
                            <button class="btn btn-outline-secondary m-1">
                                <i class="fas fa-pencil-alt"></i>
                            </button>

                            <button class="btn btn-outline-danger m-1">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


{{--Modal Add --}}
<div class="modal fade" id="exampleModalScrollable" data-backdrop="static" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
        <div class="modal-content container">
            <div class="modal-header" style="border-bottom-color:#639CB4">
                <h5 class="modal-title txt-greenblue" id="exampleModalScrollableTitle">เพิ่มข้อมูล</h5>
                <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body txt-greenblue">
                <form action="">
                    <div class="form-group">
                        <label for="username">รหัสผู้ใช้</label>
                        <input type="text" class="form-control" id="username"
                            placeholder="USERNAME">
                    </div>
                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input type="text" class="form-control" id="password"
                            placeholder="PASSWORD">
                    </div>
                    <div class="form-group">
                        <label for="name">ชื่อ - นามสกุล</label>
                        <input type="text" class="form-control" id="name"
                            placeholder="Your name...">
                    </div>
                    <div class="form-group">
                        <label for="type">ประเภทผู้ใช้</label>
                        <select class="form-control" id="type">
                            <option class=" disabled" >ประเภทผู้ใช้...</option>
                            <option>แอดมิน</option>
                            <option>ผู้ตรวจ</option>
                            <option>พนักงาน</option>
                            <option>นักศึกษา</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="eMail">อีเมล</label>
                        <input type="email" class="form-control" id="eMail"
                            placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="phone">เบอร์โทร</label>
                        <input type="text" class="form-control" id="phone"
                            placeholder="+66">
                    </div>
                    <div class="form-group">
                        <label for="facuty">คณะ</label>
                        <select class="form-control" id="facuty">
                            <option class=" disabled" >คณะ...</option>
                            <option>ครุศาสตร์</option>
                            <option>การจัดการ</option>
                            <option>เทคโนโลยีอุสาหกรรม</option>
                            <option>วิทยาศาสตร์</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="barnch">สาขา</label>
                        <select class="form-control" id="barnch">
                            <option class="disabled">สาขา...</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="border-top-color:#639CB4">
                <button type="button" class="btn btn-info m-auto">เพิ่ม</button>
            </div>
        </div>
    </div>
</div>

{{--Modal Edit --}}


