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
$sql_paper = "SELECT paper.paper_id, paper.paper_detail, paper.timestamp, paper.owner_id, form.name AS formname, form.form_id, user.title, user.name AS username  
FROM `paper_user`, `paper`, `form`, `user` 
WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND user.user_id = paper.owner_id AND form.form_id != '8' AND paper_user.user_id = '$id' ";
$re_paper = mysqli_query($con, $sql_paper);

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
                                            <?php while ($row_paper = mysqli_fetch_array($re_paper)) { ?>
                                            <tr class="tr-pick">
                                                <td><?php echo $row_paper['formname']; ?></td>
                                                <td><?php echo $row_paper['paper_id']; ?></td>
                                                <td><?php echo $row_paper['owner_id']; ?></td>
                                                <td><?php echo $row_paper['title'] . $row_paper['username']; ?></td>
                                                <td><?php echo $row_paper['timestamp']; ?></td>
                                                <td><button class="btn btn-outline-info" onclick="form_paper('<?php echo $row_paper['paper_id']; ?>','<?php echo $row_paper['form_id']; ?>')"><i class="fas fa-file-alt"></i></button></td>
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
            <div id="paper_form"></div>
            <div id="up_ans" class="card-footer text-muted">
                <form action="main.php" method="post" id="form_up_ans">
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
                                    <option>ผ่าน</option>
                                    <option>ไม่ผ่าน</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <label for="signatue">แนบเอกสาร</label>
                            <div id="signature">
                                <input type="file" name="file" id="">
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                        <div class="col-lg-2 offset-lg-10">
                            <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                        </div>
                    </div>
                    <!-- option staff -->
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
        function form_paper(id_paper, type) {
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
</body>

</html> 