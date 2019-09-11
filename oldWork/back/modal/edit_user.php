<?php  
require '../../server/server.php';

// print_r($_POST);
if(isset($_POST['edit'])){
    $user_id = $_POST['edit'];
    $row_user = mysqli_fetch_array(mysqli_query($con,"SELECT * FROM `user` WHERE user_id = '$user_id' "));
    if($row_user['role']==1){
        $mar_id = $row_user['major_id'];
        $re_major = mysqli_query($con,"SELECT fac.fac_id,fac.name AS fac_name , major.mar_id ,major.name AS major_name  FROM `fac`,major WHERE  major.fac_id = fac.fac_id AND major.mar_id = '$mar_id'");
        if($row_major = mysqli_fetch_array($re_major)){
            
            $sql_fac = "SELECT * FROM `fac` ";
            $re_fac = mysqli_query($con,$sql_fac);
            $fac = '<option disabled selected value="'.$row_major['fac_id'].'">'.$row_major['fac_name'].'</option>';
            while($r_fac = mysqli_fetch_array($re_fac)){
            $fac.= '<option value="'.$r_fac['fac_id'].'">'.$r_fac['name'].'</option>';
            }
        }
    }
}

?>
<div class="modal fade" id="edit_user" tabindex="-1" role="dialog">
    <!-- setup modal size : xl -->
    <div class="modal-dialog ">
        <div class="modal-content">
            <form method="post" id="form_edit">
                <div class="modal-header">
                    <label>แก้ไขข้อมูล : </label>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label class="col-4 col-form-label">รหัสผู้ใช้งาน</label>
                        <div class="col">
                            <input type="text" name="user_name" class=" form-control" placeholder="Username"
                                value = "<?php echo $row_user['user_id'] ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-4 col-form-label">รหัสผ่าน</label>
                        <div class="col">
                            <input type="text" name="pass" id="pass" class="form-control" placeholder="Password"
                                value="<?php echo $row_user['password'] ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-4 col-form-label">คำนำหน้าชื่อ</label>
                        <div class="col">
                            <input type="text" name="title" class="form-control" placeholder="Title"
                                value="<?php echo $row_user['title'] ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-4 col-form-label">ชื่อ-นามสกุล</label>
                        <div class="col">
                            <input type="text" name="name" class="form-control" placeholder="name"
                                value="<?php echo $row_user['name'] ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-4 col-form-label">อีเมล</label>
                        <div class="col">
                            <input type="text" name="email" class="form-control" placeholder="e-mail"
                                value="<?php echo $row_user['email'] ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-4 col-form-label">เบอร์โทร</label>
                        <div class="col">
                            <input type="text" name="tel" class="form-control" placeholder="tel."
                                value="<?php echo $row_user['tel'] ?>">
                        </div>
                    </div>
                    <!-- <div class="form-group row">
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
                                </div> -->
                    <?php if($row_user['role']==1){ ?>
                    <div id="div_fac_major">
                        <div class="form-group row" id="">
                            <label class="col-4 col-form-label">คณะ</label>
                            <div class="col">
                                <select class="form-control custom-select" name="fac" id="faculty_edit" required>
                                    <?php echo $fac ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row" id="">
                            <label class="col-4 col-form-label">สาขา</label>
                            <div class="col">
                                <select class="form-control custom-select" name="mar" id="major_edit"  required>
                                    <option value="">กรุณาเลือกคณะก่อน</option>

                                    <option selected value="<?php echo $row_major['mar_id'] ?>">
                                        <?php echo $row_major['major_name'] ?></option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <?php }else{ 
                        // $role_id = $row_user['role'];
                        // $row_role = mysqli_fetch_array(mysqli_query($con,"SELECT * FROM role_id WHERE role_id = '$role_id' "));
                        ?>
                    <div class="form-group row " id="div_rank">
                        <label class="col-4 col-form-label">ตำแหน่ง</label>
                        <div class="col">
                            <input type="text" name="rank" id="rank" class="form-control" placeholder="rank" value="<?php echo $row_user['status'] ?>">
                        </div>
                    </div>
                    <?php } ?>
                </div>
                <div class="modal-footer">
                    <div class=" text-right ">
                        <button type="submit" id="btn_edit">ยืนยัน</button>
                        <button type="button" data-dismiss="modal">ยกเลิก</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
// $("#btn_edit").click(function (e) { 
//     e.preventDefault();
//     $("#form_edit").submit();
// });

 //form edit
 $(document).ready(function () {
    $("#form_edit input").prop("required", true);
 });
 $('#form_edit').submit(function (e) {
        e.preventDefault();
        $("#show_alert").load("../send_sql/sql_member.php", {
            edit : $("#form_edit").serialize(),odd_id : "<?php echo $_POST['odd_id'] ?>"
        }, function (data) {
            $('#edit_user').modal("hide");
            $('#edit_user').on('hidden.bs.modal', function (e) {
                $("#in_body").load("member.php");
            });
        });


    });
 //คณะ สาขา
 $('#faculty_edit').change(function (e) {
        e.preventDefault();
        fac = $('#faculty_edit').val();
        // alert(fac);
        $.post("../../server/major.php", {
                data: fac
            },
            function (result) {
                if (fac != null) {
                    $("#major_edit").html(result);
                    $('#major_edit').prop("disabled", false);
                }
            }

        );
    });
</script>