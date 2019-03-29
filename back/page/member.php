<?php 
require '../../server/server.php';
$sql_fac = "SELECT * FROM `fac` ";
$re_fac = mysqli_query($con,$sql_fac);
$fac = '<option disabled selected value="">กรุณาเลือกคณะ</option>';
while($r_fac = mysqli_fetch_array($re_fac)){
    $fac.= '<option value="'.$r_fac['fac_id'].'">'.$r_fac['name'].'</option>';
}
?>
<div class="container-fluid ">
    <h3>ค้นหา : สมาชิก</h3>
    <hr>

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
                        <input type="checkbox" class="form-check-input" value="conformer">ผู้มีอำนาจลงนามอนุมัติ
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
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-outline-info"><i class="fas fa-search" style=""></i>
                        ค้นหา</button>
                </div>
            </div>

            <!-- start modal new user -->
            <div class="modal fade" id="add_user" tabindex="-1" role="dialog">
                <!-- setup modal size : xl -->
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <form method="post" id="form_regis">
                            <div class="modal-header">
                                <label>เพิ่มข้อมูล : </label>
                            </div>
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">รหัสผู้ใช้งาน</label>
                                    <div class="col">
                                        <input type="text" name="user_name" class=" form-control"
                                            placeholder="Username">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">รหัสผ่าน</label>
                                    <div class="col">
                                        <input type="password" name="pass" id="pass" class="form-control"
                                            placeholder="Password">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">ยืนยันรหัสผ่าน</label>
                                    <div class="col">
                                        <input type="password" name="con_pass" id="con_pass" class="form-control"
                                            placeholder="Con-Password">
                                    </div>
                                </div>
                                <p id="pass_p"></p>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">คำนำหน้าชื่อ</label>
                                    <div class="col">
                                        <input type="text" name="title" class="form-control" placeholder="Title">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">ชื่อ-นามสกุล</label>
                                    <div class="col">
                                        <input type="text" name="name" class="form-control" placeholder="name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">อีเมล</label>
                                    <div class="col">
                                        <input type="text" name="email" class="form-control" placeholder="e-mail">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">เบอร์โทร</label>
                                    <div class="col">
                                        <input type="text" name="tel" class="form-control" placeholder="tel.">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-4 col-form-label">ประเภทผู้ใช้</label>
                                    <div class="col">
                                        <div class="form-group">
                                            <select class="form-control" name="role" id="role" required>
                                                <option selected disabled value="">Choose : role</option>
                                                <option value="3">ผู้ดูแลระบบ</option>
                                                <option value="2">ผู้มีอำนาจลงนามอนุมัติ</option>
                                                <option value="1">นักศึกษา</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row " id="div_rank">
                                    <label class="col-4 col-form-label">ตำแหน่ง</label>
                                    <div class="col">
                                        <input type="text" name="rank" id="rank" class="form-control"
                                            placeholder="rank">
                                    </div>
                                </div>
                                <div id="div_fac_major">
                                    <div class="form-group row" id="">
                                        <label class="col-4 col-form-label">คณะ</label>
                                        <div class="col">
                                            <select class="form-control custom-select" name="fac" id="faculty" required>
                                                <?php echo $fac ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row" id="">
                                        <label class="col-4 col-form-label">สาขา</label>
                                        <div class="col">
                                            <select class="form-control custom-select" name="mar" id="major" disabled
                                                required>
                                                <option disabled selected value="">กรุณาเลือกจากคณะก่อน</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <div class=" text-right ">
                                    <button type="submit" id="btn_regis">ยืนยัน</button>
                                    <button type="button" data-dismiss="modal">ยกเลิก</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- end modal new user -->

            <div class="table-responsive">
                <!-- start tabel -->
                <table class="table display table-striped table-bordered table-hover responsive nowrap table_table">
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
                            <th>
                                <button type="button" class="btn btn-success" data-toggle="modal"
                                    data-target="#add_user" id="btn_modal_regis">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </th>

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
                            <td>
                                <button class="btn "><i class="fas fa-user-edit" style="color:#FBBC05"></i></button>
                                <button class="btn "><i class="fas fa-trash" style="color:red"></i></button></td>
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
                            <td>
                                <button class="btn "><i class="fas fa-user-edit" style="color:#FBBC05"></i></button>
                                <button class="btn "><i class="fas fa-trash" style="color:red"></i></button></td>
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
                            <td>
                                <button class="btn "><i class="fas fa-user-edit" style="color:#FBBC05"></i></button>
                                <button class="btn "><i class="fas fa-trash" style="color:red"></i></button></td>
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
                            <td>
                                <button class="btn "><i class="fas fa-user-edit" style="color:#FBBC05"></i></button>
                                <button class="btn "><i class="fas fa-trash" style="color:red"></i></button></td>
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
                            <td>
                                <button class="btn "><i class="fas fa-user-edit" style="color:#FBBC05"></i></button>
                                <button class="btn "><i class="fas fa-trash" style="color:red"></i></button></td>
                        </tr>
                    </tbody>
                </table>
                <!-- end tabel -->
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('.table_table').DataTable();
    });
    //register

    //เปิด MODEL REGISTER
    $("#btn_model_regis").click(function (e) {
        e.preventDefault();
        $("#div_rank").hide();
        $("#div_fac_major").hide();
        $('#rank').prop("disabled", true);
        $('#faculty').prop('disabled', true);
        $("#form_regis input").prop("required", true);
    });

    //เมื่อเลือก Role
    $("#role").change(function (e) {
        e.preventDefault();
        $("#div_rank").hide();
        $("#div_fac_major").hide();
        if ($(this).val() == 1) {
            $("#div_fac_major").show();
            $('#rank').prop("disabled", true);
            $('#faculty').prop('disabled', false);
        } else {
            $("#div_rank").show();
            $('#rank').prop("disabled", false);
            $('#faculty').prop('disabled', true);
        }
    });

    //เช็ค PASS == CON_PASS
    $('#pass').keyup(function () {
        check_con_pass();
    });
    $('#con_pass').keyup(function (e) {
        check_con_pass();

    });

    function check_con_pass() {
        a = $('#pass').val();
        b = $('#con_pass').val();
        $('#pass_p').text(a + " " + b);
        conpass = $('#con_pass')[0];
        if (a != b) {
            conpass.setCustomValidity("Passwords Don't Match");

        } else {
            conpass.setCustomValidity('');
        }
    };
    //คณะ สาขา
    $('#faculty').change(function (e) {
        e.preventDefault();
        fac = $('#faculty').val();
        $.post("../../server/major.php", {
                data: fac
            },
            function (result) {
                if (fac != null) {
                    $("#major").html(result);
                    $('#major').prop("disabled", false);
                }
            }

        );
    });


    //form summit
    $('#form_regis').submit(function (e) {
        e.preventDefault();
        alert($("#form_regis").serialize());
    });

    //register end
</script>
<!-- <div class="w3-container-fluid w3-center w3-pink" style="margin:20px;max-height:100%;padding:30px;">
    <h1 style="color:gray;">เลือก : ชนิด</h1>
    <hr>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:300px;width:300px;font-size:50px; font-weight: 900;">แอดมิน</button>
    <button type="button" class="btn btn-outline-dark" style="margin:15px;height:300px;width:300px;font-size:50px; font-weight: 900;">ผู้มีอำนาจลงนามอนุมัติ</button>
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