<?php 
require '../../server/server.php';

if(isset($_SESSION['online'])&&isset($_SESSION['id'])){
    if($_SESSION['online']!=1){
        $_SESSION['check_login'] = 1;
        header("Location: ../../index.php");
        $_SESSION['alert'] = 1;
        exit();
    }
}else{
    $_SESSION['check_login'] = 1;
        header("Location: ../../index.php");
        $_SESSION['alert'] = 2;
        exit();
}

$id = $_SESSION['id'];


// user
//check edit
if (isset($_POST['btn_edit'])) {
    $new_n = $_POST['new_name'];
    $new_tel = $_POST['new_num'];
    $new_pass = $_POST['new_pass'];
    $new_mar = $_POST['mar'];
    if(mysqli_query($con, "UPDATE `user` SET `password`='$new_pass',`name`='$new_n',`tel`='$new_tel',major_id='$new_mar' WHERE `user_id`= '$id'")){
        $_SESSION['alert'] = 3;
    }else{
        $_SESSION['alert'] = 4;
    }
}
$sql_user = "SELECT user.user_id, user.title, user.name, user.password, user.tel, user.email, major.name AS majorname, fac.name AS facname, fac.fac_id, user.major_id FROM `user`, `major`, `fac` WHERE user.major_id = major.mar_id AND major.fac_id = fac.fac_id AND user.user_id = '$id'";
$re_user = mysqli_query($con, $sql_user);
$row_user = mysqli_fetch_array($re_user);

//fac
$sql_fac = "SELECT * FROM `fac` ";
$re_fac = mysqli_query($con, $sql_fac);
$fac = '<option disabled selected value="' . $row_user['fac_id'] . '">' . $row_user['facname'] . '</option>';
while ($r_fac = mysqli_fetch_array($re_fac)) {
    $fac .= '<option value="' . $r_fac['fac_id'] . '">' . $r_fac['name'] . '</option>';
}


?>



<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>User 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="../picture/icon.png" />
    <link rel="stylesheet" href="../style.css">


    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- sweet alert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.33.1/dist/sweetalert2.all.min.js"></script>
    <!-- datatable -->
    <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.css"/> -->
    <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css"> -->



</head>

<body>

    <!-- navbar -->

    <div class="container-fluid fixed-top" style="background-color:#3782EB;">
        <?php require 'other/navbars.php'; ?>
    </div>
    <!-- navbar -->

    <!-- body -->
    <section class="container-fluid Gfonts" style="background-color:#E4EEFC">
        <div class="container" style="background-color:#AECDF7">
            <br><br>

            <?php //require 'other/news.php'; ?>

            <div class="card">
                <div class="card-header text-center" style="background-color:#3782EB">
                    <h3>ประวัติส่วนตัว</h3>
                </div>
                <div class="card-body" style="background-color:#F7FAFE">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8 ">
                            <div class="table-responsive">
                                <table class="table table-hover overflow responsive nowrap display">
                                    <tbody>
                                        <tr>
                                            <th scope="row">ชื่อ - นามสกุล</th>
                                            <td id="name_edit"><?php echo $row_user['title'] . ' ' . $row_user['name']; ?></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">รหัสนักศึกษา</th>
                                            <td id="num_edit"><?php echo $row_user['user_id']; ?></td>

                                        </tr>
                                       
                                        <tr>
                                            <th scope="row">เบอร์โทรศัพท์</th>
                                            <td id="num_edit"><?php echo $row_user['tel']; ?></td>

                                        </tr>
                                        <tr>
                                            <th scope="row">อีเมล์</th>
                                            <td id="num_edit"><?php echo $row_user['email']; ?></td>

                                        </tr>
                                        <tr>
                                            <th scope="row">คณะ/สาขา</th>
                                            <td id="mail_edit"><?php echo $row_user['facname'] . ' ' . $row_user['majorname']; ?></td>

                                        </tr>
                                        <tr>
                                            <th scope="row">แก้ไข</th>

                                            <td>
                                                <!-- edit infor Modal -->
                                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#edit">
                                                    แก้ไข
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </div>
            </div><br>
        </div><br>
    </section><!-- body -->

    <div class="container-fluid" style="background-color:#87B4F3">
        <div class="container">
            <footer class="text-center" style="background-color:#87B4F3">
                <label>Create by: CEFStyle</label><br>
                <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
            </footer>
        </div>
    </div>


    <!-- edit infor Modal -->
    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="modaledit" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modaledit">แก้ไข</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="info.php" method="POST">
                    <div class="modal-body">
                        <div class="card-body">
                            <dl class="row">
                                <dt class="col-lg-4"><label for="name">ชื่อ - นามสกุล</label></dt>
                                <dt class="col-lg-8"><input class="form-control" id="new_name" name="new_name" type="text" value="<?php echo $row_user['name']; ?>" required><br></dt>

                               
                                <dt class="col-lg-4"><label for="num">เบอร์โทรศัพท์</label></dt>
                                <dt class="col-lg-8"><input class="form-control" id="new_num" name="new_num" type="text" value="<?php echo $row_user['tel']; ?>" required><br></dt>
                                <dt class="col-lg-4"><label for="faculty">คณะ/สาขา</label></dt>
                                <dt class="col-lg-8">
                                    <select class="form-control custom-select" name="fac" id="faculty" required>
                                        <?php echo $fac ?>
                                    </select>
                                </dt>
                                <dt class="col-lg-4"></dt>
                                <dt class="col-lg-8">
                                    <br>
                                    <select class="form-control custom-select" name="mar" id="major" required>
                                        <option selected value="<?php echo $row_user['major_id'] ?>"><?php echo $row_user['majorname'] ?></option>
                                    </select>

                                </dt>
                            </dl>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" name="btn_edit" class="btn btn-primary">Save
                            changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- edit infor Modal -->


    <!-- Jquery -->
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <!-- <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script> -->
    <!-- <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script> -->
    <script>
        //tap
        $(document).ready(function() {
            $(".nav-tabs a").click(function() {
                $(this).tab('show');
            });
            $('#edit').modal({
                keyboard: false,
                backdrop: 'static',
                show: false
            });
            $('.carousel').carousel({
                interval: 2000,
            });


            $('#btn').click(function() {
                // $('#name_edit').text("eieiei");
                old_name = $('#name_edit').text();
                old_pass = $('#pass_edit').text();
                old_num = $('#num_edit').text();
                old_mail = $('#mail_edit').text();
            });

            $('#new_name').keyup(function(e) {
                var name = $('#new_name').val();
                if (name == '') {
                    $('#name_edit').text(old_name);
                } else {
                    $('#name_edit').text(name);
                }
            });
            $('#new_pass').keyup(function(e) {
                var pass = $('#new_pass').val();
                if (pass == '') {
                    $('#pass_edit').text(old_pass);
                } else {
                    $('#pass_edit').text(pass);
                }
            });
            $('#new_num').keyup(function(e) {
                var num = $('#new_num').val();
                if (num == '') {
                    $('#num_edit').text(old_num);
                } else {
                    $('#num_edit').text(num);
                }
            });
            $('#new_mail').keyup(function(e) {
                var mail = $('#new_mail').val();
                if (mail == '') {
                    $('#mail_edit').text(old_mail);
                } else {
                    $('#mail_edit').text(mail);
                }
            });
        });

        //time news

        //modal


        //datatable
        // $(document).ready(function () {
        //     $('#table_id').DataTable();
        // });
    </script>
    <script>
        $('#faculty').change(function(e) {
            e.preventDefault();
            fac = $('#faculty').val();
            // namefac = $('#faculty').text();
            // $('#eiei').append(fac);

            // alert(namefac);
            $.post("../../server/major.php", {
                    data: fac
                },
                function(result) {
                    if (fac != null) {
                        $("#major").html(result);
                        $('#major').prop("disabled", false);
                    }
                    // $("#del").modal("show");
                }

            );
        });
    </script>

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <?php require '../../server/alert.php'; ?>


</body>

</html> 