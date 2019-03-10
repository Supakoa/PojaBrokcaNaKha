<?php 
require '../../server/server.php';
$id = $_SESSION['id'];
// user
$sql_user = "SELECT `title`, `name` FROM `user` WHERE user.user_id = '$id' ";
$re_user = mysqli_query($con, $sql_user);
$row_user = mysqli_fetch_array($re_user);

/// subject
$sql_sub = "SELECT `sub_id`, `sub_name` FROM `subject` WHERE 1";
$re_sub = mysqli_query($con, $sql_sub);
$sub = '<label for="sub">วิชา</label>
        <select name="sub" class="form-control select2">
        <option hidden="" selected="" value="">เลือกวิชา</option>';
while ($row_sub = mysqli_fetch_array($re_sub)) {
    $sub .= '<option value="' . $row_sub['sub_id'] . '">' . $row_sub['sub_name'] . '</option>';
}
$sub .= '</select>';

/// paper_user
$sql_paper = "SELECT paper.status,form.name,paper.paper_id FROM `paper`,form WHERE `owner_id` ='$id' AND paper.form_id = form.form_id AND form.form_id != '8' ";
$re_paper = mysqli_query($con, $sql_paper);
// $row_paper = mysqli_fetch_array($re_paper);
/// paper_user

if(isset($_POST['senmessage'])){
    $story = $_POST['story'];
    $cont = $_POST['cont'];
    $sql_pp ="INSERT INTO `paper`(`owner_id`, `paper_detail`, `step_now`) VALUES ('$_SESSION['id']','[value-2]','1')";
}

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>นักศึกษา</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="../picture/icon.png" />


    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../style.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">
    
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
            <br><br><br>

            <?php require 'other/news.php'; ?>


            <!-- card 1 -->
            <div id="card1" style="background-color:#AECDF7">
                <div class="card-body">
                    <div class="container mt-3">
                        <div class="container">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs row">
                                <li class="nav-item col-lg-6">
                                    <a class="nav-link active" style="background-color:#5796EE;color:#ffffff;margin-right:-15px;margin-left:-15px" data-toggle="tab" href="#home">ประวัติคำร้อง</a>
                                </li>
                                <li class="nav-item col-lg-6">
                                    <a class="nav-link" data-toggle="tab" href="#report" style="background-color:#3782EB;color:#ffffff;margin-right:-15px;margin-left:-15px">แบบคำร้อง</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <!-- Tab panes 1-->
                            <div id="home" class="container tab-pane active" style="background-color:#5796EE;"><br>
                                <div class="container" style="background-color:#F7FAFE">
                                    <div class="row">
                                        <div class="col-lg-12"><br>
                                            <div class="table-responsive-lg text-nowrap">
                                                <table id="table1" class="table table-hover overflow display">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th>สถานะ</th>
                                                            <th>แบบคำร้อง</th>
                                                            <th>สถานะการดำเนินการ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php $i = 0;
                                                        while ($row_paper = mysqli_fetch_array($re_paper)) {
                                                            $i++; ?>
                                                        <tr>
                                                            <td>
                                                                <?php echo $i;  ?>
                                                            </td>
                                                            <?php 
                                                           echo $row_paper['status'];
                                                            if ($row_paper['status'] == 1) {
                                                                echo '<td><span class="badge badge-success">ผ่าน</span></td>';
                                                            }elseif ($row_paper['status'] == 3) {
                                                                echo '<td><span class="badge badge-warning">กำลังดำเนินการ</span></td>';
                                                            }elseif ($row_paper['status'] == 0) {
                                                                echo '<td><span class="badge badge-danger">ไม่ผ่าน</span></td>';
                                                            }else{
                                                                echo '<td><span class="badge badge-danger">8;p</span></td>';
                                                            } ?>

                                                            <td>
                                                                <?php echo $row_paper['name'];  ?>
                                                            </td>
                                                            <td>
                                                                <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#route" onclick="modal_show(<?php echo $row_paper['paper_id']; ?>,'show')">แสดง</button>
                                                            </td>

                                                        </tr>
                                                        <?php 
                                                    } ?>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br>
                                        </div>
                                    </div>

                                </div>
                                <br>
                            </div>
                            <!-- Tab panes 1-->

                            <!-- Tab panes 2-->
                            <div id="report" class="container tab-pane fade" style="background-color:#3782EB;"><br>
                                <div class="container accordion" id="formreport">

                                    <div class="card">
                                        <!-- form 1 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form1">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>
                                                แบบคำร้องขอตรวจสอบผลการเรียน</div>
                                        </a>

                                        <div id="form1" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post">
                                                    <input type="hidden" name="form_1">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <?php echo $sub; ?>
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <!-- form 1 -->

                                        <!-- form 2 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form2">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>
                                                แบบฟอร์มแจ้งสาเหตุการขาดสอบรายวิชาศึกษาทั่วไป</div>
                                        </a>

                                        <div id="form2" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" name="form_2">
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <?php echo $sub;  ?>

                                                        </div>
                                                        <div class="col-4">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-4">
                                                            <label for="sub">ประเภทการสอบ</label>
                                                            <select name="sub" class="form-control select2">
                                                                <option hidden="" selected="" value="">เลือกประเภท</option>
                                                                <option value="กลางภาค">กลางภาค</option>
                                                                <option value="ปลายภาค">ปลายภาค</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">สาเหตุ</label>
                                                            <input type="text" id="group" class="form-control" placeholder="สาเหตุการขาดสอบ">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="file">สำเนาบัตรนักศึกษา</label>
                                                            <input type="file" name="file" id="file" class="form-control btn btn-light">
                                                        </div>
                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- form 2 -->

                                        <!-- form 3 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form3">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>แบบคำร้องขอแก้ไขผลการเรียน</div>
                                        </a>

                                        <div id="form3" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" name="form_3">

                                                    <div class="row">
                                                        <div class="col-4">
                                                            <?php echo $sub;  ?>

                                                        </div>
                                                        <div class="col-4">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-4">
                                                            <label for="group">ปีการศึกษา</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกปีการศึกษา">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">สาเหตุ</label>
                                                            <input type="text" id="group" class="form-control" placeholder="สาเหตุการขอแก้ไขผลการเรียน  ">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="file">สำเนาบัตรนักศึกษา</label>
                                                            <input type="file" name="file" id="file" class="form-control btn btn-light">
                                                        </div>
                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- form 3 -->

                                        <!-- form 4 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form4">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>
                                                แบบคำร้องขอสอบภายหลัง</div>
                                        </a>

                                        <div id="form4" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" name="form_4">

                                                    <div class="row">
                                                        <div class="col-4">
                                                            <?php echo $sub;  ?>

                                                        </div>
                                                        <div class="col-4">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-4">
                                                            <label for="sub">ประเภทการสอบ</label>
                                                            <select name="sub" class="form-control select2">
                                                                <option hidden="" selected="" value="">เลือกประเภท</option>
                                                                <option value="กลางภาค">กลางภาค</option>
                                                                <option value="ปลายภาค">ปลายภาค</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">สาเหตุ</label>
                                                            <input type="text" id="group" class="form-control" placeholder="สาเหตุการขอสอบ">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="file">หลักฐานสาเหตุ</label>
                                                            <input type="file" name="file" id="file" class="form-control btn btn-light">
                                                        </div>
                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- form 4 -->

                                        <!-- form 5 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form5">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>
                                                แบบใบลาป่วย ลากิจ</div>
                                        </a>

                                        <div id="form5" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post" enctype="multipart/form-data">
                                                    <input type="hidden" name="form_5">

                                                    <div class="row">
                                                        <div class="col-6">
                                                            <?php echo $sub;  ?>

                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="sub">ประเภทการลา</label>
                                                            <select name="sub" class="form-control select2">
                                                                <option hidden="" selected="" value="">เลือกประเภท</option>
                                                                <option value="ลากิจ">ลากิจ</option>
                                                                <option value="ลาป่วย">ลาป่วย</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">สาเหตุ</label>
                                                            <input type="text" id="group" class="form-control" placeholder="สาเหตุการลา">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="ei">ตั้งแต่วันที่</label>
                                                            <input type="date" name="eiei" id="ei" class="form-control" placeholder="ตั้งแต่วันที่">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="ei">ถึงวันที่</label>
                                                            <input type="date" name="eiei" id="ei" class="form-control" placeholder="ตั้งแต่วันที่">
                                                        </div>
                                                        <div class="col-8">
                                                            <label for="file">หลักฐานสาเหตุการลา</label>
                                                            <input type="file" name="file" id="file" class="form-control btn btn-light">
                                                        </div>
                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- form 5 -->

                                        <!-- form 6 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form6">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>
                                                ใบคำร้องขอรหัสผ่านเข้าระบบ</div>
                                        </a>

                                        <div id="form6" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post">
                                                    <input type="hidden" name="form_6">

                                                    <div class="row">
                                                        <div class="col-6">
                                                            <?php echo $sub;  ?>

                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="sub">ประเภทเว็ปไซต์</label>
                                                            <select name="sub" class="form-control select2">
                                                                <option hidden="" selected="" value="">เลือกประเภท</option>
                                                                <option value="เว็บไซต์รายวิชา">เว็บไซต์รายวิชา</option>
                                                                <option value="ระบบตรวจสอบคะแนน">ระบบตรวจสอบคะแนน (TSS)</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">สาเหตุ</label>
                                                            <input type="text" id="group" class="form-control" placeholder="สาเหตุการขอรหัสผ่าน">
                                                        </div>

                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- form 6 -->

                                        <!-- form 7 -->
                                        <a class="collapsed card-link" data-toggle="collapse" href="#form7">
                                            <div class="card-header"><i class="fas fa-angle-double-right"></i>
                                                แบบคำร้องทั่วไป</div>
                                        </a>

                                        <div id="form7" class="collapse" data-parent="#formreport">
                                            <div class="card-body">
                                                <form action="other/muti_form.php" method="post">
                                                    <input type="hidden" name="form_7">

                                                    <div class="row">
                                                        <div class="col-6">

                                                        </div>
                                                        <div class="col-6">
                                                            <label for="group">กลุ่มเรียน</label>
                                                            <input type="text" id="group" class="form-control" placeholder="กรอกกลุ่มเรียน">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="comment">ความประสงค์</label>
                                                            <textarea class="form-control" id="comment" rows="3"></textarea>
                                                        </div>

                                                        <div class="col-12 text-center">
                                                            <br>
                                                            <button type="submit" class="btn btn-success">ส่งแบบคำร้อง</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- form 7 -->
                                        </div>

                                    </div>
                                </div><br>
                            </div>
                            <!-- Tab panes 2-->

                        </div>
                    </div>
                </div>
            </div>
            <!-- card 1 -->

            <br>
            <!-- card 2-->
            <div class="container " style="background-color:#AECDF7">
                <br>
                <div class="container">
                    <div class="card" id="card2">
                        <div class="card-header text-center" style="background-color:#3782EB">
                            <h3>ติดต่อเจ้าหน้าที่</h3>
                        </div>
                        <div class="card-body" style="background-color:#F7FAFE">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="card">
                                            <!-- card 2.1 -->
                                            <div class="card-body">
                                                <div class="table-responsive-lg text-nowrap">
                                                    <table id="table2" class="table table-striped table-hover display ">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>เวลาส่ง</th>
                                                                <th>เรื่อง</th>
                                                                <th>ข้อความ</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <?php while ($row_paper_user = mysqli_fetch_array($re_paper)) { ?>
                                                            <tr>
                                                                <td><span class="badge badge-success">อ่านแล้ว</span></td>
                                                                <td><?php $row_paper_user['timestamp'] ?></td>
                                                                <td>แนบเอกสารลากิจ</td>
                                                                <td>
                                                                    <!-- text modal -->
                                                                    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#confirm1" onclick="modal_ans(<?php $row_paper_user['paper_id'] ?>,'ans')">เจ้าหน้าที่</button>

                                                                </td>
                                                            </tr>

                                                            <?php 
                                                        } ?>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div><!-- card 2.1 -->
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="card">
                                            <!-- card 2.2 -->
                                            <div class="card-body">
                                                <div class="container text-center">
                                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">ส่งข้อความ
                                                        <i class="fas fa-comment"></i></button>
                                                </div>
                                            </div>
                                        </div><!-- card 2.2 -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br><!-- card 2-->
                </div>
            </div><br>
        </div>

    </section><!-- body -->

    <div class="container-fluid" style="background-color:#87B4F3">
        <div class="container">
            <footer class="text-center" style="background-color:#87B4F3">
                <label>Create by: CEFStyle</label><br>
                <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
            </footer>
        </div>
    </div>

    <!-- modal show -->
    <div id="modalshow"></div>
    <!-- modal show -->

    <!-- modal message form admin -->
    <div id="modalans"></div>
    <!-- modal message form admin -->


    <!-- modal card 3.2 -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ติดต่อเจ้าหน้าที่</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="main.php" method="POST">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">เรื่อง:</label>
                            <input name="story" type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">ข้อความ:</label>
                            <textarea name="cont" class="form-control" id="message-text"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
                        <button type="button" name="senmessage" class="btn btn-primary">ส่งข้อความ</button>
                    </div>
                </form>
            </div>
        </div>
        <!--modal card 3.2 -->


        <!-- Jquery -->
        <script src="../node_modules/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script>
        <script>
            //datatable
            $(document).ready(function() {
                $('#table1').DataTable();
                $('#table2').DataTable();

            });
            //tap
            $(document).ready(function() {
                $(".nav-tabs a").click(function() {
                    $(this).tab('show');
                });
                //time news
                $('.carousel').carousel({
                    interval: 2000
                });
                //modal
                $('#myModal').on('shown.bs.modal', function() {
                    $('#myInput').trigger('focus')
                });
            });
        </script>
        <script>
            function modal_show(paperID, type) {

                $.post("other/modal.php", {
                        id: paperID,
                        cate: type
                    },
                    function(result) {
                        $("#modalshow").html(result);
                        $("#route").modal('show');
                    }
                );
            };

            function modal_ans(paperID, type) {
                $.post("other/modal.php", {
                        id: paperID,
                        cate: type
                    },
                    function(result) {
                        $("#modalAns").html(result);
                        $("#confirm1").modal("show");
                    }
                );


            };
        </script>

        <!-- bootstrap 4.2.1 -->
        <script src="../node_modules/popper.js/dist/popper.min.js"></script>
        <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
            <!-- alert all -->
    <?php require '../../server/alert.php'; ?>-
</body>

</html> 