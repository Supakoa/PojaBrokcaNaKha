<?php 
require '../../server/server.php';

if (isset($_SESSION['online']) && isset($_SESSION['id'])) {
    if ($_SESSION['online'] != 2) {
        $_SESSION['check_login'] = 1;
        header("Location: ../../index.php");
        $_SESSION['alert'] = 2;
        exit();
    }
} else {
    $_SESSION['check_login'] = 1;
    header("Location: ../../index.php");
    $_SESSION['alert'] = 2;
    exit();
}
$id = $_SESSION['id'];
//ส่งคำตอบ
if(isset($_POST['submit_ans'])){
    // รับค่าต่างๆ
    $insert_sql="temp";
    $paper_status = $_POST['paper_status'];
    $comment = $_POST['comment'];
    $form_id = $_POST['form_id'];
    $step = (int)$_POST['step_now'];
    // เช็คว่ามีไฟล์มาด้วยไหม
    if($_FILES['uplode_file']['name']!=null){
        $ext = pathinfo(basename($_FILES["uplode_file"]["name"]), PATHINFO_EXTENSION);
        $new_taget_name = 'uplode_file' . uniqid() . "." . $ext;
        $target_path = "../../uplode_file/";
        $upload_path = $target_path . $new_taget_name;
        $uploadOk = 1;
    
        $imageFileType = strtolower(pathinfo($new_taget_name, PATHINFO_EXTENSION));
    
        if ($_FILES["uplode_file"]["size"] > 60000000) {
            echo "Sorry, your file is too large.";
            $_SESSION['alert'] = 15;
            $uploadOk = 0;
        }
    
        // Allow certain file formats
        if ($imageFileType != "jpg" && $imageFileType != "png") {
            echo "Sorry, only JPG , PNG files are allowed.";
            $_SESSION['alert'] = 17;
            $uploadOk = 0;
        }
    
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
            $_SESSION['alert'] = 4;
        } else {
            if (move_uploaded_file($_FILES["uplode_file"]["tmp_name"], $upload_path)) { //ถ้าสำเร็จให้ใช้ SQL นี้
               echo $new_taget_name ;
               $insert_sql = "UPDATE `paper_user` SET `status`= '$paper_status',`comment`='$comment',`last_edit`= CURRENT_TIMESTAMP,`return_file`= '$new_taget_name' WHERE `paper_id` = '$form_id' AND `user_id` = '$id'  AND `step` = '$step' ";
              
            } else {
                echo 'Move fail';
                $_SESSION['alert'] = 4;
            }
        }
    }else{ //ไม่มีไฟล์ให้ใช้ SQL นี้
        $insert_sql = "UPDATE `paper_user` SET `status`= '$paper_status',`comment`='$comment',`last_edit`= CURRENT_TIMESTAMP WHERE `paper_id` = '$form_id' AND `user_id` = '$id' AND `step` = '$step' ";
    }
    if($insert_sql!="temp"){//มีการเปลี่ยนค่า
        if(mysqli_query($con,$insert_sql)){ //อัพเดทคำตอบสำเร็จ
            $re_step =  mysqli_query($con,"SELECT paper.step_now FROM `paper`,form WHERE  paper.paper_id = '$form_id' AND paper.form_id =form.form_id AND paper.step_now = form.step_all"); //ต้องเปลี่ยนเช็คสุดท้าย เป็น เช็คว่ามีสเตปถัดไปไหท
            if (mysqli_num_rows($re_step)==0){//เช็ตว่าสเตปนี้ไม่ใช่เป็นการอัพครั้งสุดท้ายใช่ไหม
                if($paper_status==0){ //ถ้าคำตอบเป็นไม่ผ่าน
                    if(mysqli_query($con,"UPDATE `paper` SET `status`='0' WHERE `paper_id` = '$form_id' ")){ //อัพเดทสถานะหลักเป็นไม่ผ่าน
                        $_SESSION['alert'] = 3;
                    }else{ //อัพเดทตามนั้นไม่สำเสร็จก็เลยต้องยกเลิกคำตอบ
                        do{
                            $re_update = mysqli_query($con,"UPDATE `paper_user` SET `status`= NULL,`comment`=NULL,`last_edit`=NULL WHERE `paper_id` = '$form_id' AND `user_id` = '$id' AND `step` = '$step' ");
                        }while(!$re_update);
                        $_SESSION['alert'] = 4;
                    }
                }else{
                    $step++;
                    if(mysqli_query($con,"UPDATE `paper` SET `step_now`='$step' WHERE `paper_id` = '$form_id' ")){ //อัพเดทตามนั้น
                        $_SESSION['alert'] = 3;
                    }else{ //อัพเดทตามนั้นไม่สำเสร็จก็เลยต้องยกเลิกคำตอบ
                        do{
                            $re_update = mysqli_query($con,"UPDATE `paper_user` SET `status`= NULL,`comment`=NULL,`last_edit`=NULL WHERE `paper_id` = '$form_id' AND `user_id` = '$id' AND `step` = '$step' ");
                        }while(!$re_update);
                        $_SESSION['alert'] = 4;
                    }
                }   
            }else{//สเตปสุดท้าย
                if($paper_status=='0'){ //ถ้าคำตอบเป็นไม่ผ่าน
                    $sql_up_paper = "UPDATE `paper` SET `status`='5' WHERE `paper_id` = '$form_id' ";
                }else{//ถ้าคำตอบเป็นผ่าน
                    $sql_up_paper = "UPDATE `paper` SET `status`='4' WHERE `paper_id` = '$form_id' ";
                }

                if(mysqli_query($con,$sql_up_paper)){//อัพเดทตามนั้น
                    $_SESSION['alert'] = 3;
                }else{ //อัพเดทตามนั้นไม่สำเสร็จก็เลยต้องยกเลิกคำตอบ
                    do{
                        $re_update = mysqli_query($con,"UPDATE `paper_user` SET `status`= NULL,`comment`=NULL,`last_edit`=NULL WHERE `paper_id` = '$form_id' AND `user_id` = '$id' AND `step` = '$step' ");
                    }while(!$re_update);
                    $_SESSION['alert'] = 4;
                }
            }
            
        }else{ //อัพเดทคำตอบไม่สำเร็จ
            $_SESSION['alert'] = 18;
        }
    }else{
            //เกิดการผิดพลาดร้ายแรง555555
    }
   
    header("Location: main.php");
    exit();

}

$sql_paper_in = "SELECT paper.paper_id, paper.paper_detail, paper.timestamp, paper.owner_id, form.name AS formname, form.form_id, user.title, user.name AS username ,paper_user.step 
FROM `paper_user`, `paper`, `form`, `user` 
WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND user.user_id = paper.owner_id AND form.form_id != '8' AND paper_user.user_id = '$id' AND paper_user.status ='6' AND paper.step_now = paper_user.step ";
$re_paper_in = mysqli_query($con, $sql_paper_in);

$sql_paper_out = "SELECT paper.paper_id, paper.paper_detail, paper.timestamp, paper.owner_id, form.name AS formname, form.form_id, user.title, user.name AS username,paper_user.last_edit 
FROM `paper_user`, `paper`, `form`, `user` 
WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND user.user_id = paper.owner_id AND form.form_id != '8' AND paper_user.user_id = '$id' AND paper_user.status != '6' ORDER BY paper_user.last_edit  ";
$re_paper_out = mysqli_query($con, $sql_paper_out);

$sql_user = "SELECT `title`, `name` FROM `user` WHERE user.user_id = '$id' ";
$re_user = mysqli_query($con, $sql_user);
$row_user = mysqli_fetch_array($re_user);


?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>อาจารย์</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="../picture/icon.png" />
    <!-- datatable -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">

    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../style.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- sweet alert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.33.1/dist/sweetalert2.all.min.js"></script>


</head>

<body class="Gfont">
    <!-- navbar -->
    <div class="container-fluid fix-top" style="background-color:#3782EB">
        <nav class="navbar navbar-expand-lg navbar-light  container" style="background-color:#3782EB">
            <a class="navbar-brand" href="#">
                <img src="../picture/form/ce.png" width="30" height="30" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="main.php" style="color:#FFFFFF;"><i class="fas fa-home"></i>
                            หน้าแรก <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="info.php" style="color:#FFFFFF;">
                            ข้อมูลส่วนตัว</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <a class="nav-link disabled" href="#" style="color:#FFFFFF;"><i class="fas fa-user"></i>
                        <?php echo ' ' . $row_user['title'] . ' ' . $row_user['name']; ?></a>
                    <a class="nav-link" href="../../server/logout.php" style="color:#FFFFFF;">ออกจากระบบ <i class="fas fa-sign-out-alt"></i></a>
                </form>
            </div>
        </nav>
    </div>
    <!-- navbar -->

    <div class="container-fluid" style="background-color:#E4EEFC">
        <div class="container" style="background-color:#AECDF7">
            <!-- div 1 -->
            <br>
            <div class="card-body" style="background-color:#F7FAFE">
                <div class="row">
                    <!-- card 1 -->
                    <div class="col-lg-12">
                        <div class="card mb-3">
                            <div class="card-header text-light" style="background-color:#78ABF2">
                                <h3>Inbox</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover overflow display nowrap responsive" id="table1">
                                        <thead>
                                            <tr>
                                                <th>แบบคำร้อง</th>
                                                <th>รหัสเอกสาร</th>
                                                <th>รหัสนักศึกษา</th>
                                                <th>ชื่อ-สกุล</th>
                                                <th>วันที่-เวลา</th>
                                                <th>ตรวจสอบ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php while ($row_paper_in = mysqli_fetch_array($re_paper_in)) { ?>
                                            <tr class="tr-pick">
                                                <td><?php echo $row_paper_in['formname']; ?></td>
                                                <td><?php echo $row_paper_in['paper_id']; ?></td>
                                                <td><?php echo $row_paper_in['owner_id']; ?></td>
                                                <td><?php echo $row_paper_in['title'] . $row_paper_in['username']; ?>
                                                </td>
                                                <td><?php echo $row_paper_in['timestamp']; ?></td>
                                                <td><button class="btn btn-outline-info"
                                                        onclick="form_paper('<?php echo $row_paper_in['paper_id']; ?>','<?php echo $row_paper_in['form_id']; ?>','<?php echo $row_paper_in['step']; ?>')"><i
                                                            class="fas fa-file-alt"></i></button></td>
                                            </tr>
                                            <?php 
                                        } ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- card 1 -->
                    <!-- card 2 -->
                    <div class="col-lg-12">
                        <div class="card mb-3">
                            <div class="card-header text-light" style="background-color:#78ABF2">
                                <h3>Outbox</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive ">
                                    <table class="table table-hover overflow display nowrap responsive" id="table2">
                                        <thead>
                                            <tr>
                                                <th>รหัสเอกสาร</th>
                                                <th>แบบคำร้อง</th>
                                                <th>รหัสนักศึกษา</th>
                                                <th>ชื่อ-สกุล</th>
                                                <th>วันที่-เวลา</th>
                                                <th>รายละเอียด</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php while ($row_paper_out = mysqli_fetch_array($re_paper_out)) { ?>
                                            <tr class="tr-pick">
                                                <td><?php echo $row_paper_out['formname']; ?></td>
                                                <td><?php echo $row_paper_out['paper_id']; ?></td>
                                                <td><?php echo $row_paper_out['owner_id']; ?></td>
                                                <td><?php echo $row_paper_out['title'] . $row_paper_out['username']; ?>
                                                </td>
                                                <td><?php echo $row_paper_out['last_edit']; ?></td>
                                                <td><button class="btn btn-outline-info"
                                                        onclick="form_paper2('<?php echo $row_paper_out['paper_id']; ?>','<?php echo $row_paper_out['form_id']; ?>')"><i
                                                            class="fas fa-file-alt"></i></button></td>
                                            </tr>
                                            <?php 
                                        } ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- card 2 -->
                </div>
            </div><br>
            <!-- div 1 -->

            <!-- div 2 -->
            <div id="paper_form"></div>
            <div id="up_ans" class="card-footer text-muted">
                <form action="main.php" method="post" id="form_up_ans" enctype="multipart/form-data">
                    <!-- option staff -->
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="comment">Comment</label>
                                <textarea class="form-control" name="comment" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="form-group">
                                <label for="select">Status</label>
                                <select class="form-control" id="select" name="paper_status">
                                    <option disabled selected> เลือกสถานะ </option>
                                    <option value = "1">ผ่าน</option>
                                    <option value = "0">ไม่ผ่าน</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <label for="signatue">แนบเอกสาร</label>
                            <div id="signature">
                                <input type="file" name="uplode_file" id="">
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                        <div class="col-lg-2 offset-lg-10">
                            <button type="submit" name="submit_ans"
                                class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                        </div>
                    </div>
                    <!-- option staff -->
                    <input type="hidden" name="step_now" id="step_now" value="">
                    <!-- <input type="text" name="step_now" id="step_now" value = ""> -->

                </form>
            </div>
            <!-- div 2 -->
        </div><br>
    </div>

    <div class="container-fluid" style="background-color:#87B4F3">
        <div class="container">
            <footer class="text-center" style="background-color:#87B4F3">
                <label>Create by: CEFStyle</label><br>
                <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
            </footer>
        </div>
    </div>




    <!-- Jquery -->
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <!-- datatable -->
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js">
    </script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>

    <script>
        //datatable
        $(document).ready(function() {
            $("#up_ans").hide();
            $('#table1').DataTable({
                responsive: true,
                columnDefs: [{
                        responsivePriority: 1,
                        targets: 0
                    },
                    {
                        responsivePriority: 2,
                        targets: -1
                    }
                ]
            });

            $('#table2').DataTable({
                "order": [4, 'desc'],

                responsive: true,
                columnDefs: [{
                        responsivePriority: 1,
                        targets: 0
                    },
                    {
                        responsivePriority: 2,
                        targets: -1
                    }
                ]
            });

        });
        $('.tr-pick').click(function(e) {
            $('.tr-pick td').css("background-color", "");
            e.preventDefault();
            $(this).find('td').css("background-color", "#E4EEFC");
        });
    </script>

    <script>
        function form_paper(id_paper, type, step) {
            $("#up_ans").show();

            $("#paper_form").html("");

            $.post("other/doc.php", {
                    id: id_paper,
                    cate: type
                },
                function (result) {
                    $("#paper_form").html(result);
                    $('html, body').animate({
                        scrollTop: $('#paper_form').offset().top
                    }, 'slow');
                    $("#step_now").val(step);
                }
            );
        };

        function form_paper2(id_paper, type) {
            $("#up_ans").show();

            $("#paper_form").html("");
            $.post("other/doc.php", {
                    id: id_paper,
                    cate: type
                },
                function(result) {
                    $("#paper_form").html(result);
                    $('html, body').animate({
                        scrollTop: $('#paper_form').offset().top
                    }, 'slow');
                }
            );
        };
    </script>

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <?php require '../../server/alert.php'; ?>
</body>

</html> 