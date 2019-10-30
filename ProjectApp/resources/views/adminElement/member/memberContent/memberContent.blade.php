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
                <thead>
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
                            <button class="btn shadow btn-info rounded-circle">
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
