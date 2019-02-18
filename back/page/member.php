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
                    <button type="button" class="btn btn-info"><i class="fas fa-search" style="color:white;"></i> ค้นหา</button>
                </div>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add_user"><i class="fas fa-plus"
                        style="color:white;"></i> เพื่ม</button>
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
            <table class="table table-sm table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>รหัสผู้ใช้งาน</th>
                        <th>รหัสผ่าน</th>
                        <th>ชื่อ-นามสกุล</th>
                        <th>ประเภท</th>
                        <th>ตำแหน่ง</th>
                        <th>อีเมล</th>
                        <th>เบอร์โทร</th>
                        <th>สาขา</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>59122519032</td>
                        <td>นาย สมชาย สุดกล้าหาญ</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>59122519068</td>
                        <td>นางสาว สมหญิง ตั้งใจเรียน</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>59122519100</td>
                        <td>นาย อัครเดช เดชะไชโย</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <!-- end tabel -->
        </div>

    </div>
</div>

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