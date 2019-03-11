<?php 
require '../../server/server.php';


$sql_paper = "SELECT paper.paper_detail, paper.timestamp, paper.owner_id, form.name AS formname, user.title, user.name AS username  
            FROM `paper_user`, `paper`, `form`, `user` 
            WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND user.user_id = paper.owner_id AND form.form_id != '8'";
$re_paper = mysqli_query($con, $sql_paper);



?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>อาจารย์</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="../picture/icon.png" />


    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../style.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


</head>

<body class="Gfont">
    <!-- navbar -->
    <div class="container-fluid fix-top" style="background-color:#3782EB">
        <nav class="navbar navbar-expand-lg navbar-light  container" style="background-color:#3782EB">
            <a class="navbar-brand" href="#">
                <img src="../picture/form/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
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
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <a class="nav-link disabled" href="#" style="color:#FFFFFF;"><i class="fas fa-user"></i>
                        Mr.RVkung</a>
                    <a class="nav-link" href="#" style="color:#FFFFFF;">ออกจากระบบ <i class="fas fa-sign-out-alt"></i></a>
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
                                <div class="table-responsive text-nowrap">
                                    <table class="table table-hover overflow display" id="table1">
                                        <thead>
                                            <tr>
                                                <th>รหัสเอกสาร</th>
                                                <th>แบบคำร้อง</th>
                                                <th>รหัสนักศึกษา</th>
                                                <th>ชื่อ-สกุล</th>
                                                <th>วันที่-เวลา</th>
                                                <th>ตรวจสอบ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php while ($row_paper = mysqli_fetch_array($re_paper)) { ?>
                                            <tr>
                                                <td><?php echo $row_paper['paper_id']; ?></td>
                                                <td><?php echo $row_paper['formname']; ?></td>
                                                <td><?php echo $row_paper['owner_id']; ?></td>
                                                <td><?php echo $row_paper['title'] . $row_paper['name']; ?></td>
                                                <td><?php echo $row_paper['timestamp']; ?></td>
                                                <td><button class="btn btn-outline-info" data-toggle="modal" data-target="#modal1"><i class="fas fa-file-alt"></i></button></td>
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
                                <div class="table-responsive text-nowrap">
                                    <table class="table table-hover overflow display" id="table2">
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
                                            <tr>
                                                <td>doc57574</td>
                                                <td>แบบคำร้องขอสอบภายหลัง</td>
                                                <td>60124879041</td>
                                                <td>นาย สิงหา มาปูนี</td>
                                                <td>2019-01-18 18:44:40</td>
                                                <td><button class="btn btn-outline-info " data-toggle="modal" data-target="#modal2"><i class="fas fa-info-circle"></i></button></td>
                                            </tr>
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
            <div class="card-body" style="background-color:#F7FAFE">
                <!-- card 3 -->
                <div class="card" id="showdata">
                    <div class="card-header text-light" style="background-color:#78ABF2">
                        <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
                    </div>
                    <div class="card-body">
                        <div class="paper card-body">
                            <!-- head -->
                            <div class="row">
                                <div class="col-lg-4"></div>
                                <div class="col-lg-4">
                                    <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                                </div>
                            </div>
                            <!-- head -->

                            <!-- date -->
                            <div class="row container">
                                <div class="col-lg-4"></div>
                                <div class="col-lg-4"></div>
                                <div class="col-lg-4 text-right">
                                    <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                                </div>
                            </div>
                            <!-- date -->

                            <!-- subject -->
                            <div class="row container">
                                <div class="col-lg-1"></div>
                                <div class="col-lg-4">
                                    <p>เรื่อง ลากิจ/ลาป่วย</p>
                                </div>
                                <div class="col-lg-7"></div>
                                <div class="col-lg-1"></div>
                                <div class="col-lg-4">
                                    <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                                </div>
                            </div>
                            <!-- subject -->

                            <!-- body -->
                            <div class="row">
                                <div class="col-lg-2"></div>
                                <div class="col-lg-9">
                                    <div class="card-body">
                                        <p><span style="padding-left:6em"></span>
                                            ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                            สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                            ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- body -->

                            <!-- footer -->
                            <div class="row container" style="margin-top:250px">
                                <div class="col-lg-4"></div>
                                <div class="col-lg-4"></div>
                                <div class="col-lg-4">
                                    <div class=" text-center">
                                        <p>ลายเซ็น</p>
                                        <br>
                                        <hr>
                                        <?php
                                        echo "( ";
                                        for ($i = 0; $i < 70; $i++) {
                                            echo ".";
                                        }
                                        echo " )";
                                        ?>
                                    </div>
                                </div>
                            </div><br>
                            <!-- footer -->
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
                    </div>
                    <br>
                    <div class="card-footer text-muted">
                        <!-- option staff -->
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="comment">Comment</label>
                                    <textarea class="form-control" id="comment" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="form-group">
                                    <label for="select">Status</label>
                                    <select class="form-control" id="select">
                                        <option disabled selected> เลือกสถานะ </option>
                                        <option>ผ่าน</option>
                                        <option>ไม่ผ่าน</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <label for="signatue">แนบเอกสาร</label>
                                <div id="signature">
                                    <input type="file" name="" id="">
                                </div>
                            </div>
                            <div class="col-lg-2"></div>
                            <div class="col-lg-10"></div>
                            <div class="col-lg-2 ">
                                <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                            </div>
                        </div>
                        <!-- option staff -->
                    </div>
                </div>
                <!-- card 3 -->
            </div><br>
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


    <!-- Modal1 -->
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal2 -->
    <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Jquery -->
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <!-- datatable -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
    <script>
        //datatable
        $(document).ready(function() {
            $('#table1').DataTable();
            $('#table2').DataTable();

        });
    </script>

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>

</html> 