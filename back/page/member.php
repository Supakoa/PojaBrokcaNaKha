<div class="w3-container-fluid w3-center" style="margin:20px;max-height:100%;padding:30px;">
    <h1>ค้นหา : สมาชิก</h1>
    <hr>
    <br>
    <!-- <h1>เลือก : ค้นหา</h1>
    <hr>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:450px;width:450px;font-size:50px; font-weight: 900;">ทั้งหมด</button>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:450px;width:450px;font-size:50px; font-weight: 900;">แยกกลุ่ม</button> -->
    <div class="card">
        <div class="card-body">

            <!-- start form filter radio -->
            <div class="container-fluid">
                <label>กรองผู้ใช้งาน :</label>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="admin">แอดมิน
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="conformer">ผู้ตรวจ
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="student">นักศึกษา
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="all">เลือกทั้งหมด
                    </label>
                </div>
            </div>
            <!-- end form filter radio -->

            <div class="input-group mx-auto input-group-lg" style="width:500px;">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-outline-info"><i class="fas fa-search" style=""></i> ค้นหา</button>
                </div>

            </div>

            <!-- start modal new user -->
            <div class="modal fade" id="add_user" tabindex="-1" role="dialog">
                <!-- setup modal size : xl -->
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label>เพิ่มข้อมูล : </label>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row">
                                <label class="col-4 col-form-label">รหัสผู้ใช้งาน</label>
                                <div class="col">
                                    <input type="text" class=" form-control" placeholder="Username">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">รหัสผ่าน</label>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">ชื่อ-นามสกุล</label>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">ประเภทผู้ใช้</label>
                                <div class="col">
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option selected disabled>Choose : role</option>
                                            <option>admin</option>
                                            <option>sender</option>
                                            <option>student</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">ตำแหน่ง</label>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="rank">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">อีเมล</label>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="e-mail">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">เบอร์โทร</label>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="tel.">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">สาขา</label>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="major">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
            <!-- end modal new user -->

        </div>

        <div class="container-fluid">
            <!-- start tabel -->
            <table class="table table-sm table-striped table-bordered table-hover table_table">
                <thead>
                    <tr>
                        <th>รหัสผู้ใช้งาน</th>
                        <th>รหัสผ่าน</th>
                        <th>ชื่อ-นามสกุล</th>
                        <th>ประเภท</th>
                        <th>ตำแหน่ง</th>
                        <th>อีเมล</th>
                        <th>เบอร์โทร</th>
                        <th>คณะ</th>
                        <th>สาขา</th>
                        <th><button type="button" class="btn w3-circle w3-tiny btn-outline-success btn-hover w3-white"
                                data-toggle="modal" data-target="#add_user" style="font-size: 2px"><i class="fas fa-plus"
                                    style="color:green;margin-top:5px"></i></button></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>59122519032</td>
                        <td>Somchainaja</td>
                        <td>นาย สมชาย สุดกล้าหาญ</td>
                        <td>นักศึกษา</td>
                        <td>นักศึกษา</td>
                        <td>somchai@gmail.com</td>
                        <td>0859665422</td>
                        <td>เทคโนโลยีอุตสาหกรรม</td>
                        <td>วิศวกรรมคอมพิวเตอร์</td>
                        <td><button class="btn w3-border w3-border-yellow w3-round-large w3-white "><i class="fas fa-user-edit"
                                    style="color:#FBBC05"></i></button> <button class="btn w3-border w3-border-red w3-round-large w3-white "><i
                                    class="fas fa-trash" style="color:red"></i></button></td>
                    </tr>
                    <tr>
                        <td>59122519068</td>
                        <td>zaza1234</td>
                        <td>นางสาว สมหญิง ตั้งใจเรียน</td>
                        <td>นักศึกษา</td>
                        <td>นักศึกษา</td>
                        <td>somyhing@gmail.com</td>
                        <td>0889665412</td>
                        <td>เทคโนโลยีอุตสาหกรรม</td>
                        <td>ออกแบบกราฟิกและมัลติมีเดีย</td>
                        <td><button class="btn w3-border w3-border-yellow w3-round-large w3-white "><i class="fas fa-user-edit"
                                    style="color:#FBBC05"></i></button> <button class="btn w3-border w3-border-red w3-round-large w3-white "><i
                                    class="fas fa-trash" style="color:red"></i></button></td>
                    </tr>
                    <tr>
                        <td>59122519100</td>
                        <td>123456</td>
                        <td>นาย อัครเดช เดชะไชโย</td>
                        <td>นักศึกษา</td>
                        <td>นักศึกษา</td>
                        <td>maowmaew@gmail.com</td>
                        <td>0985641254</td>
                        <td>เทคโนโลยีอุตสาหกรรม</td>
                        <td>อุตสาหกรรมการพิมพ์</td>
                        <td><button class="btn w3-border w3-border-yellow w3-round-large w3-white "><i class="fas fa-user-edit"
                                    style="color:#FBBC05"></i></button> <button class="btn w3-border w3-border-red w3-round-large w3-white "><i
                                    class="fas fa-trash" style="color:red"></i></button></td>
                    </tr>
                    <tr>
                        <td>surasak.m</td>
                        <td>ge_surasak</td>
                        <td>นาย สุรศักดิ์ มงคล</td>
                        <td>เจ้าหน้าที่</td>
                        <td>พนักงาน</td>
                        <td>surasak@gmail.com</td>
                        <td>0965552147</td>
                        <td>-</td>
                        <td>-</td>
                        <td><button class="btn w3-border w3-border-yellow w3-round-large w3-white "><i class="fas fa-user-edit"
                                    style="color:#FBBC05"></i></button> <button class="btn w3-border w3-border-red w3-round-large w3-white "><i
                                    class="fas fa-trash" style="color:red"></i></button></td>
                    </tr>
                    <tr>
                        <td>adminnaja</td>
                        <td>ge_adminmin</td>
                        <td>นาย แอดมิน สูงสุด</td>
                        <td>ผู้ดูแลระบบ</td>
                        <td>แอดมิน</td>
                        <td>ge_admin@gmail.com</td>
                        <td>0888888888</td>
                        <td>-</td>
                        <td>-</td>
                        <td><button class="btn w3-border w3-border-yellow w3-round-large w3-white "><i class="fas fa-user-edit"
                                    style="color:#FBBC05"></i></button> <button class="btn w3-border w3-border-red w3-round-large w3-white "><i
                                    class="fas fa-trash" style="color:red"></i></button></td>
                    </tr>
                </tbody>
            </table>
            <!-- end tabel -->
        </div>

    </div>
</div>
<script>
$(document).ready(function () {
            $('.table_table').DataTable();   
            
});

</script>
<!-- <div class="w3-container-fluid w3-center w3-pink" style="margin:20px;max-height:100%;padding:30px;">
    <h1 style="color:gray;">เลือก : ชนิด</h1>
    <hr>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:300px;width:300px;font-size:50px; font-weight: 900;">แอดมิน</button>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:300px;width:300px;font-size:50px; font-weight: 900;">ผู้ตรวจ</button>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:300px;width:300px;font-size:50px; font-weight: 900;">นักศึกษา</button>
</div>

<div class="w3-container-fluid w3-center w3-lime" style="margin:20px;max-height:100%;padding:30px;">
    <h1 style="color:gray;">เลือก : ID</h1>
    <hr>
    <div class="input-group mx-auto input-group-lg" style="width:500px;">
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
        <div class="input-group-prepend">
            <button type="button" class="btn btn-info">ค้นหา</button>
        </div>
    </div>
</div> -->